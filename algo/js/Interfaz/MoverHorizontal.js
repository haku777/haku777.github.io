    var theTop;        
    var menu;   
    var oldy; 
    //posicion actual     
    var posy; 
    //INICIALIZACION     
    function initscroll() {    
     //obtiene referencia al objeto con el menu        
    theTop = document.getElementById("botones").offsetTop;
    oldy =theTop; 
    menu = document.getElementById("botones");
    
    movemenu();
          
    } 
    function initscrollPOSTX() {    
    //obtiene referencia al objeto con el menu 
    menu = document.getElementById("botones");
    theTop =100+document.getElementById("spacer").offsetHeight;     
    movemenu();
    setTimeout('initscrollPOSTX()',1);
    }
   
    function initscrollPOSTY() {    
     //obtiene referencia al objeto con el menu 
    menu =document.getElementById("botones");
    theTop = oldy   
    movemenu();     
    }     
    function movemenu() {   
            posy = Math.max(document.body.scrollTop,document.documentElement.scrollTop);                              
           if(posy < theTop) {    
             posy = theTop;   
           }
           else{
            posy=posy;
           }
           menu.style.top = posy + 'px';
    }     

    function setScroll(arg,ps){
    if (!arg.get_isPartialLoad()) 
     { 
            window.onscroll=movemenu;
     }
     else
     {
             if(ps=='x')
             {
             initscrollPOSTX();
             window.onscroll=movemenu;
             }
             else
             { initscrollPOSTY();
             window.onscroll=movemenu;
             }
     
    }   
    }
    window.onload =initscroll; 
    window.onscroll= movemenu;
    if (document.captureEvents) {       //N4 requiere invocar la funcion captureEvents     
        document.captureEvents(Event.LOAD);     
    }