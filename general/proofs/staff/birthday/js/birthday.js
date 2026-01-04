
function diasParaFecha(dia, mes) {
    const ahora = new Date();
    const anioActual = ahora.getFullYear();
    
    // Creamos la fecha objetivo con el año actual
    // Nota: el mes en Date() empieza en 0 (enero es 0, diciembre es 11)
    let fechaObjetivo = new Date(anioActual, mes - 1, dia);

    // Si la fecha ya pasó este año, apuntamos al año siguiente
    if (fechaObjetivo < ahora) {
        fechaObjetivo.setFullYear(anioActual + 1);
    }

    // Calculamos la diferencia en milisegundos
    const diferenciaMs = fechaObjetivo - ahora;

    // Convertimos a días (usando Math.ceil para incluir el día actual incompleto)
    const diasFaltantes = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

    return diasFaltantes;
}

// --- EJEMPLOS DE USO ---

// Si hoy es 3 de enero y pides el 5 de enero:
console.log(diasParaFecha(5, 1)); // Retorna 2

// Si hoy es 3 de enero y pides el 1 de enero (ya pasó, calcula para el otro año):
console.log(diasParaFecha(1, 1)); // Retorna ~363

// let interval = setInterval(time, 1000);

// 60.000= 1seg / 1 min / 1hour / 1day