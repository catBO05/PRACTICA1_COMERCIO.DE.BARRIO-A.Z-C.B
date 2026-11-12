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