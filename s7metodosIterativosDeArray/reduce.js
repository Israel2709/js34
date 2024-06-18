/* .reduce()*/
/* Es un método iterativo de array, que recorre todos los elementos de un array, aplica una función de reducción, y entrega como resultado un único valor*/

/* Sintaxis:
    array.reduce(callback,valorInicial)

    el callback de reduce recibe 4 argumentos:
        acumulador => representa el lugar donde iré almacenando los resultados de el valor final

        current => representa el elemento en cada iteración ( equivalente a "item")
        index
        array
*/

const numbers = [11, 28, 13, 2, 8, 15];

const getTotalValue = (numbersArray) => {
  let result = numbersArray.reduce((accum, current, index, array) => {
    return accum + current;
  }, 0);
  return result;
};

//console.log(getTotalValue(numbers));

/*Obtener la sumatoria total de únicamente los números pares del array "numbers"*/

const getEvensTotal = (numbersArray) => {
  let evens = numbersArray.filter((number) => number % 2 === 0);
  let total = 0;
  evens.forEach((number) => (total += number));
  return total;
};

const getEvensTotalReduce = (numbersArray) => {
  let total = numbersArray.reduce((accum, current) => {
    return current % 2 === 0 ? accum + current : accum;
  }, 0);
  return total;
};

const getEvensTotalReducePro = (numbersArray) =>
  numbersArray.reduce(
    (accum, current) => (current % 2 === 0 ? accum + current : accum),
    0
  );

const testEvensTotal = getEvensTotalReduce(numbers);
console.log(testEvensTotal);
