const myArrowFunction = () => {
  console.log("algo");
};

function myFunction() {
  console.log("otro algo");
}

console.log(myArrowFunction());
console.log(myFunction());

/*return implícito*/
/*sólo aplica para funciones flecha, y significa que si el valor de retorno de la función, se puede obtener en una sola expresión de JavaScript, entonces podemos prescindir de las llaves y el operador return*/

/* Crear una función que reciba un texto y lo devuelva en mayúsculas*/

/*Sin aplicar return implícito:*/

/*const uppercaseText = (text) => {
    en esta función tenemos más de una expresión de javascript, y por lo tanto no podríamos ocupar return implícito
  let result = text.toUppercase();
  return result;
};*/

/*aplicando return implícito*/
/* las líneas 21 y 22 de la función anterior se pueden simplicar en una sola línea:

return text.toUpperCase()

al quedar sólo una única expresión de javascript, la función se puede reescribir de la siguiente forma:
*/

const uppercaseText = (text) => text.toUpperCase();

/* lo que va después de la flecha representa lo que que queremos que retorne nuestra función*/

/*--------SÓLO LAS FUNCIONES FLECHA TIENEN RETURN IMPLÍCITO------*/

/*Contexto del operador this*/

//console.log(this);
/*
let x = "baz";
window.x = "mi valor";

const thisArrowTest = () => {
  console.log("this ", this);
  console.log("x", x);
  console.log("this.x", this.x);
};

thisArrowTest();

function thisTest() {
  console.log("this", this);
  console.log("x", x);
  console.log("this.x", this.x);
}

thisTest();*/

function Perro(name) {
  this.nombre = name;
  this.saludar = function () {
    console.log(`Hola, soy ${this.nombre}!!`);
  };
}

let firstDog = new Perro("Solovino");
console.log(firstDog);

let secondDog = new Perro("Chilakil");
console.log(secondDog);

firstDog.saludar();
secondDog.saludar();

function ArrowDog(name) {
  this.nombre = name;
  this.saludar = () => {
    console.log(`Hola, soy ${this.nombre}`);
  };
}

let firstArrowDog = new ArrowDog("Boris");
console.log(firstArrowDog);

firstArrowDog.saludar();
