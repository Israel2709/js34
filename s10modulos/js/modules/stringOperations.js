const convertToUpperCase = (text) => text.toUpperCase();
const countWords = (text) => text.split(" ").length;
const replaceInText = (text, query, replacement) =>
  text.replace(query, replacement);

export { convertToUpperCase, countWords, replaceInText };
