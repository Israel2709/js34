/*Replace*/
/* string.replace(value, replacement)*/

let phrase =
  "Listo está, para enseñar a un aprendiz. Dejar ir a su alumno, un mayor reto será.";

let replacedPhrase = phrase.replace(/s/g, "x");

console.log(replacedPhrase);
console.log(phrase);

/*toUpperCase*/
/* string.toUpperCase()*/
let uppercasedPhrase = phrase.toUpperCase();
console.log(uppercasedPhrase);

/*split*/
/* string.split(separador, límite)*/

let separatedByWords = phrase.split(" ");
console.log(separatedByWords);
console.log(separatedByWords.length);

let myArray = ["a", "b", "c"];

console.log(myArray.join(" "));

let name = "israel Salinas martínez";

/*
separar el nombre en palabras
extraer la letra inicial de cada palabra y anotarla
después de extraer cada letra, juntarlas en un solo string
devolver ese string como resultado
*/

const getInitials = (fullName) => {
  let result = "";
  let splittedName = fullName.split(" ");

  for (let i = 0; i < splittedName.length; i++) {
    let word = splittedName[i]; /*Israel || Salians || Martinez*/
    let initial = word.charAt(0);
    result += initial.toUpperCase();
  }
  return result;
};

console.log(getInitials(name));
