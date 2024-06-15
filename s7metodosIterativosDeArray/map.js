/*.map()*/
/*Método iterativo de array, itera en un array, ejecuta un callback por cada elemento del array, y devuelve un nuevo array, con LA MISMA CANTIDAD DE ELEMENTOS QUE EL ARRAY ORIGINAL. Cada uno de los elementos del nuevo array será el resultado del valor de retorno del callback*/

/*Sintaxis: array.map( callback ) */
/*Map devuelve un array*/
/* callback recibe 3 argumentos: item, index, array*/

/*Ejemplo:*/

let names = ["isra", "charles"];

//obtener una nueva lista con los nombres en mayúsculas

const capitalizeNames = (namesArray) => {
  let result = namesArray.map((name) => {
    return name.toUpperCase();
  });
  return result;
};

console.log(capitalizeNames(names));

let users = [
  {
    name: "Juan",
    lastname: "Pérez",
    age: 25,
    hobbies: ["leer", "correr"],
    country: "México",
  },
  {
    name: "Ana",
    lastname: "García",
    age: 30,
    hobbies: ["viajar", "pintar", "nadar"],
    country: "Argentina",
  },
  {
    name: "Carlos",
    lastname: "López",
    age: 45,
    hobbies: ["cantar"],
    country: "Chile",
  },
  {
    name: "María",
    lastname: "Fernández",
    age: 22,
    hobbies: ["leer", "correr", "bailar"],
    country: "Colombia",
  },
  {
    name: "Luis",
    lastname: "Gómez",
    age: 35,
    hobbies: ["jugar fútbol", "viajar"],
    country: "México",
  },
  {
    name: "Sofía",
    lastname: "Rodríguez",
    age: 28,
    hobbies: ["cocinar", "leer"],
    country: "Chile",
  },
  {
    name: "José",
    lastname: "Sánchez",
    age: 40,
    hobbies: ["nadar", "escribir"],
    country: "Argentina",
  },
  {
    name: "Laura",
    lastname: "Martínez",
    age: 26,
    hobbies: ["pintar", "cantar"],
    country: "México",
  },
  {
    name: "Miguel",
    lastname: "Hernández",
    age: 33,
    hobbies: ["correr", "jugar fútbol"],
    country: "Colombia",
  },
  {
    name: "Lucía",
    lastname: "Torres",
    age: 29,
    hobbies: ["viajar", "bailar"],
    country: "Chile",
  },
];

//obtener una nueva lista con únicamente los nombres completos de las personas

const getFullNames = (usersArray) => {
  let result = usersArray.map((user) => {
    let fullName = `${user.name} ${user.lastname}`;
    fullName;
    return fullName;
  });
  return result;
};

console.log(getFullNames(users));

//obtener una lista con la cantidad de caracteres que tiene el nombre completo de cada usuario

const countFullNamesChars = (
  fullnamesArray /*recibe un array de nombres completos*/
) => {
  let result = fullnamesArray.map((name) => {
    return name.length;
  });
  return result;
};

let count = countFullNamesChars(getFullNames(users));
console.log(count);

const myCallbackFunction = (user, userIndex, originalArray) => {
  return { ...user, mapped: true };
};

users.map(myCallbackFunction);

const myFunction = () => {
  let x = myCallbackFunction("x", 1, []);
};
