//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


const $calcularSegundosTotales = document.querySelector('#calcular')

const SEGUNDOS_POR_MINUTO = 60;
const MINUTOS_POR_HORA = 60;

let segundos = 0;
let minutos;
let horas;


$calcularSegundosTotales.onclick = function(){
    const $horasTotales = Number(document.querySelector('.hora-clase').value);
    const $minutosTotales = Number(document.querySelector('.minutos-clase').value);
    const $segundosTotales = Number(document.querySelector('.segundos-clase').value);
    
    function calcularSegundosTotales() {
        for (let i = 0; i < $segundosTotales.length; i++){
            segundos = segundos + $segundosTotales[i];
        }
    }
    console.log(calcularSegundosTotales)

    return false
}
