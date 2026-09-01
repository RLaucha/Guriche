# Auditoría y optimización — guriche.com.ar

_Rama: `auditoria/optimizacion-completa` · Inicio: 2026-08-28_

Este documento crece por fases. **Fase 0 (reconocimiento) y Fase 1 (catálogo) completas.** El detalle del catálogo está en [`AUDITORIA-CATALOGO.md`](AUDITORIA-CATALOGO.md). Fases 2–4 pendientes de tu OK sobre el catálogo.

---

## Fase 0 — Reconocimiento

### Stack detectado

| Aspecto | Detalle |
|---|---|
| Tipo | Sitio **estático**, sin framework ni build. HTML + CSS + JS vanilla (se mantiene así por pedido). |
| Archivos núcleo | `index.html` (una sola página), `styles.css` (~41 KB), `script.js` (~116 KB) |
| Hosting | **GitHub Pages** (hay `CNAME` → `guriche.com.ar`) |
| Gestor de paquetes | npm (`package.json`). Única dep de runtime: `duckduckgo-images-api` (parece de utilería, no se usa en el sitio). `sharp` agregado como **devDependency** para la auditoría de imágenes. |
| Fuente de datos | Google Sheet público (CSV) vía `catalog-source.js`, con fallback a `data/catalogo-web.json`. |
| Fuentes tipográficas | Carga **Playfair Display + Inter** desde Google Fonts. |

### Estructura

```
index.html          Página única (hero, test olfativo, catálogo, servicios, sobre nosotros, footer, carrito)
styles.css          Estilos (tema OSCURO: fondo #2B2620, texto crema)
script.js           Lógica: catálogo hardcodeado + merge con Sheet/JSON, buscador, test olfativo, carrito
catalog-source.js   URL del Google Sheet + fallback
data/catalogo-web.json   386 productos (fallback/export)
img/<Marca>/…       393 imágenes (387 PNG + 6 WebP)
PRECIOS.md          Notas de precios
sitemap.xml, robots.txt, CNAME
```

### Dónde vive el catálogo (respuesta exacta)

El catálogo está **triplicado** y esto es clave para cualquier corrección:

1. **`script.js`** → `const catalogo = [...]` (línea 6). Es lo que **renderiza** por defecto (árbol categoría → marca → perfumes).
2. **`data/catalogo-web.json`** → 386 filas con `Web ID`. Fallback si falla la red.
3. **Google Sheet "Exportación web"** (`catalog-source.js`) → **fuente de verdad en vivo**. Al cargar la página, `applyCatalogRows()` mergea estas filas sobre `catalogo` (matchea por `Web ID` o por categoría+marca+producto) y trae los **precios en USD**.

Los precios NO están en el JSON (`Precio ARS: null` en las 386 filas); vienen del Sheet en vivo.

### Build / dev server / consola

- No hay build (`package.json` sin scripts). El sitio se sirve estático.
- Warnings/errores de consola: se revisan en Fase 2 (higiene) corriendo el sitio en el navegador.

### Observaciones tempranas para fases siguientes

- **Marca (Fase 4):** el brief define **EB Garamond + Jost** y terracota `#8A4C38` sobre crema `#EDE2C9`. El sitio real usa **Playfair Display + Inter**, tema **oscuro** (`#2B2620`) y terracota `#874B35`/`#a45c40`. Hay que decidir si se alinea a la marca oficial o si el tema oscuro actual es intencional. **Te lo consulto antes de tocar** (es decisión de negocio/estética, no un bug).
- **SEO (Fase 2):** hay JSON-LD tipo `Store` pero falta schema `Product`. `twitter:card` es `summary` (no `summary_large_image`). Sitemap tiene 1 sola URL (SPA de una página, correcto).
- **Ficha de producto (Fase 3):** no hay notas olfativas/familia/duración estructuradas; solo una descripción libre. La objeción "no puedo olerlo" está parcialmente atendida por el test olfativo.

---

## Fase 1 — Catálogo → ver [`AUDITORIA-CATALOGO.md`](AUDITORIA-CATALOGO.md)

**Titulares:**
- 386 productos, 41 marcas. 207 limpios, 179 con algún problema.
- **12 duplicados reales** (misma fragancia listada dos veces) → P0, pendiente tu OK para eliminar.
- **Typos de marca visibles** ("GABANNA" ×9, "LAUREN"/"LAURENTE", "INTESE") → P0 credibilidad.
- **19 grupos de imagen incoherente** (perfumes distintos con la misma foto); 4 se arreglan con imágenes ya presentes sin usar.
- 87 imágenes huérfanas, 15 grupos de archivos idénticos (SHA-256) → limpieza P2.

⏳ **Esperando tu OK** en los 5 puntos del final de `AUDITORIA-CATALOGO.md` para cerrar Fase 1 y arrancar Fase 2 (técnica), 3 (UX/conversión) y 4 (marca).

---

## Fase 2 — Técnica

### ✅ Aplicado
- **Fuentes duplicadas:** se quitó el `@import` de Google Fonts del CSS (bloqueaba el render). Quedan cargadas una sola vez desde `index.html` con `preconnect` + `display=swap`.
- **`alt` descriptivo** en todas las imágenes de producto (Fase 3): "Marca Nombre — perfume original importado".
- **Accesibilidad del menú móvil:** `aria-expanded` sincronizado + `aria-controls`.
- **Twitter Card** → `summary_large_image` (preview grande al compartir).

### ✅ Verificado OK (sin cambios necesarios)
- **Contraste WCAG AA:** texto (12.09), muted (5.88), primary-light (5.22) sobre el fondo → todos pasan AA. Los colores de bajo contraste (`--primary` 2.99) **no se usan como texto**, solo fondos/bordes. Sin fallas reales.
- **Imágenes rotas:** 0 (los 371 productos tienen su archivo).
- **Navegación:** los 6 anchors del menú resuelven a un `id` existente.
- **Jerarquía de headings:** 1×h1, 6×h2, 9×h3, 2×h4 — correcta, sin saltos.
- **Consola:** sin errores al cargar.
- **`loading="lazy"`** ya presente en imágenes de catálogo; el hero es texto (no hay imagen LCP que priorizar).

### ✅ Peso de imágenes → WebP (hecho, con tu OK)
- **`img/`: 73 MB → 9 MB.** 382 PNG/JPG de producto convertidos a WebP (máx 700px, q82): 68.8 MB → 5.1 MB. Favicons y og-image intactos. 0 imágenes rotas.
- `safeImageSource` normaliza rutas `.png/.jpg` → `.webp`, así que aunque el Google Sheet siga apuntando a `.png`, el sitio sirve la WebP (no hay que editar el Sheet para esto).

### 🔴→✅ Bug crítico encontrado y corregido al testear
- **Síntoma:** tras eliminar los 14 duplicados del catálogo hardcodeado, el merge con el Sheet/JSON emparejaba productos equivocados (un perfume mostraba el nombre de uno y la imagen/precio de otro), y las fotos corregidas no se reflejaban.
- **Causa:** los Web ID del catálogo local se asignan por **posición**; al borrar filas se corrieron y dejaron de alinear con el Sheet.
- **Fix:** el repo pasó a ser **autoritativo** (nombre, imagen, categoría, marca curados en el repo). El Sheet ahora solo superpone **precio/disponibilidad**, matcheando por marca+producto. No crea productos (no reaparecen duplicados) ni pisa identidad.
- **Verificado en vivo:** 371 productos, **0 imágenes cruzadas**, 0 duplicados, precios OK en 353/371 (los 18 restantes son nombres que el Sheet aún tiene con la grafía vieja —GABANNA, etc.—; se resuelven al sincronizar el Sheet).

### ✅ Testeo responsive (mobile + desktop)
| Viewport | Resultado |
|---|---|
| 1440 (desktop) | Nav horizontal, hero OK, catálogo en grilla de 4 columnas, sin overflow |
| 768 (tablet) | Grilla 3 columnas, sin overflow |
| 390 / 375 (mobile) | Menú hamburguesa abre/cierra (aria-expanded OK), sin overflow |
| 360 | Sin overflow horizontal real |
| Ficha de producto | Imagen WebP nítida y correcta, sello de autenticidad, precio, CTA doble |
| Carrito | Agregar → contador → drawer → link de WhatsApp con producto y número correctos |
| Buscador | Resultados + estado vacío con CTA "lo traemos a pedido" |
| Consola | Sin errores |

### 🟡 Recomendaciones menores
- Token de color `--nogal` definido pero **sin uso** (limpieza).
- **Schema.org `Product`:** hoy hay `Store` (bien). Para SEO de productos se podría inyectar un `ItemList` dinámico de fragancias; ROI medio, suma peso. Opcional.
- `sitemap.xml` tiene 1 URL (correcto para one-page); `robots.txt` y `canonical` OK.

## Fase 3 — UX y conversión

> Todo se evalúa contra una pregunta: **¿esto ayuda a comprar un perfume que no se puede oler?**
> Referencias de código: ficha en [`script.js:723`](script.js), CTA WhatsApp [`script.js:702`](script.js), navegación catálogo [`script.js:980`](script.js).

### Estado actual (lo que ya funciona bien)
- Test olfativo de 4 pasos conectado al catálogo real → **es el mejor activo contra la objeción sensorial**. Está bien ubicado (primero en el menú).
- Carrito de "consulta" que arma un mensaje de WhatsApp → fricción baja, buen fit para venta a pedido.
- Mensaje de WhatsApp pre-armado con marca, producto y precio de referencia. Muy bien.
- Descripción olfativa en cada ficha (aunque en texto libre).

### P0 — Vacíos que atacan directo la conversión

| # | Hallazgo | Dónde | Por qué importa | Arreglo (con copy) |
|---|---|---|---|---|
| 3.1 | **No hay sello de autenticidad visible** | ficha + home | El diferencial de Guriche es "original, sin réplicas" y **no aparece en ningún lado**. Es la promesa central sin evidencia. | Agregar franja bajo el hero y un badge en cada ficha. Copy franja: **"100% originales. Nada de réplicas ni decants. Si no es original, no es Guriche."** Badge ficha: **"✓ Original importado"**. |
| 3.2 | **No se explica el modelo "a pedido" ni el plazo** | ficha + home | Si el cliente no sabe que es made-to-order, interpreta la demora como "me clavaron". Genera desconfianza post-consulta. | Bloque "Cómo funciona" (3 pasos) + línea en ficha: **"Traído a pedido. Coordinamos el plazo estimado por WhatsApp antes de que confirmes."** |
| 3.3 | **Hero genérico, no dice qué es Guriche** | [index.html:85](index.html) | "Perfumes elegantes, frescos y con identidad propia" podría ser de cualquier tienda. No menciona original/importado/nicho. | H1: **"Perfumes de diseñador y nicho, 100% originales, traídos a pedido para vos."** Subtítulo: **"Importamos la fragancia exacta que buscás —diseñador o nicho— con asesoramiento uno a uno. Sin réplicas, sin sorpresas."** |
| 3.4 | **Sin señales de confianza (pago/envío/cambios)** | home | Primera compra a una marca chica por WhatsApp = fricción alta. No hay medios de pago, zona de envío ni política. | Sección "Comprar en Guriche es simple": medios de pago aceptados, zona de entrega, y qué pasa si el perfume no es lo esperado. _(necesito los datos reales de vos)_ |

### P1 — Ficha de producto (la unidad de conversión)

La ficha hoy: imagen + marca + nombre + descripción libre + precio + botón. Falta estructura que ayude a decidir sin oler:

| Campo faltante | Propuesta |
|---|---|
| **Familia olfativa** (amaderado, floral, oriental…) | Chip visible. _Dato no está estructurado en el repo → no lo invento; se puede derivar de la descripción o lo cargás vos._ |
| **Género** | Chip (masc / fem / unisex). Hoy está a veces en el nombre ("FEM"/"MEN"), inconsistente. |
| **Ocasión / estación** | 1 línea ("Ideal para noche y clima frío"). |
| **Duración y estela** | 2 chips ("Duración: 8h" · "Estela: moderada"). Es literalmente lo que reemplaza el "no puedo olerlo". |
| **CTA doble** | Además de "Agregar a la consulta", un **"Consultar este ahora"** directo a WhatsApp para el que ya decidió. |

> ⚠️ **No invento datos.** Familia, duración, estela, ocasión no están en el repo. Dejo el lugar en la ficha y los cargás vos (o te armo una plantilla de columnas para el Google Sheet).

### P1 — Navegación y descubrimiento

| Hallazgo | Arreglo |
|---|---|
| Solo se navega categoría → marca → productos. **No hay filtros** por género, familia ni precio, ni ordenamiento. | Agregar filtros (género + familia + rango de precio) y orden (precio ↑/↓, A-Z). Requiere los campos estructurados de arriba. |
| **Estados vacíos**: si el buscador no encuentra nada, conviene un CTA de rescate. | Copy estado vacío: **"No encontramos ese. Pero lo conseguimos: escribinos y lo traemos a pedido."** + botón WhatsApp. Convierte una búsqueda fallida en una consulta. |
| Camino a consulta: hoy home → catálogo → marca → producto → agregar → WhatsApp (5 clics). | El test olfativo y el CTA directo en ficha lo acortan. Medido tras cambios en Fase 2/3. |

### P2 — Copy que suena a plantilla
- Servicios "🚀 Entrega coordinada", "📦 Stock por encargo" → reescribir en voz Guriche, enfocado en autenticidad y asesoría.
- "Perfumes que dejan huella" (footer/OG) es lindo pero intercambiable; el ancla debería ser original + a pedido + asesoría.

**Estado Fase 3:**
- ✅ **Implementado** (tanda sin datos nuevos, verificado en navegador sin errores de consola):
  - Hero reescrito (original + a pedido + asesoría).
  - Franja de autenticidad bajo el hero.
  - Sección "Cómo funciona" (3 pasos del pedido a medida) + ítem en el menú.
  - Sello "✓ Original importado · a pedido" en cada ficha.
  - CTA doble en ficha: "Agregar a la consulta" + "Consultar ahora" (WhatsApp directo).
  - Estado vacío del buscador reescrito con ángulo "lo traemos a pedido".
- ⏳ **Pendiente de datos tuyos** (no los invento): familia olfativa, género estructurado, duración, estela, ocasión → habilitan también los **filtros** y el **ordenamiento**. Medios de pago, zona de envío y política de cambios para la sección de confianza.

## Fase 4 — Coherencia de marca _(pendiente)_
