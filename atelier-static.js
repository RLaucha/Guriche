/* Guriche · Atelier — mejora progresiva de las páginas estáticas /p/<slug>.html.
   La página ya funciona sin JS (contenido, precio de referencia y navegación
   prev/next son enlaces reales). Este script agrega: precio en vivo desde la
   planilha, zoom del frasco y navegación por teclado / swipe. */
(function(){
  "use strict";
  var body = document.body;
  var id = body.getAttribute("data-id");
  var $ = function(s){ return document.querySelector(s); };

  /* ---- Zoom del frasco ---- */
  var bottle = $("#bottle");
  if(bottle){
    var toggleZoom = function(){
      var z = bottle.classList.toggle("zoom");
      bottle.setAttribute("aria-label", z ? "Reducir el frasco" : "Ampliar el frasco");
    };
    bottle.addEventListener("click", toggleZoom);
    bottle.addEventListener("keydown", function(e){
      if(e.key === "Enter" || e.key === " "){ e.preventDefault(); toggleZoom(); }
    });
  }

  /* ---- Navegación (las flechas son <a href>): teclado + swipe ---- */
  var prev = document.querySelector(".arrow.prev");
  var next = document.querySelector(".arrow.next");
  document.addEventListener("keydown", function(e){
    if(e.key === "ArrowRight" && next) location.href = next.getAttribute("href");
    if(e.key === "ArrowLeft" && prev) location.href = prev.getAttribute("href");
  });
  var stage = $("#stage"), sx = null;
  if(stage){
    stage.addEventListener("touchstart", function(e){ sx = e.touches[0].clientX; }, {passive:true});
    stage.addEventListener("touchend", function(e){
      if(sx == null) return;
      var dx = e.changedTouches[0].clientX - sx;
      if(Math.abs(dx) > 50){
        var t = dx < 0 ? next : prev;
        if(t) location.href = t.getAttribute("href");
      }
      sx = null;
    });
  }

  /* ---- Botón Volver ---- */
  var back = $("#back");
  if(back){
    back.addEventListener("click", function(){
      if(document.referrer && document.referrer.indexOf(location.host) >= 0) history.back();
      else location.href = "/#catalogo";
    });
  }

  /* ---- Precio en vivo (planilla) ---- */
  function parsePrice(value){
    var cleaned = String(value||"").replace(/\$/g,"").replace(/\s/g,"")
      .replace(/\.(?=\d{3}(?:\D|$))/g,"").replace(/,(?=\d{1,2}$)/,".");
    var n = Number(cleaned);
    return Number.isFinite(n) && n > 0 ? n : null;
  }
  function parseCSV(t){
    var R=[], r=[], c="", q=false;
    for(var k=0;k<t.length;k++){ var ch=t[k];
      if(q){ if(ch==='"'){ if(t[k+1]==='"'){c+='"';k++;} else q=false; } else c+=ch; }
      else { if(ch==='"')q=true; else if(ch===","){r.push(c);c="";}
        else if(ch==="\n"||ch==="\r"){ if(ch==="\r"&&t[k+1]==="\n")k++; r.push(c);R.push(r);r=[];c=""; }
        else c+=ch; } }
    if(c||r.length){ r.push(c); R.push(r); }
    return R;
  }
  function applyPrice(price){
    var el = $("#price");
    if(el && price){
      el.innerHTML = "USD " + Math.round(price) + "<small>PAGO EN PESOS AL CAMBIO DEL DÍA</small>";
    }
    // El contacto es por Instagram (DM); el enlace ya está en el HTML, no se reescribe.
  }
  (function loadPrice(){
    var src = window.GURICHE_CATALOG_SOURCE;
    if(!src || !src.csvUrl || !id) return;
    var ctl = new AbortController();
    var to = setTimeout(function(){ ctl.abort(); }, 8000);
    fetch(src.csvUrl, {signal:ctl.signal, cache:"no-store"})
      .then(function(r){ return r.text(); })
      .then(function(txt){
        clearTimeout(to);
        var rows = parseCSV(txt);
        var hi = rows.findIndex(function(r){ return r.indexOf("Web ID") >= 0; });
        if(hi < 0) return;
        var H = rows[hi], iId = H.indexOf("Web ID"), iP = H.indexOf("Precio USD");
        for(var r = hi+1; r < rows.length; r++){
          if(rows[r][iId] === id){ var v = parsePrice(rows[r][iP]); if(v) applyPrice(v); break; }
        }
      })
      .catch(function(){});
  })();
})();
