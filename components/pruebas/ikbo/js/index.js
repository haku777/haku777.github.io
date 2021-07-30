document.addEventListener("DOMContentLoaded", function() {


    let score = document.getElementById('score');
    score.innerHTML = document.cookie;
    if (document.cookie == ""){
        score.innerHTML = 0;
        document.cookie = 0;
    }

    let papper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');
    let rock = document.getElementById('rock');
    let house = document.getElementById('house');
    let again = document.getElementById('again');

    let rules = document.getElementById('rules');
    let resultado = document.getElementById('result');

    let ruleson = document.getElementById('ruleson');
    let close = document.getElementById('close');
    
    let seleccion_jugador;

    papper.addEventListener('click',function(){
        scissors.style.display = "none";
        rock.style.display = "none";
        house.style.display = "flex";
        seleccion_jugador = 1;
        jugar();
        validar(seleccion_jugador);
    });
    
    scissors.addEventListener('click',function(){
        papper.style.display = "none";
        rock.style.display = "none";
        house.style.display = "flex";
        seleccion_jugador = 2;
        jugar();
        validar(seleccion_jugador);
    });
    
    rock.addEventListener('click',function(){
        papper.style.display = "none";
        scissors.style.display = "none";
        house.style.display = "flex";
        seleccion_jugador = 3;
        jugar();
        validar(seleccion_jugador);
    });
    
    // reseteamos los valores del valor final
    again.addEventListener('click',function(){
        scissors.style.display = "flex";
        rock.style.display = "flex";
        papper.style.display = "flex";
        house.style.display = "none";
        resultado.innerHTML = "";
        guardarProgreso();
    });

    // cerrar popup
    rules.addEventListener('click',function(){
        ruleson.style.display = "flex";
    });

    // cerrar popup
    close.addEventListener('click',function(){
        ruleson.style.display = "none";
    });


    // -------- ahora programamos la eleccion de casa -----------------
    let num;

    function jugar(){
        num = Math.random(1);
        num = num * 10;
        //num = Math.ceil(num)  //me retorna el valor mas cernano superior
        //num = Math.floor(num) //me retorna el valor mas cercano a inferior
        num = Math.round(num); //me retorna el valor redondeado
        num = parseInt(num)-1;
        console.log(num);
    
        if(num < 2){
            house.innerHTML = `<img src="images/icon-paper.svg" alt=""></img>`;
            house.style.border = "40px solid dodgerblue";
        }else{
            if(num == 2){
                house.innerHTML = `<img src="images/icon-scissors.svg" alt=""></img>`;
                house.style.border = "40px solid orange";
            }else{
                house.innerHTML = `<img src="images/icon-rock.svg" alt=""></img>`;
                house.style.border = "40px solid crimson";
            }
        }
    }



    // validamos la jugada

    function validar(x){
        let seleccion_jugador = x;
        
        // jugador selecciono papel y casa papel
        if (seleccion_jugador == 1 && num < 2){
            console.log("empate");
            resultado.innerHTML = "Same";
        }else{
            
            // jugador selecciono papel y casa tijeras
                if (seleccion_jugador == 1 && num == 2){
                    console.log("usuario pierde contra tijeras");
                    score.innerHTML = 0;
                    resultado.innerHTML = "You lose";
                    resultado.className = "result lose";
        }else{
                // jugador selecciono papel y casa piedra
                if (seleccion_jugador == 1 && num > 2){
                    console.log("usuario gana con papel");
                    score.innerHTML = parseInt(score.innerHTML) + 1;
                    resultado.innerHTML = "You win";
                    resultado.className = "result win";
                }else{
                    // usuario selecciono tijeras y casa papel
                    if(seleccion_jugador == 2 && num < 2){
                        console.log("usuario gana con tijeras");
                        score.innerHTML = parseInt(score.innerHTML) + 1;
                        resultado.innerHTML = "You win";
                        resultado.className = "result win";
                }else{
                     // usuario selecciono tijeras y casa tijeras
                     if(seleccion_jugador == 2 && num == 2){
                        console.log("empate");
                        resultado.innerHTML = "Same";
                    }else{
                        // usuario selecciono tijeras y casa piedra
                        if(seleccion_jugador == 2 && num > 2){
                            console.log("usuario pierde contra piedra");
                            score.innerHTML = 0;
                            resultado.innerHTML = "You Lose";
                            resultado.className = "result lose";
                        }else{
                              // usuario selecciono piedra y casa papel
                                if(seleccion_jugador == 3 && num < 2){
                                    console.log("usuario pierde contra papel");
                                    score.innerHTML = 0;
                                    resultado.innerHTML = "You lose";
                                    resultado.className = "result lose";
                                }else{
                                    // usuario selecciono piedra y casa tijeras
                                    if(seleccion_jugador == 3 && num == 2){
                                        console.log("usuario gana con piedra");
                                        score.innerHTML = parseInt(score.innerHTML) + 1;
                                        resultado.innerHTML = "You win";
                                        resultado.className = "result win";
                                    }else{
                                        // usuario selecciono piedra y casa piedra
                                        if(seleccion_jugador == 3 && num > 2){
                                            console.log("empate");
                                            resultado.innerHTML = "Same";
                                            resultado.removeAttribute.className = "win lose";
                                        }   
                                    }   
                                }
                        }
                    }
                }
            }
            }
        }
    
    }


    // ahora guardamos el progreso

    function guardarProgreso() {
        document.cookie = score.innerHTML;
    }






});