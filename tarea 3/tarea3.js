//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


const $calcularSegundosTotales = document.querySelector('#calcular');


$calcularSegundosTotales.onclick = function(){
    const SEGUNDOS_POR_MINUTO = 60;
    const MINUTOS_POR_HORA = 60;
    let sumaSegundos = calcularSegundos();
    let sumaMinutos = calcularMinutos( ) + Math.floor(sumaSegundos/MINUTOS_POR_HORA);
    let sumaHoras = calcularHoras() + Math.floor(sumaMinutos/SEGUNDOS_POR_MINUTO);      
    sumaSegundos %= SEGUNDOS_POR_MINUTO;
    sumaMinutos %= MINUTOS_POR_HORA
    duracionTotalClases = `La duración total de las clases es de ${sumaHoras} horas, ${sumaMinutos} minutos y ${sumaSegundos} segundos`


    document.querySelector('#resultado').textContent = duracionTotalClases
    
    return false
}

function calcularHoras(){
    const $horasClases = document.querySelectorAll('.hora-clase');
    let horasClases = 0;
    for(let i=0; i<$horasClases.length; i++){
        horasClases += Number($horasClases[i].value);
    }

    return horasClases;
}
 
function calcularMinutos(){
    const $minutosClases = document.querySelectorAll('.minutos-clase');
    let minutosClases = 0;
    for(let i=0; i<$minutosClases.length; i++){
        minutosClases += Number($minutosClases[i].value);
    }

    return minutosClases;
}

function calcularSegundos(){
    const $segundosClases = document.querySelectorAll('.segundos-clase');
    let segundosClases = 0;
    for(let i=0; i<$segundosClases.length; i++){
        segundosClases += Number($segundosClases[i].value);
    }

    return segundosClases;
}
