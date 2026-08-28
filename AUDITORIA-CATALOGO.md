# Auditoría del catálogo — Guriche

_Fecha: 2026-08-28 · Rama: `auditoria/optimizacion-completa`_
_Scripts reproducibles: `scripts/audit-catalog.mjs` y `scripts/audit-images.mjs` (`node scripts/audit-catalog.mjs`)._

## Resumen numérico

| Métrica | Valor |
|---|---|
| Productos publicados | **386** |
| Marcas | 41 |
| Archivos de imagen en `/img` | 393 |
| Rutas de imagen únicas referenciadas | 306 |
| Imágenes en `/img` sin usar (huérfanas) | 87 |
| Productos con al menos un problema | 179 |
| Productos limpios | 207 |
| **Duplicados reales (fila repetida)** | **12 pares → 12 filas a eliminar** |

> ⚠️ **Importante sobre la fuente de datos.** El catálogo vive **triplicado**:
> 1. `data/catalogo-web.json` (386 filas, con `Web ID`) — fallback offline.
> 2. `const catalogo` hardcodeado en `script.js` (lo que renderiza por defecto).
> 3. **Google Sheet "Exportación web"** (`catalog-source.js`) — **fuente de verdad en vivo**; sobrescribe a las otras dos al cargar la página.
>
> Cualquier corrección de datos (borrar duplicados, arreglar typos) hay que hacerla **también en el Google Sheet**, o la web la vuelve a traer al recargar. Yo puedo dejar limpios el JSON y el `script.js`; el Sheet lo tenés que editar vos (no tengo acceso). Te dejo la lista exacta de filas.

---

## P0 — Duplicados reales (misma fragancia listada dos veces)

Mismo producto, **misma imagen y misma descripción**: es una fila repetida, no una variante de tamaño. Un cliente ve el perfume dos veces → daña credibilidad. **Propongo eliminar la 2ª fila de cada par. No borro nada sin tu OK.**

| # | Mantener | Eliminar | Marca | Producto | Motivo de la 2ª fila |
|---|---|---|---|---|---|
| 1 | WEB-0028 | **WEB-0034** | Calvin Klein | Eternity Men EDT 100ml | prefijo de marca redundante |
| 2 | WEB-0036 | **WEB-0040** | Versace | Eros Azul EDT 100ml | prefijo de marca redundante |
| 3 | WEB-0097 | **WEB-0114** | Tom Ford | Ombre Leather EDP 100ml | fila idéntica |
| 4 | WEB-0128 | **WEB-0131** | Parfums de Marly | Althair EDP 125ml | fila idéntica |
| 5 | WEB-0129 | **WEB-0145** | Parfums de Marly | Layton EDP 125ml | fila idéntica |
| 6 | WEB-0170 | **WEB-0174** | Mugler | Angel Refillable EDP 100ml | mismo SKU, palabras reordenadas |
| 7 | WEB-0249 | **WEB-0252** | Bond No.9 | Madison Avenue EDP 100ml | fila idéntica |
| 8 | WEB-0264 | **WEB-0270** | Mancera | Xplicit Vanilla EDP 120ml | prefijo de marca redundante |
| 9 | WEB-0266 | **WEB-0280** | Mancera | Instant Crush EDP 120ml | fila idéntica |
| 10 | WEB-0303 | **WEB-0316** | Initio | Psychedelic Love EDP 90ml | **la 2ª está mal escrita: "PSYCHODELIC"** |
| 11 | WEB-0304 | **WEB-0309** | Initio | High Frequency EDP 90ml | fila idéntica |
| 12 | WEB-0305 | **WEB-0318** | Initio | Side Effect EDP 90ml | fila idéntica |

**Acción:** pendiente de tu OK. Cuando confirmes, elimino las 12 filas de `catalogo-web.json` y de `script.js`, y te dejo la misma lista para borrar en el Sheet.

---

## P0 — Errores de escritura visibles (credibilidad de "producto original")

Una marca de perfume original mal escrita es la señal #1 de tienda trucha. Estos se ven en la ficha.

| Problema | Dónde | Evidencia | Arreglo propuesto | Estado |
|---|---|---|---|---|
| Marca **"GABANNA"** (correcto: Gabbana, doble B) | 9 productos + nombres de archivo | WEB-0062/63/64/65/66/67 y otros: `DOLCE & GABANNA Q…` | Corregir a "Dolce & Gabbana" en nombres de producto | Pendiente OK (cambio de datos) |
| Typo **"PSYCHODELIC"** | WEB-0316 | debería ser "Psychedelic" | Se resuelve al eliminar el duplicado #10 | Pendiente OK |
| "YVES SAINT **LAUREN**" (falta T) | WEB-0079 | `YVES SAINT LAUREN LIBRE EDP INTENSE` | Corregir a "Yves Saint Laurent" | Pendiente OK |
| "YVES SAINT **LAURENTE**" (T de más) | WEB-0080 | `YVES SAINT LAURENTE LIBRE L'EAU NUE` | Corregir a "Yves Saint Laurent" | Pendiente OK |
| "INTESE" (falta N) | WEB-0180, WEB-0182 | `…EDP INTESE`, `PARFUM INTESE` | Corregir a "Intense" | Pendiente OK |

_No los toco todavía porque son datos y además hay que replicarlos en el Sheet. Dame OK y los corrijo en lote._

---

## P1 — Imagen incoherente con el producto (perfumes distintos, misma foto)

19 grupos donde una **misma imagen** la comparten fragancias **realmente distintas** (no son tamaños de lo mismo). Acá el frasco que se muestra no es el del producto. En varios casos **ya existe la imagen correcta sin usar** (de las 87 huérfanas) y el arreglo es solo re-apuntar la ruta.

| Producto que muestra foto equivocada | Foto que usa hoy | ¿Hay imagen correcta disponible? | Estado |
|---|---|---|---|
| WEB-0012 Olympea **Blossom** | `14 - Rabanne - Olympea.png` (es la Olympea normal) | No exacta (hay "Olympea Flora", que es otra) → **falta** | Marcar faltante |
| WEB-0098 Tom Ford **Eau d'Ombre Leather** | `17 - Ombre Leather.png` (es la Ombre Leather normal) | **Sí:** `16`/`21 - Eau d Ombre Leather.png` (huérfanas) | Puedo re-apuntar con tu OK |
| WEB-0118 **White Patchouli** | `02 - White Suede.png` (es White Suede) | No hay White Patchouli → **falta** | Marcar faltante |
| WEB-0322 Montale **Aoud Ambre** | `12 - Aoud Leather.png` | **Sí:** `13 - Aoud Amber.png` (huérfana) | Puedo re-apuntar con tu OK |
| WEB-0323 Montale **Aoud Greddy** | `12 - Aoud Leather.png` | **Sí:** `11 - Aoud Greedy.png` (huérfana) | Puedo re-apuntar con tu OK |
| WEB-0204 Valentino **Uomo Clásico** | `02 - Uomo Born In Roma Intense.png` | Revisar (hay `04 - Uomo Born In Roma.png`) | Revisar manual |
| WEB-0189 JPG **Divine Couture** | `12 - Divine Elixir.png` | Revisar | Revisar manual |
| Grupo JPG **Scandal** (8 variantes fem/masc) comparten `09 - Scandal Intense.png` | ídem | Hay varias huérfanas (So Scandal, Scandal Pour Homme…) | Revisar manual (requiere emparejar) |

> El resto de imágenes compartidas (Sauvage EDT/EDP/Parfum, Layton 125/75ml, Black Orchid 30/50/100ml, etc.) son **el mismo perfume en distinto tamaño/concentración** → reusar el frasco es correcto, **no es un error**.

**Nota sobre hash perceptual:** corrí dHash (Hamming ≤ 5) sobre las 393 imágenes. Dio 264 pares, pero es **poco concluyente para este catálogo**: los frascos sobre fondo blanco hashean casi igual (p. ej. todos los Montale dan distancia 0 entre sí siendo perfumes distintos). Por eso **no actúo sobre coincidencias entre marcas** del pHash — son falsos positivos por silueta parecida. El detector confiable de imagen repetida es el SHA-256 (abajo).

---

## P2 — Archivos de imagen idénticos con distinto nombre (SHA-256)

15 grupos de archivos byte-idénticos duplicados con otro nombre. No rompen nada (peso muerto en el repo). Limpieza opcional. Ejemplos con impacto en catálogo:

- `Chanel_Bleu_de_Chanel.png` == `Chanel_Bleu_de_Chanel_Parfum.png` → EDP (WEB-0225) y Parfum (WEB-0220) muestran la misma foto (son variantes, aceptable; se puede dejar una sola).
- `PSYCHEDELIC_LOVE_…png` == `PSYCHODELIC_LOVE_…png` → confirma el duplicado #10.
- El resto son mayormente archivos huérfanos (`06`/`09 Black Orchid`, `23`/`24 Layton`, etc.).

Lista completa reproducible con `node scripts/audit-images.mjs`.

---

## P2 — Otros hallazgos de datos

| Hallazgo | Detalle | Arreglo propuesto |
|---|---|---|
| Marca combinada rara | 10 productos con marca `GIORGIO/EMPORIO ARMANI` | ¿Separar en "Giorgio Armani" y "Emporio Armani"? Decisión tuya |
| Descripciones idénticas entre productos distintos | 9 casos (p. ej. Bvlgari Reali Rubinia / Rubinia; Xerjoff Accento / Accento Overdose) | La mayoría se resuelven al deduplicar; 2-3 son productos distintos con copy repetido → reescribir |
| 87 imágenes huérfanas | fotos alternativas cargadas pero sin producto | Sirven para arreglar los casos P1 de arriba; el resto se puede archivar |
| Nombres de producto en MAYÚSCULAS + prefijo de marca inconsistente | algunos incluyen la marca, otros no | Cosméticos; se pueden normalizar para display sin tocar el dato |

---

## Lo que puedo arreglar sin tu OK (según tus reglas)

Estos son "arreglos seguros" que autorizaste (rutas rotas con archivo correcto obvio, `alt` faltantes, formato de precios, normalización de marca **de display**). **Todavía no los apliqué** — los agrupo para la Fase 2 y te aviso commit por commit:

- `alt` de imágenes: hoy usan el nombre del perfume; los voy a hacer descriptivos del frasco (suma SEO + ataca la objeción sensorial).
- Normalización de marca para mostrar (ej. "DOLCE & GABBANA" con capitalización correcta en el render) sin alterar el dato fuente.

## Lo que necesito de vos (bloquea el resto de Fase 1)

1. **OK para eliminar las 12 filas duplicadas** (tabla P0). ¿Confirmás mantener el `Web ID` que propongo en cada par?
2. **OK para corregir los typos de marca/nombre** (GABANNA→Gabbana, LAUREN→Laurent, INTESE→Intense) en JSON + script.js. _Y confirmar que los vas a replicar en el Google Sheet._
3. **OK para re-apuntar las 4 imágenes** que tienen foto correcta disponible (Eau d'Ombre Leather, Aoud Ambre, Aoud Greddy — las marcadas "puedo re-apuntar").
4. Para los productos con **imagen faltante** (Olympea Blossom, White Patchouli): ¿me pasás la foto correcta o los dejo con la actual marcados para revisar?
5. `GIORGIO/EMPORIO ARMANI`: ¿lo separo en dos marcas o lo dejo así?
