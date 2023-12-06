const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('nav');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
});

const enlaces = document.querySelectorAll('nav a');
function clicEnlace(event) {
  //Cerrar menu
  nav.classList.remove('active');}

// Agregar el event listener a cada enlace
enlaces.forEach((enlace) => {
  enlace.addEventListener('click', clicEnlace);
});