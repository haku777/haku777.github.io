// crear contador de clicks en html hara el mouse
const texto = document.querySelector('.contador');
const textoP = document.querySelector('.contador');
var contador = 0;
    texto.addEventListener('click', (e)=>{
        contador=contador + 1;
        textoP.textContent="le diste click Izquierdo : " + contador + " veces"
    }   );
    

// que boton presione
var contadorDerecho=0;
var contadorIzquierdo=0;
var contadorMedio=0;
function detectarBoton(event){
    var boton = document.getElementsByClassName('boton');
    boton.addEventListener('contextmenu' ,as())

	if (event.button==2){
        contadorDerecho=contadorDerecho + 1;
        boton.textContent="boton derecho: " +contadorDerecho;
		// console.log("boton derecho: " +contadorDerecho);
    }
        else if (event.button==1){

            contadorMedio=contadorMedio + 1;
            console.log("boton Medio: " +contadorMedio);
        }
        else{

            contadorIzquierdo=contadorIzquierdo + 1;
            console.log("boton izquierdo: " +contadorIzquierdo);
        }
 
}
//     <div class="container">
//        <p class="contador"></p>
//     </div>


