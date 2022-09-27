var calificaciones = [10, 2, 3, 15, 23, 30];
// agrupa en una variable acumulador, por cada elemento, el cero es el valor inicial del acumulador
var suma = calificaciones.reduce(
  (acumulador, calificacion) => acumulador + calificacion,
  0
);
console.log(suma);

var calificaciones = [10, 2, 3, 15, 23, 30];
var resultado = calificaciones.some((numero) => numero % 2 === 0);
console.log(resultado);

resultado = calificaciones.every((numero) => numero % 2 === 0);
console.log(resultado);
