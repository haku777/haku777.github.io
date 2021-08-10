
let percent = document.getElementById("percent");

let ahora = new Date();
let comienzo = new Date(ahora.getFullYear(), 0);
var dif = ahora - comienzo;
var unDia = 1000 * 60 * 60 * 24;
var dia = Math.round(dif / unDia);
let diasFaltantes = 365 - dia
let porcentaje = 100 / 365
let cosumidos = Math.round(dia * porcentaje)

percent.style.background = `conic-gradient(#252555 ${cosumidos}%,#ffcfcc ${cosumidos}% 100%)`;

