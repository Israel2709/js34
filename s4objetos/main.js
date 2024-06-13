let cat = {
  name: "Ban Balam",
  color: "orange",
  age: 1,
  meow: () => {
    console.log("Miau");
  },
};

console.log(cat);
let catName = cat.name; /*Notación de punto*/
console.log(catName);
let catColor = cat.color;
console.log(catColor);
console.log(cat.breed);

console.log(cat["age"] /*Notación de corchetes*/);

cat.age = 5;

console.log(cat);

cat.breed = "Naranjoso";

console.log(cat);

let emptyObject = {};

emptyObject.color = "red";

console.log(emptyObject);

cat.meow();

type operationTypes = {
  operation: "suma" | "resta" | "multiplicacion" | "division",
};

let calculator = {
  addTwoNumbers: (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
  },
  substractTwoNumbers: (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
  },
  multiplyTwoNumbers: (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
  },
  divideTwoNumbers: (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
  },
  moduleTwoNumbers: (firstNumber, secondNumber) => {
    return firstNumber % secondNumber;
  },
};

const useCalculator = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case "sumar":
      return calculator.addTwoNumbers(firstNumber, secondNumber);
    case "restar":
    case "resta":
      return calculator.substractTwoNumbers(firstNumber, secondNumber);
    case "multiplicar":
      return calculator.multiplyTwoNumbers(firstNumber, secondNumber);
    case "dividir":
      return calculator.divideTwoNumbers(firstNumber, secondNumber);
    case "sacar modulo":
      return calculator.moduleTwoNumbers(firstNumber, secondNumber);
    default:
      return "Esta operación estará lista para el siguiente release";
  }
};

let resultOne = useCalculator("sumar", 3, 6);
console.log(resultOne);

let resultTwo = useCalculator("restar", 4, 9);
console.log(resultTwo);

useCalculator();

/*Buscar un string pequeño dentro de un string más grande*/
/*Cambiar todo a mayúsculas*/
/*Cambiar todo a minúsculas*/
/*Invertir el string*/
/*Contar palabras*/
/*Reemplazar un texto completo o partes de él*/
/*Concatenar strings*/
/*Cambiar de string a number ( un valor numérico )*/
