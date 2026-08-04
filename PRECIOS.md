# Sistema central de precios de Guriche

La web lee la pestaña pública `Exportación web` y actualiza productos, precios
y disponibilidad sin volver a editar `script.js`.

## Estructura segura

- `Panel`, `Catálogo` y `Competencia`: información privada.
- `Catálogo web`: control de productos y precios que se mostrarán.
- `Exportación web`: única pestaña apta para publicar como CSV.
- `data/catalogo-web.json`: respaldo local sin precios, usado si la fuente
  remota no responde.

Nunca se debe compartir ni publicar el archivo completo. Solo se publica la
pestaña `Exportación web`.

## Fuente configurada

La URL CSV publicada está configurada en `catalog-source.js`. El archivo
completo continúa privado: la web solamente recibe las diez columnas de
`Exportación web`.

## Volver a publicar la fuente

1. Importar `Guriche_Central_de_Precios.xlsx` como Google Sheets.
2. En Google Sheets elegir **Archivo → Compartir → Publicar en la web**.
3. Seleccionar únicamente la pestaña **Exportación web** y el formato CSV.
4. Copiar la URL publicada. Su formato será parecido a:

   `https://docs.google.com/spreadsheets/d/e/.../pub?gid=...&single=true&output=csv`

5. Reemplazar la URL existente en `catalog-source.js`:

   ```js
   window.GURICHE_CATALOG_SOURCE = {
     csvUrl: "URL_CSV_PUBLICADA",
     fallbackUrl: "data/catalogo-web.json",
     timeoutMs: 15000,
   };
   ```

## Cambiar un precio

1. Actualizar dólar, envío, cantidad o costo del proveedor.
2. Revisar el resultado en `Catálogo web`.
3. En la fila del perfume elegir `Sí` en **Mostrar precio**.
4. Si se necesita un valor puntual, escribirlo en **Precio manual**. Ese valor
   tiene prioridad sobre el precio calculado.

Google Sheets vuelve a publicar el CSV y la web toma el cambio en la próxima
carga. La tarjeta siempre indica **Sujeto a disponibilidad** y la acción abre
WhatsApp para confirmar antes del pago.

## Agregar un producto

1. Usar una fila libre de `Catálogo web`.
2. Completar categoría, marca, producto, descripción e imagen.
3. Vincular un SKU para usar el cálculo automático o escribir un precio manual.
4. Elegir `Sí` en **Mostrar producto** y, si corresponde, en
   **Mostrar precio**.

La web admite hasta 600 filas con la planilla actual. Hay 214 filas libres.

## Comportamiento ante fallas

Si la URL remota tarda o falla, la web carga el catálogo de respaldo sin
precios. Así no se muestran valores posiblemente desactualizados ni se rompe la
navegación.
