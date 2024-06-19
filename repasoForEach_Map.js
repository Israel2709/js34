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

/*
    Imprimir en consola los nombres completos de mis usuarios
*/

const printFullNames = (usersArray) => {
  usersArray.forEach(
    (item) => {
      let fullname = `${item.name} ${item.lastname}`;
      console.log(fullname);
    } /*este es el único argumento de forEach() (el callback)*/
  );
};

printFullNames(users);

/*
  crear una nueva lista que contenga únicamente los nombres completos de todos los usuarios
*/

const getFullNames = (usersArray) => {
  let result = usersArray.map((item, index, array) => {
    let fullname = `${item.name} ${item.lastname}`;
    return fullname;
  });
  return result;
};

const getFullNamesPro = (usersArray) =>
  usersArray.map(({ name, lastname }) => `${name} ${lastname}`);

let fullnamesList = getFullNames(users);

console.log(fullnamesList);

let matrix = [
  [1, [6, 7]],
  [3, 4],
];

let flatArray = [];
matrix.forEach((innerArray) => {
  flatArray = [...flatArray, ...innerArray];
});
