const cuadrado = function (x) {
  return x * x;
};

let numero = 8;
let numero2 = 19;
let sumaNumerosAlCuadrado = cuadrado(numero) + cuadrado(numero2);
console.log(sumaNumerosAlCuadrado);

const ruido = function () {
    console.log("kataplum!");
}

ruido();

const exponencial = function (base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++){
        resultado *= base;
    }
    return resultado;
}

let resultadoExponencial = exponencial(2, 17)
console.log(resultadoExponencial)


console.log(sumar(5,65));
function sumar(x, y) {
    return x + y;
}

const restar = (a, b) => {
    return a - b;
}
console.log(restar(40, 8));

function saludar(quien) {
  console.log("Hola " + quien);
}
saludar("Sam");
console.log("Bye");

//Excepciones
// function preguntaDireccion(pregunta) {
//   let result = prompt(pregunta);
//   if (result.toLowerCase() == "izquierda") return "I";
//   if (result.toLowerCase() == "derecha") return "D";
//   throw new Error("Dirección inválida: " + result);
// }

// function mirar() {
//   if (preguntaDireccion("A que lado?") == "I") {
//     return "una casa";
//   } else {
//     return "2 osos hambrientos";
//   }
// }

// try {
//   console.log("Mira a ", mirar());
// } catch (error) {
//   console.log("Hubo un error: " + error);
// }

/*
const preguntar = (pregunta) => {
  let respuesta = prompt(pregunta);
  respuesta = respuesta.toLocaleLowerCase();
  if (respuesta == "izquierda" || respuesta == "derecha") return respuesta;
  throw new Error("Direccion invalida " + respuesta);
};

const mirar2 = () => {
  let aDonde = preguntar("A que lado volteas?");
  if (aDonde == "izquierda") {
    return "una casa";
  } else {
    return "2 osos hambrientos";
  }
};

try {
  let aDonde = mirar2();
  console.log("Mirar a", aDonde);
} catch (error) {
  console.log("Hubo un error: ", error);
}
*/

//Asincrono
setTimeout(() => console.log("Tick"), 500);

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

const promesa = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (resolve(console.log('Todo cool')), reject(new Error('oops'))),
      2000
    )
  )

async function main() {
  //   promesa()
  //     .then(() => {
  //       promesa()
  //         .then(() => console.log('hola'))
  //         .catch((err) => console.error(err))
  //     })
  //     .catch((err) => console.error(err))

  await promesa();
  console.log('Aquí termina la primer promesa');
  await promesa();
  console.log('Aquí termina la segunda promesa');
}

main();