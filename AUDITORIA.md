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

## Fase 2 — Técnica _(pendiente)_
## Fase 3 — UX y conversión _(pendiente)_
## Fase 4 — Coherencia de marca _(pendiente)_
