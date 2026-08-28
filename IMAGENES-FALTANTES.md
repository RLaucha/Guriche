# Imágenes faltantes — perfumes que muestran la foto equivocada

_Actualizado: 2026-08-28. Estos perfumes muestran hoy la foto de OTRA fragancia porque la correcta no existe en el repo._
_Pasame la foto (nombrándola con el perfume o el Web ID) y yo la nombro, la guardo en la carpeta correcta y la conecto en `catalogo-web.json` + `script.js`._

## ✅ Prioridad alta — RESUELTO (2026-08-28)

Las 10 se cargaron (carpeta `imgc/`), se verificaron una por una, se optimizaron (máx 700px, webp) y se conectaron en `catalogo-web.json` + `script.js`:

| # | Web ID | Perfume | Archivo colocado |
|---|---|---|---|
| 1 | WEB-0012 | Paco Rabanne Olympea Blossom | `img/Paco Rabanne/Rabanne - Olympea Blossom.webp` |
| 2 | WEB-0058 | D&G Light Blue Capri in Love (mujer) | `img/DolceYG/Light_Blue_Capri_In_Love_Fem.webp` |
| 3 | WEB-0118 | Tom Ford White Patchouli | `img/TOM FORD/Tom Ford - White Patchouli.webp` |
| 4 | WEB-0080 | YSL Libre L'Eau Nue | `img/YSL/Yves Saint Laurent - Libre L'Eau Nue.webp` |
| 5 | WEB-0189 | JPG Divine Couture | `img/.../Divine Couture.webp` ⚠️ baja resolución (160px) |
| 6 | WEB-0176 | JPG Scandal Pour Homme Elixir | `img/.../Scandal Pour Homme Elixir.webp` |
| 7 | WEB-0204 | Valentino Uomo (clásico) | `img/Valentino/Valentino - Uomo Clasico.webp` |
| 8 | WEB-0209 | Valentino Donna The Gold | `img/Valentino/...The Gold.webp` |
| 9 | WEB-0212 | Valentino Donna Green Stravaganza | `img/Valentino/...Green Stravaganza.webp` |
| 10 | WEB-0340 | Xerjoff Accento Overdose | `img/Xerjoff/Xerjoff - Accento Overdose.webp` |

> ⚠️ **Divine Couture (WEB-0189)** quedó conectada pero la foto es de 160×160px (se ve algo borrosa). Si conseguís una más grande, la reemplazo.
> ✅ Se resolvió también la duda de **Green Stravaganza**: la foto enviada es la versión **mujer**, así que el producto estaba bien clasificado.

## 🟡 Secundaria — flankers con frasco parecido (mejorable, no urgente)

| Web ID | Marca | Perfume | Hoy muestra |
|---|---|---|---|
| WEB-0205 | Valentino | Uomo Born in Roma **Extradose** | Uomo Intense |
| WEB-0211 | Valentino | Donna Born in Roma **Extradose** | Donna normal |
| WEB-0079 | YSL | Libre **Intense** | Libre Le Parfum |
| WEB-0196 | JPG | Le Male **Le Maxi Male** | Le Male Elixir |
| WEB-0222 | Chanel | Allure Homme Sport **Eau Extrême** | Allure Homme Sport |
| WEB-0224 | Chanel | Allure Homme Sport **Cologne** | Allure Homme Sport |

## ❓ A confirmar (dato, no foto)

- **WEB-0177 "Scandal Intense Masc"**: la línea Scandal de hombre tiene EDT, Le Parfum, Absolu y Elixir; no existe una "Intense" de hombre como tal. ¿Es en realidad Scandal Pour Homme EDT (y entonces duplica a WEB-0195) o alguna de las otras? Decime cuál es y lo resuelvo.
- **WEB-0212 "Donna Green Stravaganza"**: en el repo la foto huérfana de "Green Stravaganza" es de la versión **Uomo** (hombre). ¿Existe la versión Donna (mujer) o el producto está mal clasificado?

---

### Ya resueltas (no necesitás mandar nada)
Estas mostraban foto equivocada pero la correcta **ya estaba** en el repo y las reconecté:
Le Male EDT, Le Beau EDT, La Belle EDP, Scandal Pour Homme EDT/Absolu/Le Parfum (hombre), Intense Cedrat Boise, Uomo/Donna Born in Roma, Eau d'Ombre Leather, Aoud Ambre, Aoud Greddy.
