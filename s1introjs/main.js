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
