/*
// for
for (let i = 0; i < 19; i++){
if ((i % 2) != 0){
  continue;
  }
  if(i == 10){
    break;
  }
  console.log(i);
}
console.log("Fin del bucle");

var1 = null;
var3 = "";
var4 = 0;
var5 = false;
var6 = undefined;

console.log(var1);
console.log(var1 + var1);
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6);
console.log(var6 + var6);


console.log("_______________________________")
// if - else if - else
function validarEdad (edad) {
    if (confirm("¿Estás seguro de seguir?")) {
      console.log("sigue bajo tu propio riesgo");
      if (edad >= 18 && edad <= 150) {
        console.log("Puedes comprar cerveza");
      } else if (edad > 150) {
        console.log("No mientas");
      } else if (edad >= 0) {
        console.log("Eres muy tikito :c");
      } else {
        console.log("No existes :C");
      }
  } else {
    console.log("que miedoso");
  };
};

function mandarMensajes (edad) {
  console.log(typeof edad);
  switch(edad) {
  case 13:
      console.log("Deberias de estar en la secundaria");
      break;
  case 17:
      console.log("Deberias de estar en la preparatoria");
      break;
  case 5:
    validarEdad(edad);
    break;
  default:
      console.log("No se que decirte owo");
  }
}

let edad = prompt("Introduce tu edad");
if(edad && !isNaN(edad)) {
  edad = Number(edad);
  validarEdad(edad);
  mandarMensajes(edad);
} else {
  alert("No has introducido tu edad");
  location.reload();
}
*/
// _______________________________
// while
/*
let boletosDisponibles = 10;
while (boletosDisponibles > 0) {
  console.log("Puedes comprar un boleto");
  boletosDisponibles--;
  console.log("Quedan " + boletosDisponibles + " boletos");
  console.log("_______________________________");
}

// Do while
do {
console.log("Puedes comprar un boleto");
  boletosDisponibles--;
  console.log("Quedan " + boletosDisponibles + " boletos");
  console.log("_______________________________");
} while (boletosDisponibles > 0);
*/
// try catch finally, error handling
try{
  // codigo suceptible a errores
  throw "Orden 66";
} catch (error) {
  console.error("ERRRORR");
  console.warn(error)
} finally {
  console.warn(":C");
}
