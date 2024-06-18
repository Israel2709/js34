let numbers = [12, 45, 7, 33, 22, 14, 49, 27, 5, 38];

let people = [
  ["Juan", "Gómez", "Martínez"],
  ["Ana", "Pérez", "López"],
  ["Carlos", "Rodríguez", "García"],
  ["María", "Fernández", "Sánchez"],
  ["Luis", "Hernández", "Torres"],
];

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
  con el array numbers:
    1.- Obtener la suma total de todos los números que estan dentro del array
    2.- Necesitamos obtener una nueva lista con únicamente los números que sean pares
    3.- Necesitamos obtener una nueva lista con únicamente los números que sean nones
  
  con el array people:
    1.- Necesitamos una nueva lista con únicamente los nombres de las personas 
    2.- Necesitamos una nueva lista que tenga los nombres completos de las personas

  con el array users:
    1.- Necesito una nueva lista, que contenga únicamente los nombres completos de los usuarios
    2.- Necesito saber la edad promedio de los usuarios
    3.- Necesito poder obtener una nueva lista de los usuarios con base en su país
    4.- Necesito obtener una nueva lista con base en un hobbie ( includes )
    5.- Necesito una lista que contenga los diferentes hobbies de nuestros usuarios sin repetir
*/

const filterByCountry = (dataArray, countryToFilter) => {
  let result = [];
  for (let i = 0; i < dataArray.length; i++) {
    let user = dataArray[i]; /*{
      name: "Lucía",
      lastname: "Torres",
      age: 29,
      hobbies: ["viajar", "bailar"],
      country: "Chile",
    }*/
    if (user.country.toLowerCase() === countryToFilter.toLowerCase()) {
      result.push(user);
    }
  }
  return result;
};

const filterByContryBis = (dataArray, countryToFilter) =>
  dataArray.filter(
    (user) => user.country.toLowerCase() === countryToFilter.toLowerCase()
  );

let mexicanUsers = filterByCountry(users, "méxico");

const filterByHobbie = (dataArray, hobbyToSearch) => {
  let result = [];
  for (let i = 0; i < dataArray.length; i++) {
    let user = dataArray[i];
    let userHasHobby = user.hobbies.includes(hobbyToSearch);
    if (userHasHobby) result.push(user);
  }
  return result;
};

let pamboleros = filterByHobbie(users, "correr");

const createUniqueHobbies = (dataArray) => {
  let result = [];
  for (let i = 0; i < dataArray.length; i++) {
    /*itera en los usuarios*/
    let hobbies = dataArray[i].hobbies;
    for (let j = 0; j < hobbies.length; j++) {
      /*itera en los hobbies*/
      if (!result.includes(hobbies[j])) result.push(hobbies[j]);
    }
  }
  return result;
};

let uniqueHobbies = createUniqueHobbies(users);

let uniqueSetHobbies = (dataArray) => {
  let allHobbies = [];
  for (let i = 0; i < dataArray.length; i++) {
    let userHobbies = dataArray[i].hobbies;
    allHobbies = [...allHobbies, ...userHobbies];
  }
  uniqueHobbies = new Set([...allHobbies]);
  return uniqueHobbies;
};

let resultUniqueHobbies = uniqueSetHobbies(users);

console.log(resultUniqueHobbies);

let user = {
  name: "Lucía",
  lastname: "Torres",
  age: 29,
  hobbies: ["viajar", "bailar"],
  country: "Chile",
};

let scores = {
  html: 9,
  css: 9,
  js: 10,
};

let spreadedUser = { ...user, ...scores, isRegistered: true, generation: 34 };

console.log(spreadedUser);
