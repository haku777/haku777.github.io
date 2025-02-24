(() =>{
    let proyects = document.querySelectorAll('.proyects .card');
    let prev = document.getElementById("prev"); 
    let next = document.getElementById("next");
    let active = 0;
    function load(){
        let stt = 0;
        proyects[active].style.transform = `none`;
        proyects[active].style.zIndex = 1;
        proyects[active].style.filter = 'none';
        proyects[active].style.opacity = 1;
        for(var i = active + 1; i < proyects.length; i++){
            stt++;
            proyects[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(77px) rotateY(-1deg)`;
            proyects[i].style.zIndex = -stt;
            proyects[i].style.filter = 'blur(5px)';
            proyects[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = (active - 1); i >= 0; i--){
            stt++;
            proyects[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(77px) rotateY(1deg)`;
            proyects[i].style.zIndex = -stt;
            proyects[i].style.filter = 'blur(5px)';
            proyects[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }    
    load(); 
    prev.onclick = ()=>{
        active = active - 1 < 0 ? proyects.length -1 : active - 1
        load()
    }
    next.onclick = ()=>{
        active = active + 1 >= proyects.length ? 0 : active + 1
        load()
    }
})();
