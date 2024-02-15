//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

function darBienvenida(nombre, segundoNombre, primeroApellido, segundoApellido, edad){
    return `Bienvenido ${nombre} ${segundoNombre} ${primeroApellido} ${segundoApellido}`
}

const $darBienvenida = document.querySelector('#ingresar')

$darBienvenida.onclick = function(){
    const nombre = document.querySelector('#nombre-usuario').value;
    const segundoNombre = document.querySelector('#segundo-nombre-usuario').value;
    const apellido = document.querySelector('#apellido-usuario').value;
    const segundoApellido = document.querySelector('#segundo-apellido-usuario').value;
    const edad = Number(document.querySelector('#edad-usuario').value);

    const nuestroTitulo = document.querySelector('#titulo');
    nuestroTitulo.innerText = darBienvenida(nombre, segundoNombre, apellido, segundoApellido)

}


