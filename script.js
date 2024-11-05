import { barcelona, roma, paris, londres } from "./ciudades.js";

// Obtener elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// Agregar un evento click a cada enlace
enlaces.forEach(function(enlace){
enlace.addEventListener('click', function(){
// Remover la clase active de todos los enlaces
enlaces.forEach(function(enlace){
enlace.classList.remove('active');
});
// Agregar la clase active al enlace actual
this.classList.add('active')

// Obtener el contenido correspondiente según el enlace
let contenido = obtenerContenido(this.textContent)

// Mostar el contenido en el DOM
tituloElemento.innerHTML = contenido.titulo
subtituloElemento.innerHTML = contenido.subtitulo
parrafoElemento.innerHTML = contenido.parrafo
precioElemento.innerHTML = contenido.precio
});
});







// Función para traer información desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
    'Barcelona' : barcelona,
    'Roma' : roma,
    'París' : paris,
    'Londres' : londres
    };
    return contenido[enlace];
}
