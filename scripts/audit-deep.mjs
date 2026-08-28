// Auditoría PROFUNDA: por cada producto parsea marca / nombre base / concentración / tamaño / género,
// detecta perfumes repetidos (misma marca+base+género+concentración+tamaño) y verifica que la
// imagen asignada sea la fragancia CORRECTA comparando contra el nombre del archivo de imagen.
// Uso: node scripts/audit-deep.mjs   → escribe scripts/_out-deep.md
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(fs.readFileSync(path.join(root, "data", "catalogo-web.json"), "utf8"));

const strip = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");

// alias de marca → tokens que también pueden aparecer en el nombre/carpeta
const BRAND_ALIASES = {
  "yves saint laurent": ["ysl", "yves", "saint", "laurent"],
  "paco rabanne": ["paco", "rabanne"],
  "dolce & gabbana": ["dolce", "gabbana", "gabanna", "dg"],
  "giorgio/emporio armani": ["giorgio", "emporio", "armani"],
  "maison francis kurkdjian": ["mfk", "maison", "francis", "kurkdjian"],
  "bottega veneta": ["bottega", "veneta", "bvb"],
  "parfums de marly": ["parfums", "marly", "pdm"],
  "jean paul gaultier": ["jean", "paul", "gaultier", "jpg"],
  "bvlgari le gemme": ["bvlgari", "bulgari", "gemme", "le"],
  "calvin klein": ["calvin", "klein", "ck"],
  "louis vuitton": ["louis", "vuitton", "lv"],
  "juliette has a gun": ["juliette", "has", "gun"],
  "atelier cologne": ["atelier", "cologne"],
  "atelier des ors": ["atelier", "des", "ors"],
  "bond no.9": ["bond", "no", "9"],
  "bois 1920": ["bois", "1920"],
  "alexandre.j": ["alexandre", "j"],
  "jo malone": ["jo", "malone", "jm"],
};

const CONC_MAP = [
  [/\beau de parfum\b|\bedp\b/g, "EDP"],
  [/\beau de toilette\b|\bedt\b/g, "EDT"],
  [/\beau de cologne\b|\bedc\b/g, "EDC"],
  [/\bextrait de parfum\b|\bextrait\b/g, "EXTRAIT"],
  [/\bparfum intense\b/g, "PARFUM_INTENSE"],
  [/\ble parfum\b/g, "LE_PARFUM"],
  [/\bparfum\b/g, "PARFUM"],
  [/\belixir\b/g, "ELIXIR"],
  [/\bcologne\b/g, "COLOGNE"],
  [/\beau fraiche\b/g, "EAU_FRAICHE"],
];

function parseConc(s) {
  const t = strip(s).toLowerCase();
  for (const [re, tag] of CONC_MAP) { re.lastIndex = 0; if (re.test(t)) return tag; }
  return "";
}
function parseSize(s) {
  const m = strip(s).toLowerCase().match(/(\d+)\s*ml/);
  return m ? m[1] + "ML" : "";
}
function parseGender(s) {
  const t = " " + strip(s).toLowerCase() + " ";
  if (/\b(fem|femme|women|woman|for her|pour femme|her|donna)\b/.test(t)) return "F";
  if (/\b(masc|homme|men|man|for him|pour homme|him|uomo)\b/.test(t)) return "M";
  return "";
}

function baseName(name, brand) {
  let s = strip(name).toLowerCase();
  // sacar paréntesis
  s = s.replace(/\([^)]*\)/g, " ");
  // sacar SOLO concentración pura (edp/edt/edc/eau de.../parfum/cologne/extrait/le parfum).
  // OJO: NO se sacan flankers (intense, absolu, elixir, overdose, blossom, refillable...):
  // esas palabras SÍ distinguen productos distintos.
  s = s.replace(/\beau de parfum\b|\beau de toilette\b|\beau de cologne\b|\bextrait de parfum\b|\ble parfum\b|\bparfum\b|\bcologne\b|\beau fraiche\b|\bedp\b|\bedt\b|\bedc\b/g, " ");
  // sacar tamaño
  s = s.replace(/\b\d+\s*ml\b/g, " ");
  // sacar género y relleno
  s = s.replace(/\b(fem|femme|women|woman|masc|homme|men|man|for her|for him|pour homme|pour femme|her|him|unisex|uomo|donna|for|by)\b/g, " ");
  // sacar marca y alias
  const b = strip(brand).toLowerCase();
  const tokens = new Set([...b.split(/[^a-z0-9]+/), ...(BRAND_ALIASES[b] || [])].filter((t) => t.length > 1));
  for (const t of tokens) s = s.replace(new RegExp("\\b" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "g"), " ");
  s = s.replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
  return s;
}

// identidad de la imagen a partir del nombre de archivo
function imageIdentity(imgPath, brand) {
  let f = strip(path.basename(imgPath)).toLowerCase().replace(/\.\w+$/, "");
  f = f.replace(/^\d+\s*-\s*/, "");          // "17 - "
  f = f.replace(/_/g, " ").replace(/-/g, " ");
  f = f.replace(/\bby\b/g, " ");
  return baseName(f, brand);
}

// Levenshtein ratio
function lev(a, b) {
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  const dp = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) { let prev = dp[0]; dp[0] = i;
    for (let j = 1; j <= n; j++) { const tmp = dp[j];
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = tmp; } }
  return dp[n];
}
const sim = (a, b) => (!a || !b ? 0 : a === b ? 1 : 1 - lev(a, b) / Math.max(a.length, b.length));
// contención de tokens (para nombres multi-palabra)
function tokenScore(a, b) {
  const A = new Set(a.split(" ").filter(Boolean)), B = new Set(b.split(" ").filter(Boolean));
  if (!A.size || !B.size) return 0;
  let inter = 0; for (const t of A) if (B.has(t)) inter++;
  return inter / Math.max(A.size, B.size);
}
const matchScore = (a, b) => Math.max(sim(a, b), tokenScore(a, b));

// ---- construir vista de productos ----
const rows = catalog.map((p) => {
  const brand = p["Marca"];
  const prod = p["Producto"];
  return {
    id: p["Web ID"], brand, prod, img: p["Imagen"],
    base: baseName(prod, brand),
    conc: parseConc(prod), size: parseSize(prod), gender: parseGender(prod),
    imgId: imageIdentity(p["Imagen"], brand),
  };
});

// ---- catálogo de imágenes disponibles (para proponer la correcta) ----
function walk(d) { const o = []; for (const e of fs.readdirSync(d, { withFileTypes: true })) {
  const pp = path.join(d, e.name); if (e.isDirectory()) o.push(...walk(pp));
  else if (/\.(png|jpe?g|webp)$/i.test(e.name)) o.push(pp); } return o; }
const allImages = walk(path.join(root, "img")).map((f) => {
  const relp = path.relative(root, f).replace(/\\/g, "/");
  const folder = relp.split("/")[1] || "";
  return { rel: relp, folder, ident: imageIdentity(relp, folder.replace(/[_]/g, " ")) };
});

const report = [];
const L = (s = "") => report.push(s);

// ================= 1) PERFUMES REPETIDOS =================
const dupKey = (r) => [strip(r.brand).toLowerCase(), r.base, r.gender, r.conc, r.size].join("|");
const groups = new Map();
for (const r of rows) { const k = dupKey(r); if (!groups.has(k)) groups.set(k, []); groups.get(k).push(r); }
const dups = [...groups.values()].filter((g) => g.length > 1);

// duplicados por TYPO: misma marca+género+conc+tamaño, base casi idéntica (sim ≥ 0.85) pero no igual
const typoDups = [];
const byBGCS = new Map();
for (const r of rows) {
  const k = [strip(r.brand).toLowerCase(), r.gender, r.conc, r.size].join("|");
  if (!byBGCS.has(k)) byBGCS.set(k, []); byBGCS.get(k).push(r);
}
for (const list of byBGCS.values()) {
  for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
    const a = list[i], b = list[j];
    if (a.base === b.base || !a.base || !b.base) continue;
    if (sim(a.base, b.base) >= 0.85) typoDups.push([a, b]);
  }
}

L("# Auditoría profunda — repetidos, concentración, tamaño e imagen\n");
L(`Total: ${rows.length} productos.\n`);
L(`\n## 1) Perfumes REPETIDOS (misma marca + nombre + género + concentración + tamaño) — ${dups.length} grupos\n`);
L("Estos son el MISMO SKU listado ≥2 veces. Propuesta: mantener el 1º, eliminar el resto.\n");
for (const g of dups) {
  L(`\n**${g[0].brand} — ${g[0].base.toUpperCase()}${g[0].conc ? " · " + g[0].conc : ""}${g[0].size ? " · " + g[0].size : ""}${g[0].gender ? " · " + g[0].gender : ""}**`);
  g.forEach((r, i) => L(`  - ${i === 0 ? "MANTENER" : "ELIMINAR"}: ${r.id}  "${r.prod}"  → \`${path.basename(r.img)}\``));
}
L(`\n### 1b) Duplicados por error de tipeo (base casi idéntica) — ${typoDups.length}\n`);
for (const [a, b] of typoDups) {
  L(`- ${a.brand}: ${a.id} "${a.prod}" ↔ ${b.id} "${b.prod}"  (base "${a.base}" vs "${b.base}")`);
}

// ================= 2) IMAGEN INCORRECTA (otra fragancia) =================
// La imagen es de OTRA fragancia si su identidad no matchea la base del producto.
const WRONG_TH = 0.5;
const wrong = [];
for (const r of rows) {
  // si el nombre del producto queda vacío (marca+género, ej. "Dior Homme", "Azzaro Pour Homme")
  // no se puede juzgar por texto: la imagen homónima suele ser correcta → se omite.
  if (!r.base || !r.imgId) continue;
  const score = matchScore(r.base, r.imgId);
  if (score < WRONG_TH) {
    // buscar mejor imagen para este producto en toda la biblioteca (misma carpeta primero)
    let best = null;
    for (const im of allImages) {
      const s = matchScore(r.base, im.ident);
      const sameFolderBonus = 0; // ya filtramos por identidad
      if (!best || s > best.s) best = { s, im };
    }
    wrong.push({ r, score, best });
  }
}
wrong.sort((a, b) => a.score - b.score);
L(`\n\n## 2) Imagen que NO corresponde a la fragancia — ${wrong.length}\n`);
L("La foto asignada es de otra fragancia (nombre de archivo ≠ nombre del producto). Se propone la mejor imagen disponible.\n");
for (const w of wrong) {
  const prop = w.best && w.best.s >= 0.6 ? `→ PROPUESTA: \`${w.best.im.rel}\` (score ${w.best.s.toFixed(2)})` : "→ sin imagen clara disponible (revisar / falta foto)";
  L(`- ${w.r.id} **${w.r.brand} ${w.r.prod}**`);
  L(`    usa \`${w.r.img}\`  · img-id="${w.r.imgId}" vs prod="${w.r.base}" (score ${w.score.toFixed(2)})`);
  L(`    ${prop}`);
}

// ================= 3) MISMA FOTO PARA DISTINTAS FRAGANCIAS =================
const byImg = new Map();
for (const r of rows) { if (!byImg.has(r.img)) byImg.set(r.img, []); byImg.get(r.img).push(r); }
const sharedDiff = [];
for (const [img, list] of byImg) {
  if (list.length < 2) continue;
  const bases = new Set(list.map((r) => r.base + "|" + r.gender));
  if (bases.size > 1) sharedDiff.push({ img, list });
}
L(`\n\n## 3) Misma foto compartida por fragancias DISTINTAS (o distinto género) — ${sharedDiff.length}\n`);
L("No son variantes de tamaño: son perfumes distintos con la misma imagen. Cada uno debería tener la suya.\n");
for (const s of sharedDiff) {
  L(`\n\`${s.img}\``);
  s.list.forEach((r) => L(`  - ${r.id} "${r.prod}"  (base="${r.base}"${r.gender ? ", " + r.gender : ""})`));
}

// ================= 4) MISMA FOTO PARA DISTINTAS CONCENTRACIONES/ TAMAÑOS (informativo) =================
const sharedConc = [];
for (const [img, list] of byImg) {
  if (list.length < 2) continue;
  const bases = new Set(list.map((r) => r.base + "|" + r.gender));
  if (bases.size > 1) continue; // ya está en (3)
  const variants = new Set(list.map((r) => r.conc + "/" + r.size));
  if (variants.size > 1) sharedConc.push({ img, list });
}
L(`\n\n## 4) Misma foto para el mismo perfume en distinta concentración/tamaño — ${sharedConc.length} (informativo)\n`);
L("Aceptable si no tienen foto por variante. Ideal: foto propia por concentración cuando el frasco cambia de color.\n");
for (const s of sharedConc) {
  L(`- \`${path.basename(s.img)}\` → ${s.list.map((r) => `${r.id} ${r.conc}/${r.size}`).join(", ")}  (${s.list[0].brand} ${s.list[0].base})`);
}

// ================= 5) PROPUESTA DE IMAGEN CORRECTA POR PRODUCTO =================
// Para cada producto, busca en la carpeta de SU marca la imagen cuyo nombre matchea mejor
// que la actual. Incluye género (si el archivo dice MASC/FEM/HOMME/FEMME).
function fileGender(name) {
  const t = " " + strip(name).toLowerCase() + " ";
  if (/\b(fem|femme|women|woman|her|donna)\b/.test(t)) return "F";
  if (/\b(masc|homme|men|man|him|uomo)\b/.test(t)) return "M";
  return "";
}
const imagesByFolder = new Map();
for (const im of allImages) {
  if (!imagesByFolder.has(im.folder)) imagesByFolder.set(im.folder, []);
  imagesByFolder.get(im.folder).push({ ...im, g: fileGender(path.basename(im.rel)) });
}
function scoreImg(r, im) {
  let s = matchScore(r.base, im.ident);
  // penalizar género distinto si ambos lo tienen definido
  if (r.gender && im.g && r.gender !== im.g) s -= 0.35;
  if (r.gender && im.g && r.gender === im.g) s += 0.1;
  return s;
}
const proposals = [];
for (const r of rows) {
  const folder = r.img.split("/")[1];
  const cands = imagesByFolder.get(folder) || [];
  const currentIdent = imageIdentity(r.img, folder.replace(/[_]/g, " "));
  const currentScore = matchScore(r.base, currentIdent) + (r.gender && fileGender(path.basename(r.img)) === r.gender ? 0.1 : 0);
  let best = null;
  for (const im of cands) {
    const s = scoreImg(r, im);
    if (!best || s > best.s) best = { s, im };
  }
  if (best && best.im.rel !== r.img && best.s >= 0.6 && best.s >= currentScore + 0.2) {
    proposals.push({ r, from: r.img, to: best.im.rel, cur: currentScore, s: best.s });
  }
}
proposals.sort((a, b) => (b.s - b.cur) - (a.s - a.cur));
L(`\n\n## 5) Reasignaciones de imagen propuestas (hay una foto mejor en la carpeta) — ${proposals.length}\n`);
L("Para cada uno existe en /img una imagen que matchea el nombre del producto mejor que la actual.\n");
for (const p of proposals) {
  L(`- ${p.r.id} **${p.r.brand} ${p.r.prod}**`);
  L(`    de \`${path.basename(p.from)}\` (score ${p.cur.toFixed(2)}) → **\`${path.basename(p.to)}\`** (score ${p.s.toFixed(2)})`);
  L(`      ruta destino: \`${p.to}\``);
}

// resumen
L(`\n\n## Resumen`);
L(`- Reasignaciones de imagen propuestas: ${proposals.length}`);
L(`- Grupos de perfumes repetidos: ${dups.length} (filas a eliminar: ${dups.reduce((a, g) => a + g.length - 1, 0)})`);
L(`- Productos con imagen de otra fragancia: ${wrong.length}`);
L(`- Fotos compartidas por fragancias distintas: ${sharedDiff.length}`);
L(`- Fotos compartidas por concentración/tamaño (ok): ${sharedConc.length}`);

fs.writeFileSync(path.join(root, "scripts", "_out-deep.md"), report.join("\n"));
console.log("Repetidos:", dups.length, "| Imagen incorrecta:", wrong.length, "| Foto compartida (distinta fragancia):", sharedDiff.length, "| compartida conc/tamaño:", sharedConc.length);
