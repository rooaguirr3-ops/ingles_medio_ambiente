let idioma = "es";
let tema = "light"; // modo actual

const textos = {
  es: {
    titulo: "Contaminación Ambiental",
    nav: { causas: "Causas", efectos: "Efectos", soluciones: "Soluciones" },
    introTitulo: "¿Qué es la contaminación ambiental?",
    introTexto:
      "La contaminación ambiental es la presencia de agentes nocivos en el entorno natural, provocada mayormente por la actividad humana.",
    causas: ["Emisiones industriales", "Quema de combustibles fósiles", "Deforestación", "Uso excesivo de plásticos"],
    efectos: ["Cambio climático", "Enfermedades respiratorias", "Pérdida de biodiversidad", "Contaminación del agua y del suelo"],
    solucionesTitulo: "Soluciones",
    solucionesTexto: "Haz clic en el botón para conocer algunas soluciones sostenibles.",
    botonSoluciones: "Ver Soluciones",
    soluciones: [
      "Reducir, reutilizar y reciclar",
      "Utilizar transporte sostenible",
      "Plantación de árboles",
      "Uso de energías renovables",
      "Reducción del uso de plásticos"
    ],
    footer: "&copy; 2025 Conciencia Verde",
    botonIdioma: "English",
    botonTema: "Modo Oscuro"
  },

  en: {
    titulo: "Environmental Pollution",
    nav: { causas: "Causes", efectos: "Effects", soluciones: "Solutions" },
    introTitulo: "What is environmental pollution?",
    introTexto:
      "Environmental pollution is the presence of harmful agents in the natural environment, mostly caused by human activity.",
    causas: ["Industrial emissions", "Fossil fuel burning", "Deforestation", "Excessive plastic use"],
    efectos: ["Climate change", "Respiratory diseases", "Loss of biodiversity", "Water and soil pollution"],
    solucionesTitulo: "Solutions",
    solucionesTexto: "Click the button to learn about sustainable solutions.",
    botonSoluciones: "See Solutions",
    soluciones: [
      "Reduce, reuse and recycle",
      "Use sustainable transportation",
      "Tree planting",
      "Use renewable energy",
      "Reduce plastic usage"
    ],
    footer: "&copy; 2025 Green Awareness",
    botonIdioma: "Español",
    botonTema: "Dark Mode"
  }
};

document.getElementById("toggle-lang").addEventListener("click", cambiarIdioma);
document.getElementById("toggle-theme").addEventListener("click", cambiarTema);

function cambiarIdioma() {
  idioma = idioma === "es" ? "en" : "es";
  actualizarTexto();
}

function actualizarTexto() {
  const t = textos[idioma];

  document.getElementById("titulo").textContent = t.titulo;
  document.getElementById("nav-causas").textContent = t.nav.causas;
  document.getElementById("nav-efectos").textContent = t.nav.efectos;
  document.getElementById("nav-soluciones").textContent = t.nav.soluciones;
  document.getElementById("intro-titulo").textContent = t.introTitulo;
  document.getElementById("intro-texto").textContent = t.introTexto;

  // Listas
  const listaCausas = document.getElementById("lista-causas");
  listaCausas.innerHTML = "";
  t.causas.forEach((causa) => {
    const li = document.createElement("li");
    li.textContent = causa;
    listaCausas.appendChild(li);
  });

  const listaEfectos = document.getElementById("lista-efectos");
  listaEfectos.innerHTML = "";
  t.efectos.forEach((efecto) => {
    const li = document.createElement("li");
    li.textContent = efecto;
    listaEfectos.appendChild(li);
  });

  document.getElementById("soluciones-titulo").textContent = t.solucionesTitulo;
  document.getElementById("soluciones-texto").textContent = t.solucionesTexto;
  document.getElementById("btn-soluciones").textContent = t.botonSoluciones;
  document.getElementById("footer-text").innerHTML = t.footer;

  document.getElementById("toggle-lang").textContent = t.botonIdioma;
  document.getElementById("toggle-theme").textContent = t.botonTema;
}

function mostrarSoluciones() {
  const lista = document.getElementById("lista-soluciones");
  lista.innerHTML = "";
  const soluciones = textos[idioma].soluciones;
  soluciones.forEach((sol) => {
    const li = document.createElement("li");
    li.textContent = sol;
    lista.appendChild(li);
  });
}

function cambiarTema() {
  const body = document.body;
  tema = tema === "light" ? "dark" : "light";
  body.className = tema;
  actualizarTexto(); // actualizar texto del botón con el idioma actual
}

// Inicializar
cambiarIdioma(); // Establece el texto y las listas
