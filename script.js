let ultimaPosicionScroll = window.scrollY;
const encabezado = document.querySelector('header');

window.addEventListener('scroll', () => {
  let posicionActual = window.scrollY;

  if (posicionActual > ultimaPosicionScroll && posicionActual > 100) {
    encabezado.classList.add('oculto');
  } else {
    encabezado.classList.remove('oculto');
  }

  ultimaPosicionScroll = posicionActual;
});