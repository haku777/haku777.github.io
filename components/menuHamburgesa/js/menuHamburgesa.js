
const iconMenu = document.querySelector('#icono-menu'),
        menu = document.querySelector('#menu');

iconMenu.addEventListener('click', (e) => {
    
        menu.classList.toggle('active');
        menu.classList.toggle('opacity');
});