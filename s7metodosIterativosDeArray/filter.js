/*.filter()*/
/*Es un método iterativo de array, recorre cada elemento de un array, le aplica una función de discriminación, y devuelve un nuevo array con únicamente aquellos elementos que hayan superado la prueba de discriminación*/
/* sintaxis:
    array.filter(callback)

    el callback recibe 3 argumnentos: item, index, array
*/

let marbles = [
  {
    color: "red",
    size: "small",
  },
  {
    color: "blue",
    size: "medium",
  },
  {
    color: "yellow",
    size: "large",
  },
  {
    color: "yellow",
    size: "medium",
  },
  {
    color: "blue",
    size: "small",
  },
];

/*
    Obtener una nueva lista con las canicas cuyo color sea amarillo
*/

const getMarblesByColor = (marblesList, queriedColor) => {
  let result = marblesList.filter((marble) => {
    return marble.color === queriedColor;
  });
  return result;
};

let yellowMarbles = getMarblesByColor(marbles, "yellow");
console.log(yellowMarbles);

const getMarblesBySize = (marblesList, queriedSize) => {
  let result = marblesList.filter((marble) => {
    return marble.size === queriedSize; /*discriminante*/
  });

  return result;
};

let smallMarbles = getMarblesBySize(marbles, "small");
console.log(smallMarbles);
