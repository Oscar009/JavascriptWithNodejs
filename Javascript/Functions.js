function saludar() {
  console.log("Hola");
}
saludar();

function saludar(nombre) {
  console.log(`Hola soy ${nombre}`);
}
saludar("Sergio");

function saludar(nombre) {
  return `Hola soy ${nombre}`;
}
var saludo = saludar("ya");
console.log(saludo);
console.log(saludar("ddd"));

// Expresion o anonimas
var suma = function (a, b) {
  return a + b;
};
console.log(suma(2, 2));

// Arrow function
var restar = (a, b) => {
  return a - b;
};
console.log(resta(6, 1));

var multiplicar = (c, d) => c * d;
console.log(multiplicar(3, 4));
