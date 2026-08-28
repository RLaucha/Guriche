// Auditoría de imágenes del catálogo Guriche.
// Método 1: rutas exactas compartidas (por producto).
// Método 2: hash SHA-256 del archivo → contenido idéntico, distinto nombre.
// Método 3: hash perceptual (dHash 8x8) → visualmente iguales (recomprimidas/reescaladas).
// Uso: node scripts/audit-images.mjs
// Requiere sharp (devDependency) para el método 3. Si no está, corre 1 y 2.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const imgDir = path.join(root, "img");

// listar todas las imágenes
function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (/\.(png|jpe?g|webp|gif|avif)$/i.test(e.name)) out.push(p);
  }
  return out;
}
const files = walk(imgDir);
const rel = (p) => path.relative(root, p).replace(/\\/g, "/");

// productos que referencian cada imagen
const catalog = JSON.parse(
  fs.readFileSync(path.join(root, "data", "catalogo-web.json"), "utf8"),
);
const refBy = new Map();
for (const p of catalog) {
  const img = (p["Imagen"] || "").replace(/\\/g, "/");
  if (!img) continue;
  if (!refBy.has(img)) refBy.set(img, []);
  refBy.get(img).push(`${p["Marca"]}/${p["Producto"]} (${p["Web ID"]})`);
}

const out = [];
const L = (s = "") => out.push(s);
L(`# Auditoría de imágenes\n`);
L(`Archivos de imagen: **${files.length}** · Referencias en catálogo: **${refBy.size}** rutas únicas\n`);

// --- imágenes huérfanas (en /img pero sin producto) ---
const referenced = new Set([...refBy.keys()]);
const orphans = files.map(rel).filter((r) => !referenced.has(r));
L(`\n## Imágenes en /img no usadas por ningún producto — ${orphans.length}\n`);
orphans.length ? orphans.forEach((o) => L(`- \`${o}\``)) : L("_Ninguna._");

// --- Método 2: hash SHA-256 ---
const byHash = new Map();
for (const f of files) {
  const h = crypto.createHash("sha256").update(fs.readFileSync(f)).digest("hex");
  if (!byHash.has(h)) byHash.set(h, []);
  byHash.get(h).push(rel(f));
}
const dupContent = [...byHash.values()].filter((v) => v.length > 1);
L(`\n## Archivos con contenido IDÉNTICO (SHA-256), distinto nombre — ${dupContent.length}\n`);
if (!dupContent.length) L("_Ninguno._");
for (const g of dupContent) {
  L(`- ${g.map((x) => `\`${x}\``).join("  ==  ")}`);
  for (const x of g) {
    const r = refBy.get(x);
    if (r) L(`    - ${x} → ${r.join(" | ")}`);
  }
}

// --- Método 3: dHash perceptual (requiere sharp) ---
let sharp = null;
try { sharp = (await import("sharp")).default; } catch { /* sin sharp */ }

if (!sharp) {
  L(`\n## Hash perceptual — OMITIDO (sharp no instalado)\n`);
} else {
  // dHash 8x8: escala a 9x8 gris, compara pixeles horizontales adyacentes → 64 bits
  async function dhash(file) {
    const { data, info } = await sharp(file)
      .grayscale()
      .resize(9, 8, { fit: "fill" })
      .raw()
      .toBuffer({ resolveWithObject: true });
    let bits = "";
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        const i = y * info.width + x;
        bits += data[i] < data[i + 1] ? "1" : "0";
      }
    }
    return bits;
  }
  const hamming = (a, b) => {
    let d = 0;
    for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) d++;
    return d;
  };

  const hashes = [];
  for (const f of files) {
    try { hashes.push({ f: rel(f), h: await dhash(f) }); }
    catch (e) { L(`- (error hash) ${rel(f)}: ${e.message}`); }
  }

  // agrupar por distancia <= 5 (evitando pares ya idénticos por SHA)
  const sameContent = new Set();
  for (const g of dupContent) for (let i = 1; i < g.length; i++) sameContent.add([g[0], g[i]].sort().join("|"));

  const near = [];
  for (let i = 0; i < hashes.length; i++) {
    for (let j = i + 1; j < hashes.length; j++) {
      const d = hamming(hashes[i].h, hashes[j].h);
      if (d <= 5) {
        const key = [hashes[i].f, hashes[j].f].sort().join("|");
        near.push({ d, a: hashes[i].f, b: hashes[j].f, sameFile: sameContent.has(key) });
      }
    }
  }
  near.sort((x, y) => x.d - y.d);
  L(`\n## Imágenes visualmente casi idénticas (dHash, Hamming ≤ 5) — ${near.length} pares\n`);
  L(`_Excluye pares ya idénticos por SHA. Distinta carpeta/marca = revisar posible imagen equivocada._\n`);
  if (!near.length) L("_Ninguno._");
  for (const n of near) {
    if (n.sameFile) continue;
    const brandA = n.a.split("/")[1], brandB = n.b.split("/")[1];
    const flag = brandA !== brandB ? " ⚠️ DISTINTA MARCA" : "";
    L(`- d=${n.d}${flag}  \`${n.a}\`  ~  \`${n.b}\``);
  }
}

const md = out.join("\n");
fs.writeFileSync(path.join(root, "scripts", "_out-images.md"), md);
console.log(md.length > 8000 ? md.slice(0, 8000) + "\n…(ver scripts/_out-images.md)" : md);
