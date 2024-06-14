/*console.log(emptyArray);

let emptyObject = {};

emptyObject[1578] = "hola";

console.log(emptyObject);

const addDynamicProperty = (propertyName, propertyValue) => {
  emptyObject[propertyName] = propertyValue;
  console.log(emptyObject);
};

addDynamicProperty("prueba", "x");
addDynamicProperty("ojo", "y");*/

let emptyArray = [];

/*arr.push(element,element...) agrega elementos al final del array*/

emptyArray.push("Isra", "Charles");
emptyArray.push("Nao");

console.log(emptyArray);

/*arr.shift() elimina el primer elemento de un array*/

emptyArray.shift();

console.log(emptyArray);

/*arr.pop() elimina el último elemento de un array */

emptyArray.pop();
console.log(emptyArray);

/*arr.unshift(element,element...) agrega elementos al principio de un array*/

emptyArray.unshift("Vero", "Leo", "Alo", "Isra");
console.log(emptyArray);

/*arr.splice(index, cantidad, elementos) permite elminar elemento(s) en una posición específica de un array, y también agregar nuevos elementos en esa misma posición*/

emptyArray.splice(3, 1);
console.log(emptyArray);

emptyArray.splice(1, 2, "Nao", "Verox", "Iván");
console.log(emptyArray);

emptyArray.splice(3, 0, "Isra");
console.log(emptyArray);
