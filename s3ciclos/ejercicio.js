const validateIfVowel = (character) => {
  let vowels = /[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/;
  let result = vowels.test(character);
  console.log(result);
  return result;
};

const validateIfConsonant = (character) => {
  let consonants = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/;
  let result = consonants.test(character);
  return result;
};

console.log(validateIfConsonant("b"));

let phrase =
  "En un lugar oscuro nos encontramos, y un poco más de conocimiento ilumina nuestro camino.";

const countVowelsOfPhrase = (phraseToCount) => {
  let phraseLength = phraseToCount.length;
  let count = 0;
  for (let i = 0; i < phraseLength; i++) {
    let charToCheck = phraseToCount[i];
    let isVowel = validateIfVowel(charToCheck);
    if (isVowel) {
      count++;
    }
  }
  let result = `La frase tiene ${count} vocales.`;
  return result;
};

const countConsonantsOfPhrase = (phraseToCount) => {
  let phraseLength = phraseToCount.length;
  let count = 0;
  for (let i = 0; i < phraseLength; i++) {
    let charToCheck = phraseToCount[i];
    let isConsonant = validateIfConsonant(charToCheck);
    if (isConsonant) {
      count++;
    }
  }
  let result = `La frase tiene ${count} consonantes.`;
  return result;
};

console.log(countConsonantsOfPhrase(phrase));

/[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/gi / [aeiouáéíóú] / i;
