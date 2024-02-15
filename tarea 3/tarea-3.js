//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


function calcularSegundosTotales(clase1, clase2, clase3, clase4, clase5){
    return suma = clase1 + clase2 + clase3 + clase4 + clase5
}

function convertirHorasASegundos(hora, segundosEnUnaHora){
    const segundosEnUnaHora = 3600
    return hora/segundosEnUnaHora
}

function convertirHorasASegundos(hora, segundosEnUnMinuto){
    const segundosEnUnMinuto = 60
    return hora/segundosEnUnMinuto
}

const $calcularSegundosTotales = document.querySelector('#calcular')

$calcularSegundosTotales.onclick = function(){
    const horas = Number(document.querySelector('.hora-clase').value);
    const minutos = Number(document.querySelector('.minutos-clase').value);
    const segundos = Number(document.querySelector('.segundos-clase').value);

    const segundosClase1 = document.querySelector('#calculo-tiempo-total-clase-1')

    const resultado = document.querySelector('#resultado')
    
}


