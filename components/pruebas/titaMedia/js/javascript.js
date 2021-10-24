(function(){
    let open = document.querySelector("#open");
    let close = document.querySelector("#close");
    let menu = document.querySelector("#menu");
    let body = document.getElementById("view");
    let large = document.querySelector("#large");
    let lines = document.querySelector("#lines");
    let img = document.querySelector(".grid");

    open.addEventListener("click", function(){
        menu.classList.toggle("activar");
        open.style.display= "none";
        close.style.display= "block";
        body.style.overflow= "hidden";
    })

    close.addEventListener("click", function(){
        menu.classList.toggle("activar");
        close.style.display= "none";
        open.style.display= "block";
        body.style.overflow= "scroll";
    })

    large.addEventListener("click", function(){
        img.classList.toggle("change");
    })

    lines.addEventListener("click", function(){
        img.classList.toggle("change");
    })

}())

