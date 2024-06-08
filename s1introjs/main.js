console.log("hola koders!");

/*Declaración*/
let myName = "Israel salinas";

/*Reasignación*/
/*myName = "Naomi Lopez";

let foo = "some value";

console.log(foo);

foo = "other value";

console.log(foo);

let myGlobalVariable = "global value";

console.log(myGlobalVariable);

const myFunction = () => {
  console.log(myGlobalVariable);
  let myLocalVariable = "my local value";
};

myFunction();*/
//console.log(myLocalVariable);

/*let x = 27;

console.log(x);

let y = x;

console.log(y);

x = 72;

console.log(x);

y = x;

console.log(y);

let kodersList = ["Pedro", "Lau"];

console.log(kodersList);

let secondKodersList = kodersList;

console.log(secondKodersList);

kodersList.push("Rodrigo");

console.log(kodersList);

console.log(secondKodersList);

secondKodersList.push("third koder");

console.log(kodersList);

console.log(secondKodersList);
*/
let myString = "hola koders";

console.log(typeof myString);

let myAge = 34;

console.log(typeof myAge);

let javascriptIsEasy = true;

/*truthys || falsys*/

console.log(typeof javascriptIsEasy);

let someVariable;

console.log(someVariable);
console.log(typeof someVariable);

let hobbies = null;

console.log(typeof hobbies);

let koder = {
  name: "Israel",
  lastname: "Salinas Martínez",
  age: 34,
  isOld: false,
  greeting: () => {
    console.log("hola koders");
  },
};

let dog = {
  breed: "French",
  owner: "Isra",
  name: "Solovino",
  color: "negro",
  bark: () => {},
};

let kodersList = ["chavs", "Vale", "Lau"];

let dogs = [
  {
    breed: "Eléctrico",
    name: "Chilaquil",
  },
  {
    breed: "Callerman",
    name: "Firu",
  },
];

let numbers = [1, 2, 3, 4, 5];

let weirdArray = [1, "hola", { name: "object" }, true];

/*Operadores aritméticos*/
/*Sirven para realizar operaciones aritméticas*/

let number1 = 10;
let number2 = 5;

/*Suma*/

let addition = number1 + number2;
console.log(addition);

/*Resta*/

let substraction = number1 - number2;
console.log(substraction);

/*Multiplicación*/

let multiplication = number1 * number2;
console.log(multiplication);

let secondResult = multiplication * 24;
console.log(number1 * 15);
console.log(secondResult);

/*División*/

let division = number1 / number2;
console.log(division);

/*Módulo*/

let modulus = number1 % number2;
console.log(modulus);

/*Incremento*/

console.log(++number1);
console.log(number1);

/*decremento*/
console.log(--number2);

/*Operadores de asignación*/
/*Sirven para reasignar el valor de una variable*/

/*Asignación*/
number1 = 50;

/*Asignación aditiva*/
number1 += 14;
console.log(number1);

/*Asignación sustractiva*/
number1 -= 15;
console.log(number1);

/*Asignación multiplicativa*/
number1 *= 3;
console.log(number1);

/*Asignación divisiva*/
number1 /= 8;
console.log(number1);

/*Asignación modular*/
number1 %= 12;
console.log(number1);

/*Operadores de comparación*/
/*Estos operadores evaluan el resultado de comparar dos valores, y siempre devuelven un valor booleano*/

/* variables de referencia:

let number1 = 10;
let number2 = 5;

*/

/*Mayor que*/

//number1 > number2  ---- true

/*Menor que*/

// number1 < number2 ---- false

/*Mayor o igual que*/

// number1 >= number2 ---- true

/*Menor o igual que*/

// number1 <= number2 ---- false

/*Igual que ( evalua que el valor sea el mismo entre dos variables )*/

let varX = 10;
let varY = "10";

console.log(varX == varY); /*---true---*/

/*Idéntico a ( evalua que tanto el valor como el tipo de dato sea el mismo entre dos variables)*/

console.log(varX === varY); /*---false---*/

/*Operadores lógicos*/
/*Sirven para evaluar la relación entre 2 o más expresiones de javascript*/

let logicVariableA = 20;
let logicVariableB = 15;
let logicVariableC = 30;

/*And (&&): Devuelve verdadero sí y sólo sí todas las expresiones implicadas son verdaderas*/

console.log(
  logicVariableA > logicVariableB && logicVariableB < logicVariableC
); /*----true---*/
console.log(
  logicVariableA > logicVariableB && logicVariableB > logicVariableC
); /*----false---*/

/*Or ( || ): Devuelve verdadero cuando al menos una de las expresiones evaluadas es verdadera*/

console.log(
  logicVariableA > logicVariableB || logicVariableB < logicVariableC
); /*----true---*/
console.log(
  logicVariableA > logicVariableB || logicVariableB > logicVariableC
); /*----true---*/
console.log(
  logicVariableA < logicVariableB || logicVariableB > logicVariableC
); /*----false---*/

/*Not ( !expresion ): invierte el resultado de la expresion con la que se está operando*/

let myBoolean = true;
console.log(!myBoolean); /*---false---*/

console.log(!(logicVariableA > logicVariableB)); /*---false---*/

/*Falsys y truthys*/

//Falsys (es un valor que se interpreta como un false booleano)

/*
  0
  ""
  null
  undefined
  NaN
*/

//Truthy: es un valor que interpreta como verdadero

/* !falsy*/
