//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."




function crearArray(numeros, array){
    for (let i = 0; i<numeros.length; i++){
        array.push(Number(numeros[i].textContent));
    }
    return array;
}

const $numeros = document.querySelectorAll('li');
let $array = [];

$array = crearArray($numeros, $array).sort();

function calcularPromedio(array){
    let sumaArray = array[0];
    for(let i = 1; i<array.length; i++){
        sumaArray += array[i];
    }
    return sumaArray/array.length
}
function calcularModa(array){
    for(let i=0; i<array.length; i++){
        if(array[i] === array[i+1]){
            return array[i]
        }
        
    }
}

const nodoPagina1 = document.querySelector('div');
const nuevoP1 = document.createElement('p')
const nuevoEmp1 = document.createElement('em')
const textoParrafo1 = document.createTextNode(`El promedio es ${calcularPromedio($array)}`);

nuevoEmp1.appendChild(textoParrafo1);
nuevoP1.appendChild(nuevoEmp1)
nodoPagina1.appendChild(nuevoP1);


const nodoPagina2 = document.querySelector('div');
const nuevoP2 = document.createElement('p')
const nuevoEmp2 = document.createElement('em')
const textoParrafo2 = document.createTextNode(`El minimo es ${Math.min(...$array)}`);

nuevoEmp2.appendChild(textoParrafo2);
nuevoP2.appendChild(nuevoEmp2)
nodoPagina2.appendChild(nuevoP2);

const nodoPagina3 = document.querySelector('div');
const nuevoP3 = document.createElement('p')
const nuevoEmp3 = document.createElement('em')
const textoParrafo3 = document.createTextNode(`El maximo es ${Math.max(...$array)}`);

nuevoEmp3.appendChild(textoParrafo3);
nuevoP3.appendChild(nuevoEmp3)
nodoPagina3.appendChild(nuevoP3);

const nodoPagina4 = document.querySelector('div');
const nuevoP4 = document.createElement('p')
const nuevoEmp4 = document.createElement('em')
const textoParrafo4 = document.createTextNode(`El numero que mas se repite es ${calcularModa($array)}`);

nuevoEmp4.appendChild(textoParrafo4);
nuevoP4.appendChild(nuevoEmp4)
nodoPagina4.appendChild(nuevoP4);