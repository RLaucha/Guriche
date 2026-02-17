const catalogo = [
  {
    categoria: "Diseñador",
    perfumes: [
      { nombre: "Sauvage EDT", descripcion: "Fresco y especiado, con bergamota brillante y fondo amaderado intenso.", imagen: "img/sauvage.png" },
      { nombre: "Stronger With You Intensely", descripcion: "Ámbar dulce con vainilla y canela, profundo y adictivo.", imagen: "img/strongerwhityou.png" },
      { nombre: "Stronger With You EDT", descripcion: "Dulce especiado con castaña y vainilla, juvenil y seductor.", imagen: "img/3.png" },
      { nombre: "Burberry Hero", descripcion: "Amaderado profundo con ámbar cálido y sensación elegante y oscura.", imagen: "img/4.png" },
      { nombre: "Scandal Pour Homme", descripcion: "Caramelo dulce con toque aromático y fondo masculino envolvente.", imagen: "img/5.png" },
      { nombre: "Le Male Elixir", descripcion: "Vainilla intensa con miel y tabaco, potente y seductor.", imagen: "img/6.png" },
      { nombre: "Ombre Leather", descripcion: "Cuero suave y oscuro con matiz floral elegante y refinado.", imagen: "img/7.png" },
      { nombre: "Dior Homme Intense", descripcion: "Iris empolvado con cacao y madera, elegante y sofisticado.", imagen: "img/8.png" },
      { nombre: "Saint Laurent y EDP", descripcion: "Fresco aromático con manzana y salvia sobre fondo amaderado moderno.", imagen: "img/ysl.png" },
      { nombre: "The scent elixir men parfum", descripcion: "Dulce especiado con cacao y cuero suave, sensual y cálido.", imagen: "img/bss.png" },
      { nombre: "The Most Wanted", descripcion: "Vainilla caramelizada con especias cálidas, intenso y nocturno.", imagen: "img/azz.png" },
    ]
  },
  {
    categoria: "Nicho",
    perfumes: [
      { nombre: "Erba Pura", descripcion: "Frutal vibrante y almizclado con dulzura luminosa y elegante.", imagen: "img/ep.png" },
      { nombre: "Erba Gold", descripcion: "Frutal jugoso con fondo cremoso y sensación opulenta.", imagen: "img/eg.png" },
      { nombre: "Naxos", descripcion: "Tabaco dulce con miel y vainilla, cálido y sofisticado.", imagen: "img/nax.png" },
      { nombre: "Torino 22", descripcion: "Aromático fresco con especias limpias y fondo elegante moderno.", imagen: "img/t22.png" },
      { nombre: "Aoud Leather", descripcion: "Cuero intenso con carácter.", imagen: "img/al.png" },
      { nombre: "Arabians Tonka", descripcion: "Oriental potente e inolvidable.", imagen: "img/at.png" },
      { nombre: "Oud Tobacco", descripcion: "Tabaco especiado con oud profundo y dulzura cálida.", imagen: "img/ot.png" },
      { nombre: "Dark Vanilla", descripcion: "Vainilla oscura con especias suaves y fondo cremoso.", imagen: "img/dv.png" },
      { nombre: "Aoud Night", descripcion: "Oud intenso con rosa oscura y carácter nocturno marcado.", imagen: "img/an.png" },
      { nombre: "Aoud Vanille", descripcion: "Vainilla dulce con oud especiado y toque exótico.", imagen: "img/av.png" },
      { nombre: "Red Tobacco", descripcion: "Tabaco intenso con especias y dulzura potente y duradera.", imagen: "img/rt.png" },
      { nombre: "Gris Charnel", descripcion: "Higo cremoso con té negro y madera suave, elegante y adictivo.", imagen: "img/channel.png" },
      { nombre: "Pas Ce Soir", descripcion: "Frutal especiado con dulzura sensual y fondo ambarado.", imagen: "img/pcs.png" },
      { nombre: "Narcotic Delight", descripcion: "Cereza licorosa con vainilla y tabaco, oscuro y magnético.", imagen: "img/i.png" }
    ]
  }
];

const catalogGrid = document.getElementById("catalogGrid");

catalogo.forEach((bloque) => {
  const section = document.createElement("section");
  section.className = "catalog-section";

  const title = document.createElement("h3");
  title.className = "catalog-title";
  title.textContent = bloque.categoria;
  section.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "catalog-grid";

  bloque.perfumes.forEach((perfume) => {
    const card = document.createElement("article");
    card.className = "perfume-card";
    const WHATSAPP_NUMBER = "5491139007985"; // <-- CAMBIÁ ESTO
    const mensaje = `Hola! 👋 Quería consultar el precio y disponibilidad de: ${perfume.nombre}.`;
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    card.innerHTML = `
      <img src="${perfume.imagen}" alt="${perfume.nombre}" loading="lazy" />
      <div class="perfume-body">
        <h3>${perfume.nombre}</h3>
        <p>${perfume.descripcion}</p>
        <a class="btn-quote" href="${waLink}" target="_blank" rel="noopener">
          Pedir cotización
        </a>
      </div>
    `;

    grid.appendChild(card);
  });

  section.appendChild(grid);
  catalogGrid.appendChild(section);
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const contactForm = document.getElementById("contactForm");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const formSuccess = document.getElementById("formSuccess");

const showError = (id, text) => {
  document.getElementById(id).textContent = text;
};

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;
  formSuccess.textContent = "";

  showError("errorNombre", "");
  showError("errorEmail", "");
  showError("errorMensaje", "");

  if (nombre.value.trim().length < 2) {
    showError("errorNombre", "Ingresá un nombre válido (mínimo 2 letras).");
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    showError("errorEmail", "Ingresá un email válido.");
    valid = false;
  }

  if (mensaje.value.trim().length < 10) {
    showError("errorMensaje", "El mensaje debe tener al menos 10 caracteres.");
    valid = false;
  }

  if (valid) {
    formSuccess.textContent = "¡Gracias por escribirnos! Te contactaremos pronto.";
    contactForm.reset();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});

