/**
 * Asignación
 */

var x = 2;
var y = 10;

x += y; // x = x + y;

console.log(x);

x -= y;

console.log(x);

x *= y;

console.log(x);

x /= y;

console.log(x);

x %= y;

console.log(x);

x **= y;

console.log(x);

/**
 * Comparación
 */

// ==
console.log(3 == "3");

// !=
console.log(3 != "3");

// estrictamente igual ===
console.log(3 === "3");

// desigualdad estricta
console.log(3 !== "3");

// <, <=, >, >=

/**
 * Aritméticos
 *
 *   +, -, *, %, /, **
 */

// incremento ++

// decremento --

/**
 * Lógicos
 */

// AND &&

// OR ||

// NOT !

/**
 * Concatenación ( + )
 */

/**
 * Ternario ( condición ? valortrue : valorfalse)
 */

/**
 * Desestructuración objetos
 */

var persona = { nombre: "oscar" };

var { nombre: nuevoNombre } = persona;

console.log(nuevoNombre);

// desestructuración de objetos
var arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var [primeraPosición, dos] = arreglo;
console.log(primeraPosición);

// miembro o acceso de propiedades de

var persona = { nombre: "oscar", edad: 21 };

// notación punto
console.log(persona.nombre);

// notación por corchetes
console.log(persona["nombre"]);
console.log(arreglo[0]);

// Operacion de determinación de tipo
console.log(typeof 21);
