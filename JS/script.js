// BOTON CLARO OSCURO

const botonTema = document.getElementById('boton-tema');
const html = document.documentElement;

function actualizarBoton() {
  const oscuro = html.classList.contains('dark');
  botonTema.textContent = oscuro ? '𖤓' : '⏾';
  botonTema.setAttribute('aria-pressed', oscuro);
}

botonTema.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.setItem('tema', html.classList.contains('dark') ? 'oscuro' : 'claro');
  actualizarBoton();
});

actualizarBoton();


// MENU RESPONSIVE

const botonMenu = document.getElementById('boton-menu');
const menu = document.getElementById('menu');

botonMenu.addEventListener('click', () => {
  const oculto = menu.classList.toggle('hidden');
  botonMenu.setAttribute('aria-expanded', !oculto);
});

// CERRAR MENU
menu.querySelectorAll('nav a').forEach(enlace => {
  enlace.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      menu.classList.add('hidden');
      botonMenu.setAttribute('aria-expanded', 'false');
    }
  });
});


// PARTICULAS

particlesJS("particles-novedades", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 1000 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.35, random: false },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.7,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "bounce"
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 5 }
    }
  },
  retina_detect: true
});
