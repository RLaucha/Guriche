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

Verificado con análisis profundo (`scripts/audit-deep.mjs`): en los 14 casos coinciden **marca + nombre base + género + concentración (EDP/EDT) + mililitros + imagen + descripción**. Es el mismo SKU listado dos veces. **Propongo eliminar la 2ª fila. No borro nada sin tu OK.**

| # | Mantener | Eliminar | Marca | Producto | Motivo de la 2ª fila |
|---|---|---|---|---|---|
| 1 | WEB-0028 | **WEB-0034** | Calvin Klein | Eternity Men EDT 100ml | prefijo de marca redundante |
| 2 | WEB-0036 | **WEB-0040** | Versace | Eros Azul EDT 100ml | prefijo de marca redundante |
| 3 | WEB-0097 | **WEB-0114** | Tom Ford | Ombre Leather EDP 100ml | fila idéntica |
| 4 🆕 | WEB-0099 | **WEB-0103** | Tom Ford | Black Orchid EDP 100ml | prefijo de marca redundante |
| 5 🆕 | WEB-0100 | **WEB-0112** | Tom Ford | Noir EDP 100ml | prefijo de marca redundante |
| 6 | WEB-0128 | **WEB-0131** | Parfums de Marly | Althair EDP 125ml | fila idéntica |
| 7 | WEB-0129 | **WEB-0145** | Parfums de Marly | Layton EDP 125ml | fila idéntica |
| 8 | WEB-0170 | **WEB-0174** | Mugler | Angel Refillable EDP 100ml | mismo SKU, palabras reordenadas |
| 9 | WEB-0249 | **WEB-0252** | Bond No.9 | Madison Avenue EDP 100ml | fila idéntica |
| 10 | WEB-0264 | **WEB-0270** | Mancera | Xplicit Vanilla EDP 120ml | prefijo de marca redundante |
| 11 | WEB-0266 | **WEB-0280** | Mancera | Instant Crush EDP 120ml | fila idéntica |
| 12 | WEB-0303 | **WEB-0316** | Initio | Psychedelic Love EDP 90ml | **la 2ª está mal escrita: "PSYCHODELIC"** |
| 13 | WEB-0304 | **WEB-0309** | Initio | High Frequency EDP 90ml | fila idéntica |
| 14 | WEB-0305 | **WEB-0318** | Initio | Side Effect EDP 90ml | fila idéntica |

🆕 = detectados en el análisis profundo (no estaban en la lista inicial de 12).

**Falsos positivos descartados (NO son duplicados — son productos distintos):** "Q EDP" vs "Q EDP Intense"; "The Most Wanted" vs "The Most Wanted Intense"; "Cedrat Boise" vs "Intense Cedrat Boise"; "Donna Born in Roma" vs "…Intense"; "Scandal Elixir" vs "Scandal Absolu"; "Uomo Extradose" (♂) vs "Donna Extradose" (♀); "Alien" vs "Alien Refillable". Estos comparten base pero difieren en flanker/concentración/género → se mantienen.

**Acción:** pendiente de tu OK. Cuando confirmes, elimino las 14 filas de `catalogo-web.json` y de `script.js`, y te dejo la misma lista para borrar en el Sheet.

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

## P1 — Coherencia imagen ↔ producto (análisis profundo)

Análisis completo en `scripts/audit-deep.mjs`: por cada producto se compara el nombre contra el nombre de archivo de su imagen (que es descriptivo) y se busca en la carpeta de la marca la mejor foto disponible.

### ✅ Ya corregido (9 reasignaciones — la foto correcta ya existía en `/img`)

Aplicadas en JSON + `script.js` (además de las 3 previas: Eau d'Ombre Leather, Aoud Ambre, Aoud Greddy):

| Web ID | Producto | Antes mostraba | Ahora usa |
|---|---|---|---|
| WEB-0184 / 0185 | Le Male EDT 125/75ml | Le Male **Elixir** | Le Male Eau de Toilette |
| WEB-0194 / 0200 | Le Beau EDT 125/75ml | Le Beau **Narcisse** | Le Beau Eau de Toilette |
| WEB-0193 | La Belle EDP 125ml | La Belle **Rosea** | La Belle Eau de Parfum |
| WEB-0195 | Scandal Men EDT | Scandal **Intense** (♀) | Scandal Pour Homme EDT |
| WEB-0276 | Intense Cedrat Boise | Cedrat Boise (normal) | Intense Cedrat Boise |
| WEB-0206 | Uomo Born in Roma EDT | Uomo Born in Roma **Intense** | Uomo Born in Roma |
| WEB-0213 | Donna Born in Roma **Intense** | Donna Born in Roma (normal) | Donna Born in Roma Intense |

### ⚠️ Falta la foto correcta (perfume distinto compartiendo imagen, sin archivo disponible)

Necesito que me pases estas fotos (no las invento):

| Web ID | Producto | Muestra hoy la foto de | 
|---|---|---|
| WEB-0012 | Olympea **Blossom** | Olympea (normal) |
| WEB-0118 | Tom Ford **White Patchouli** | White Suede |
| WEB-0189 | JPG **Divine Couture** | Divine Elixir |
| WEB-0204 | Valentino **Uomo Clásico** | Uomo Born in Roma Intense |
| WEB-0209 | Valentino Donna **The Gold** | Donna Born in Roma |
| WEB-0212 | Valentino Donna **Green Stravaganza** | Donna Born in Roma |
| WEB-0340 | Xerjoff **Accento Overdose** | Accento |
| WEB-0176 / 0177 / 0179 | JPG **Scandal** (versión ♂: Elixir / Intense / Le Parfum) | Scandal Intense (♀) — el frasco masculino es distinto |

### Aceptable (mismo perfume, distinta concentración/tamaño → reusar la foto es correcto)
Sauvage EDT/EDP/Parfum, Layton 125/75ml, Black Orchid 30/50/100ml, 1 Million Elixir 100/200, Allure Homme Sport EDT/Extreme/Cologne, etc. **No son errores.**

**Nota sobre hash perceptual:** dHash (Hamming ≤ 5) sobre las 393 imágenes dio 264 pares pero es poco concluyente acá (los frascos sobre fondo blanco hashean casi igual — todos los Montale dan distancia 0 siendo distintos). El detector confiable de archivo repetido es el SHA-256.

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
