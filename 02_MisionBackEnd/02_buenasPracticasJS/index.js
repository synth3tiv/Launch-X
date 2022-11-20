const parrafoInicial = document.getElementById("parrafoinicial");

console.log(parrafoInicial);

parrafoInicial.onclick = function () {
  cambiaColorAleatorio();
}

function cambiaColorAleatorio() {
  const colores = [
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "purple",
    "orange",
    "brown",
    "black",
    "white"
  ];

  // console.log(colores[Math.floor(Math.random() * colores.length)]);
  parrafoInicial.style.color = colores[Math.floor(Math.random() * colores.length)];
}

/* TIPOS DE DATOS
var -> puede modificarse, scope global NO SE RECOMIENDA
let -> puede modificarse, scope local RECOMENDADA
const -> no puede modificarse, scope global
*/

/*
CASES
PascalCase - Clases -- JAVA
camelCase - Variables, funciones, atributos -- JS
  variable -> parrafoInicial
  funcion -> obtenerParrafoInicial()
  atributo -> parrafoInicial
snake_case - Variables y funciones -- Python, JS
CASE - Constantes
*/