// Auditoría del catálogo Guriche — duplicados, normalización, coherencia de datos.
// Uso: node scripts/audit-catalog.mjs
// No modifica datos. Solo reporta. Fuente canónica: data/catalogo-web.json
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(
  fs.readFileSync(path.join(root, "data", "catalogo-web.json"), "utf8"),
);

// ---------- helpers de normalización ----------
const stripAccents = (s) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "");

// Normaliza nombre de producto para comparación semántica.
function normProduct(name, brand = "") {
  let s = stripAccents(String(name || "")).toLowerCase();
  const b = stripAccents(String(brand || "")).toLowerCase();
  // sacar concentración
  s = s.replace(/\b(eau de parfum|eau de toilette|eau de cologne|parfum intense|extrait de parfum|parfum|edp|edt|edc|edp intense|intense|elixir|cologne|extrait)\b/g, " ");
  // sacar mililitros
  s = s.replace(/\b\d+\s*ml\b/g, " ");
  // sacar género redundante
  s = s.replace(/\b(for (her|him|women|men)|pour (homme|femme)|fem|masc|homme|femme|men|women|him|her|unisex)\b/g, " ");
  // sacar marca repetida dentro del nombre
  if (b) {
    for (const token of b.split(/\s+/).filter((t) => t.length > 2)) {
      s = s.replace(new RegExp(`\\b${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g"), " ");
    }
  }
  s = s.replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
  return s;
}

function normBrand(brand) {
  return stripAccents(String(brand || "")).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

// Levenshtein + ratio de similitud
function lev(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n;
  if (!n) return m;
  const dp = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      dp[j] = Math.min(
        dp[j] + 1,
        dp[j - 1] + 1,
        prev + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
      prev = tmp;
    }
  }
  return dp[n];
}
const sim = (a, b) => (a === b ? 1 : 1 - lev(a, b) / Math.max(a.length, b.length));

// ---------- construir vista ----------
const rows = catalog.map((p, i) => ({
  i,
  id: p["Web ID"],
  cat: p["Categoría"],
  marca: p["Marca"],
  producto: p["Producto"],
  desc: p["Descripción"],
  img: p["Imagen"],
  precio: p["Precio ARS"],
  norm: normProduct(p["Producto"], p["Marca"]),
  normBrand: normBrand(p["Marca"]),
}));

const report = {};

// 1. IDs duplicados
const idMap = new Map();
for (const r of rows) {
  if (!idMap.has(r.id)) idMap.set(r.id, []);
  idMap.get(r.id).push(r);
}
report.idsDuplicados = [...idMap.entries()].filter(([, v]) => v.length > 1);

// 2. Nombre exacto duplicado (marca + producto idénticos)
const exactMap = new Map();
for (const r of rows) {
  const k = `${r.marca}||${r.producto}`;
  if (!exactMap.has(k)) exactMap.set(k, []);
  exactMap.get(k).push(r);
}
report.nombreExacto = [...exactMap.values()].filter((v) => v.length > 1);

// 3. Duplicado semántico (misma marca + mismo nombre normalizado)
const semMap = new Map();
for (const r of rows) {
  const k = `${r.normBrand}||${r.norm}`;
  if (!semMap.has(k)) semMap.set(k, []);
  semMap.get(k).push(r);
}
report.semantico = [...semMap.values()].filter(
  (v) => v.length > 1 && new Set(v.map((x) => x.producto)).size > 1,
);

// 4. Similitud (posibles typos) — misma marca, sim >= 0.85, no ya marcados como semántico exacto
const seen = new Set();
report.similares = [];
const byBrand = new Map();
for (const r of rows) {
  if (!byBrand.has(r.normBrand)) byBrand.set(r.normBrand, []);
  byBrand.get(r.normBrand).push(r);
}
for (const list of byBrand.values()) {
  for (let a = 0; a < list.length; a++) {
    for (let b = a + 1; b < list.length; b++) {
      const ra = list[a], rb = list[b];
      if (ra.norm === rb.norm) continue; // ya en semántico
      const s = sim(ra.norm, rb.norm);
      if (s >= 0.85 && ra.norm && rb.norm) {
        const key = [ra.id, rb.id].sort().join("|");
        if (seen.has(key)) continue;
        seen.add(key);
        report.similares.push({ s: s.toFixed(3), a: ra, b: rb });
      }
    }
  }
}

// 5. Variantes de marca (mismo brand normalizado, distinta escritura)
const brandVariants = new Map();
for (const r of rows) {
  if (!brandVariants.has(r.normBrand)) brandVariants.set(r.normBrand, new Set());
  brandVariants.get(r.normBrand).add(r.marca);
}
report.variantesMarca = [...brandVariants.entries()].filter(([, v]) => v.size > 1);

// 6. Descripciones idénticas entre productos distintos
const descMap = new Map();
for (const r of rows) {
  const d = (r.desc || "").trim();
  if (!d) continue;
  if (!descMap.has(d)) descMap.set(d, []);
  descMap.get(d).push(r);
}
report.descIdenticas = [...descMap.values()].filter(
  (v) => v.length > 1 && new Set(v.map((x) => x.norm)).size > 1,
);

// 7. Datos faltantes
report.sinDesc = rows.filter((r) => !(r.desc || "").trim());
report.sinImg = rows.filter((r) => !(r.img || "").trim());

// 8. Coherencia imagen: existe archivo? nombre de archivo menciona la marca?
report.imgInexistente = [];
report.imgMarcaMismatch = [];
for (const r of rows) {
  if (!r.img) continue;
  const abs = path.join(root, r.img);
  if (!fs.existsSync(abs)) report.imgInexistente.push(r);
  // heurística: la carpeta padre debería mapear a la marca
  const folder = stripAccents(r.img.split("/")[1] || "").toLowerCase();
  const brandTokens = r.normBrand.split(" ").filter((t) => t.length > 2);
  const folderNorm = folder.replace(/[^a-z0-9]+/g, " ");
  const folderMatch = brandTokens.some((t) => folderNorm.includes(t)) ||
    // aliases conocidos
    (r.normBrand.includes("paco rabanne") && folder.includes("paco")) ||
    (r.normBrand.includes("ralph") && folder.includes("ralph"));
  if (brandTokens.length && !folderMatch) report.imgMarcaMismatch.push({ r, folder });
}

// 9. Imágenes compartidas por varios productos (misma ruta exacta)
const imgMap = new Map();
for (const r of rows) {
  if (!r.img) continue;
  if (!imgMap.has(r.img)) imgMap.set(r.img, []);
  imgMap.get(r.img).push(r);
}
report.imgCompartida = [...imgMap.entries()].filter(([, v]) => v.length > 1);

// 10. Nombre de archivo vs producto (concentración distinta, etc.) — heurística suave
report.imgNombreDudoso = [];
for (const r of rows) {
  if (!r.img) continue;
  const fileNorm = normProduct(
    stripAccents(path.basename(r.img)).replace(/\.\w+$/, "").replace(/^\d+\s*-\s*/, ""),
    r.marca,
  );
  if (fileNorm && r.norm && sim(fileNorm, r.norm) < 0.4) {
    report.imgNombreDudoso.push({ r, fileNorm });
  }
}

// ---------- salida ----------
const out = [];
const L = (s = "") => out.push(s);
L(`# Auditoría de catálogo — datos\n`);
L(`Total productos: **${rows.length}** · Marcas: **${new Set(rows.map((r) => r.marca)).size}**\n`);

function section(title, items, fmt) {
  L(`\n## ${title} — ${items.length}\n`);
  if (!items.length) { L(`_Sin hallazgos._`); return; }
  items.forEach((x) => L(fmt(x)));
}

section("IDs duplicados", report.idsDuplicados, ([id, v]) =>
  `- \`${id}\` × ${v.length}: ${v.map((r) => r.producto).join(" | ")}`);
section("Nombre exacto duplicado (marca+producto)", report.nombreExacto, (v) =>
  `- ${v[0].marca} — "${v[0].producto}" → ${v.map((r) => r.id).join(", ")}`);
section("Duplicado semántico (mismo perfume, distinto texto)", report.semantico, (v) =>
  `- ${v[0].marca} :: [${v.map((r) => `${r.id} "${r.producto}"`).join(" ↔ ")}]`);
section("Posibles typos (similitud ≥ 0.85)", report.similares, (x) =>
  `- sim ${x.s} — ${x.a.marca}: "${x.a.producto}" (${x.a.id}) ↔ "${x.b.producto}" (${x.b.id})`);
section("Variantes de escritura de marca", report.variantesMarca, ([, v]) =>
  `- ${[...v].join("  |  ")}`);
section("Descripciones idénticas en productos distintos", report.descIdenticas, (v) =>
  `- "${(v[0].desc || "").slice(0, 60)}…" → ${v.map((r) => `${r.marca}/${r.producto} (${r.id})`).join(" ; ")}`);
section("Sin descripción", report.sinDesc, (r) => `- ${r.id} ${r.marca} ${r.producto}`);
section("Sin imagen", report.sinImg, (r) => `- ${r.id} ${r.marca} ${r.producto}`);
section("Imagen inexistente (archivo no encontrado)", report.imgInexistente, (r) =>
  `- ${r.id} ${r.marca} "${r.producto}" → \`${r.img}\``);
section("Imagen en carpeta de otra marca (revisar)", report.imgMarcaMismatch, (x) =>
  `- ${x.r.id} ${x.r.marca} "${x.r.producto}" → carpeta \`${x.folder}\` (\`${x.r.img}\`)`);
section("Nombre de archivo dudoso vs producto (revisar)", report.imgNombreDudoso, (x) =>
  `- ${x.r.id} ${x.r.marca} "${x.r.producto}" → \`${path.basename(x.r.img)}\``);
section("Misma ruta de imagen compartida por varios productos", report.imgCompartida, ([img, v]) =>
  `- \`${img}\` × ${v.length}: ${v.map((r) => `${r.marca}/${r.producto} (${r.id})`).join(" | ")}`);

// resumen numérico
const problemIds = new Set();
[report.idsDuplicados.flatMap(([, v]) => v),
 report.nombreExacto.flat(),
 report.semantico.flat(),
 report.similares.flatMap((x) => [x.a, x.b]),
 report.descIdenticas.flat(),
 report.sinDesc, report.sinImg, report.imgInexistente,
 report.imgMarcaMismatch.map((x) => x.r),
 report.imgCompartida.flatMap(([, v]) => v),
].forEach((arr) => arr.forEach((r) => problemIds.add(r.id)));

L(`\n## Resumen\n`);
L(`- Productos totales: ${rows.length}`);
L(`- Productos con al menos un problema: ${problemIds.size}`);
L(`- Productos limpios: ${rows.length - problemIds.size}`);

const md = out.join("\n");
fs.writeFileSync(path.join(root, "scripts", "_out-catalog.md"), md);
console.log(md);
