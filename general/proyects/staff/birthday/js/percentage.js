function time(){

let ahora = new Date();
let comienzo = new Date(ahora.getFullYear(), 0);
var dif = ahora - comienzo;
var unDia = 1000 * 60 * 60 * 24;
var dia = Math.round(dif / unDia);
let diasFaltantes = 365 - dia;

let consumidos = 365 - diasFaltantes;

console.log("dias pasados: " + consumidos);
	console.log("dias restantes: " + diasFaltantes);
}
time();

