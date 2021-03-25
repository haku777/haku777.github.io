const iconMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu');

    iconMenu.addEventListener('click', (e) => {


        menu.classList.toggle('active');
        iconMenu.innerHTML=(src="../../img/icons/open-menu2.png");
        document.body.classList.toggle('opacity');


    });





