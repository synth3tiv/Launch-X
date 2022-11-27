class Pila {
  constructor() {
    this.pila = [];
    this.contador = 0;
  }

  // mete elementos al final de la pila
  push(element) {
    this.pila[this.contador] = element;
    this.contador++;
    return this.pila;
  }

  // saca elementos del final de la pila
  pop() {
    this.contador--;
    const element = this.pila[this.contador];
    delete this.pila[this.contador];
    return element;
  }

  // solo muestra el ultimo elemento de la pila
  peek() {
    return this.pila[this.contador - 1];
  }

  // devuelve el tamaño de la pila
  size() {
    return this.contador;
  }

  imprime() {
    console.log()
  }
};

const miPila = new Pila();
console.log(miPila.size());
miPila.imprime();
console.log(miPila.push("the rock"));
console.log(miPila.push(5));
miPila.imprime();
console.log(miPila.push("hola"));
console.log(miPila.pop());
miPila.imprime();