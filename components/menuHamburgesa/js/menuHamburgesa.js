
const iconMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu');

    iconMenu.addEventListener('click', (e) => {


        menu.classList.toggle('active');
        iconMenu.removeAttribute("class");
        iconMenu.innerHTML=(src="<i class='fas fa-bars' id='icono-menu' style='font-size: 70px;'></i>");
        document.body.classList.toggle('opacity');


    });





