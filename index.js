const nav = document.querySelector('#nav');
const abrir = document.querySelector('#open-menu');
const cerrar = document.querySelector('#close-menu');
const btn = document.querySelector('#btnJs');



abrir.addEventListener("click", () => {
    nav.classList.remove('nav');
    nav.classList.add('nav-visible');
    btn.classList.add('btnJs');
})

cerrar.addEventListener("click", () => {
    nav.classList.add('nav');
    nav.classList.remove('nav-visible');   
})