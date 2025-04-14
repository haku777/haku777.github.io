function time(){

let percent = document.getElementById("percent");
let ahora = new Date();
let comienzo = new Date(ahora.getFullYear(), 0);
var dif = ahora - comienzo;
var unDia = 1000 * 60 * 60 * 24;
var dia = Math.round(dif / unDia);
let diasFaltantes = 365 - dia;
let porcentaje = 100 / 365;

let seconds = ahora.getSeconds();
segPor = 100/60;
seconds = seconds * segPor;
let consumidos = dia * porcentaje;

	percent.style.background = `conic-gradient(crimson ${consumidos}%,white ${consumidos}% 100%)`;

	console.log(diasFaltantes);
	console.log(consumidos);
	console.log("ya pasaron 24 horas revisar a las 11:41");
}
time();

// let interval = setInterval(time, 1000);

// 60.000= 1seg / 1 min / 1hour / 1day