let lista = [];
let x = 5;
let y = 10;

// asignación de adición
x += y; // como: x = x + y
x += y;
console.log(x);

lista.push(x);
console.log(lista);


// asignación de sustracción
y -= x;
lista.push(y);
console.log(y);
console.log(lista);

// asignación de multiplicación
x *= y;
lista.push(x);
console.log("x =", x);
console.log(lista);

// desplazamiento a la izquierda, bit a bit
x = 5;
y = 10;
x <<= y;

lista.push(x);
console.log(x);
console.log(lista);

// asignacion de modulo (resto de la división), residuo
x = 5;
y = 11;
console.log(y % x);

y %= x;
lista.push(y);
console.log("Y =", y);
console.log(lista);

// estructura de control if
let var1 = 3;
let var2 = 4;

// operador igual
if (var1 == '3') {
  console.log("son iguales");
} else {
  console.log("son diferentes");
};

// operador estrictamente igual
if (var1 === '3') {
  console.log("son iguales");
} else {
  console.log("son diferentes");
};

// operador desigualdad
if (var1 != '4') {
  console.log("son diferentes");
} else {
  console.log("son iguales");
};

// operador estrictamente desigual
if (var1 !== 3) {
  console.log("son diferentes");
} else {
  console.log("son iguales");
};

// > operador mayor que
console.log(var1 > var2);

// < operador menor que
console.log(var1 < var2);
console.log(23 < 23);

// <= operador menor o igual que
console.log(var1 <= var2);

// >= operador mayor o igual que
console.log(var1 >= var2);