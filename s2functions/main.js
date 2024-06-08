/*Definición de la función (aquí es donde decimos qué se va a usar, qué va a pasar, y qué se entregará como resultado*/
const addTwoNumbers = (firstNumber, secondNumber) => {
  let result = firstNumber + secondNumber;
  return result;
};

/*Ejecución de la función*/
let miPrimerSuma = addTwoNumbers(2, 5);
let segundaSuma = addTwoNumbers(-3, 20);

console.log(miPrimerSuma);
console.log(segundaSuma);

/*string.length entrega la cantidad de caracteres de cualquier texto*/

const getCharCount = (elTextoQueQuieroContar) => {
  let count = elTextoQueQuieroContar.length;
  return count;
};

let firstCount = getCharCount("Kodemia!!!");

console.log(firstCount);
