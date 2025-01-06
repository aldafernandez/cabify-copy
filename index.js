const nav = document.querySelector('#nav');
const abrir = document.querySelector('#open-menu');
const cerrar = document.querySelector('#close-menu');

abrir.addEventListener("click", () => {
    nav.classList.remove('nav');
    nav.classList.add('nav-visible');
})

cerrar.addEventListener("click", () => {
    nav.classList.add('nav');
    nav.classList.remove('nav-visible');   
})