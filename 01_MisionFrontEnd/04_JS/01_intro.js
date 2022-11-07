console.log("---- Variables ----");
var numero1 = 5;
let numero2 = 17;
const numero3 = 3;
console.log("Numero 1: " + numero1 + " Numero 2: " + numero2 + " Numero 3: " + numero3);

console.log("---- Cadenas/Strings ----");
var frase1 = "Ejemplo de comillas dobles";
let frase2 = 'Ejemplo de comillas simples';
var frase3 = `Ejemplo de comillas ${numero1} invertidas`;
console.log(frase1 + "\n" + frase2 + "\n" + frase3);

console.log("---- Condicionales ----")
console.log(numero1 != numero2);
console.log(numero1 > numero2);
console.log(numero1 < numero2);
console.log(numero1 === numero1);

console.log("---- Operador logio AND ----");
console.log(true && true)
console.log(true && false)
console.log(false && false)
console.log(true && false  && true)
console.log((true && false && true) || true)
console.log(numero1 === numero1 && numero1 < numero2)

console.log("---- Operador logio OR ----");
console.log(true || false)
console.log(true || true)
console.log(false || false)
console.log(false || true || false)
console.log(false || true || (false && true))
console.log(numero2 > numero1 || numero3 != numero3)

console.log("---- Arreglos ----")
let listaDeNumeros = [2, 3,5, 7, 11, 234]
console.log(listaDeNumeros[4])

listaDeNumeros.push(16);
listaDeNumeros.push(939);

console.log(listaDeNumeros)
console.log(listaDeNumeros.length)

listaDeNumeros.pop()
console.log(listaDeNumeros)
console.log(listaDeNumeros.length)

let listaDePalabras = ["Explorer", "Mision Comander", "LaunchX", "Innovaccion", "JavaScript"]
console.log(listaDePalabras)
console.log(listaDePalabras.length)

// las cadenas tambien se pueden tratar como arreglos
let palabra = "Explorer";
console.log(palabra[2])
console.log(palabra.length)

console.log("---- Objetos ----")

let explorer = {
    nombre: "Nombre del Explorer",
    email: "email@innovaccion.mx",
    numReg: 12345,
    mision: "FrontEnd",
    proyectos: ["Abogabot", "Taquería", "Pastelería", "Vacunación"],
    proPer: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio",
        cuantos: 3
    }
};
console.log(explorer)
console.log("Proyectos: " + explorer.proPer.cuantos + " " + explorer.proPer.escolar)
console.log(explorer.numReg)

// flujo condicional
let number1 = 7;
let number2 = 6;
console.log("\n---- if / else ----\n");
if (number1 > number2 || number1 > 8) {
  console.log("El número 1 es mayor que número 2");
}
else if( number1 === number2){
  console.log("Los números son iguales");
}
else {
  console.log("El número 2 es mayor que número 1");
}

/* Ciclo condicional */
console.log("\n---- While ----\n");
let numberWhile = 5;
while (numberWhile <= 12) {
  console.log(numberWhile);
  numberWhile = numberWhile + 2;
}
console.log("Aquí ya salió del while " + numberWhile);

/* Ciclo condicional de una iteración mínimo */
console.log("\n---- Do While ----\n");
let numeroDoWhile = 12;
do {
    numeroDoWhile = numeroDoWhile + 2;
    console.log(numeroDoWhile);
} while (numeroDoWhile < 20);
console.log("Aquí sale del Do While " + numeroDoWhile);

/* Ciclo for con iteración controlada */
console.log("\n---- For ----\n");
let numeroFor = 0
for (numeroFor ; numeroFor <= 12; numeroFor = numeroFor + 1) {
  console.log(numeroFor);
}
console.log("Aquí salimos del for " + numeroFor);

/* Opciones para evitar anidar condicionales */
console.log("\n---- Switch ----\n");
switch (prompt("¿Cómo está el clima?")) {
  case "lluvioso":
    console.log("No te vayas a mojar");
    break;
  case "soleado":
    console.log("Ponte bloqueador");
    break;
  case "nublado":
    console.log("Tapate bien");
    break;
  default:
    console.log("No se como está el clima");
    break;
}
console.log("Aquí salimos del Switch");