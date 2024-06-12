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

/*
    sumar dos numeros
    restar dos numeros
    multiplicar dos numeros
    divir dos numeros
    saber si un numero es par
    */

const checkIfNumberIsOddOrEven = (numberToCheck) => {
  let numberModulus = numberToCheck % 2;
  if (numberModulus === 0) {
    return "El número es par";
  } else {
    return "El número es impar";
  }
};

/*Condicionales*/

/*If / else if / else: sirve para evaluar condiciones complejas de JavaScript, y poder generar múltiples resultados con base en el resultado de la evaluación*/

//frutas, vegetales, carne

/*los niños son de menos de 15 años
  los adultos son de 15 a 50 años
  los adultos mayores son de 50 años en adelante
*/

const checkAge = (age) => {
  if (age < 15) {
    return "Aún eres un niño";
  } else if (age > 15 && age < 50) {
    return "Ya eres un adulto";
  } else {
    return "ahora eres un venerable adulto mayor";
  }
};

let ageResultOne = checkAge(65);
console.log(ageResultOne);

/*Switch: Me permite generar diferentes resultados para los distintos valores de una expresión de JavaScript*/

/*switch(expression){
  case a:
    ...do Something
    break;
  case b:
    ...do Something
    break;
  case c:
    ...do Something
    break;
  ....
  default:
    ...do Something
    break;
}*/

/* Tengo una bolsa con canicas, y se reparten entre 3 personas
      Las canicas rojas son para Pedro
      Las canicas azules son para Pablo
      LAs canicas amarillas son para Paco
      Las canicas de cualquier otro color se regresan a la bolsa
      */

const assingMarblesByColor = (marbleColor) => {
  let owner;
  switch (marbleColor) {
    case "rojo":
      owner = "esta canica es de pedro";
      break;
    case "azul":
      owner = "esta canica es de pablo";
      break;
    case "amarillo":
      owner = "esta canica es de paco";
      break;
    default:
      owner = "esta canica no tendrá dueño";
      break;
  }
  return owner;
};

let marbleOne = assingMarblesByColor("rojo");
let marbleTwo = assingMarblesByColor("peru");

console.log(marbleOne);
console.log(marbleTwo);

/*
  1.- Necesitamos poder evaluar cualquier frase, y determinar si es una frase corta o es una frase larga, teniendo en cuenta que una frase corta tiene menos de 20 letras y una larga tiene 20 letras o más



  2.- Necesitamos organizar jugadores con base en el color de su uniforme, 
      si el uniforme es gris, pertenecen al equipo 1
      si es negro, pertenecen al equipo 2
      si es azul, pertenecen al equipo 3
      cualquier otro color no tiene equipo ( no juega)


      
  3.- Tenemos un juego en el que se usan dos dados, y las reglas son las siguientes:
    - El juego se gana si se obtiene alguno de los siguientes puntajes:
          7, 11, 3
    - Se obtiene una tirada extra con las siguientes condiciones:
      --Obteniendo dos números iguales
      --Obteniendo un número divisible entre 3, pero que no sea 3
*/

const diceGame = (firstDiceValue, secondDiceValue) => {
  let puntaje = firstDiceValue + secondDiceValue;
  let result;
  switch (puntaje) {
    case 3:
    case 7:
    case 11:
      result = "Ganaste!!!";
      break;
  }

  if (
    firstDiceValue === secondDiceValue ||
    (puntaje % 3 === 0 && puntaje !== 3)
  ) {
    result = "Tienes otra oportunidad!";
  } else {
    let newDice = addAnotherDice();
  }

  return result;
};

const addAnotherDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};
diceGame(2, 3);
