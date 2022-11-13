// encontrar elementos de html
const titulo = document.getElementById("titulo");
const parrafo = document.getElementsByTagName("p");
const links = document.getElementsByClassName("links");
console.log(parrafo)

// cambiar valores de html
titulo.innerHTML = "titulo cambiado"
parrafo[0].innerHTML = "nuevo parrafo by me"

document.getElementById("demo").innerHTML =
"el texto en el parrafo (index 0) es: " + parrafo[0].innerHTML;

links[0].href = "https://www.ironmaiden.com/"
links[0].target = "_blank"

// cambiar estilos
titulo.style.color = "slateblue"

// eventos
function cambiarTexto(obj) {
  obj.innerHTML = "texto clickeado"
}

function mOver(obj) {
  obj.innerHTML = "mouse encima"
}

function mOut(obj) {
  obj.innerHTML = "mouse fuera"
}

function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5"
  obj.innerHTML = "sueltame"
}

function mUp(obj) {
  obj.style.backgroundColor = "#D94A38"
  obj.innerHTML = "gracias"
}

// addEventListener
const boton = document.getElementById("boton")
boton.addEventListener("click", alerta)

function alerta() {
  alert("aleeeeeerta")
}