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

/*Obtener una lista de strings con la siguiente forma:
    `Hola, soy {nombre_completo}, tengo {edad} años, y vengo de {país}. TQM :3 .*/

const conFor = (usersArray) => {
  let result = [];
  for (let i = 0; i < usersArray.length; i++) {
    let nombreCompleto = `${usersArray[i].name} ${usersArray[i].lastname}`;
    let edad = usersArray[i].age;
    let country = usersArray[i].country;
    let text = `Hola, soy ${nombreCompleto}, tengo ${edad} años, y vengo de ${country}. TQM :3 .`;
    result.push(text);
  }
  return result;
};

let resultConFor = conFor(users);
console.log(resultConFor);

const conForEach = (usersArray) => {
  let result = [];
  usersArray.forEach((user) => {
    let nombreCompleto = `${user.name} ${user.lastname}`;
    let edad = user.age;
    let country = user.country;
    let text = `Hola, soy ${nombreCompleto}, tengo ${edad} años, y vengo de ${country}. TQM :3 .`;
    result.push(text);
  });
  return result;
};

let resultConForEach = conForEach(users);
console.log(resultConForEach);

const conMap = (usersArray) => {
  return usersArray.map((user) => {
    let nombreCompleto = `${user.name} ${user.lastname}`;
    let edad = user.age;
    let country = user.country;
    let text = `Hola, soy ${nombreCompleto}, tengo ${edad} años, y vengo de ${country}. TQM :3 .`;
    return text;
  });
};

let resultConMap = conMap(users);
console.log(resultConMap);

/*user = {
    name: "Lucía",
    lastname: "Torres",
    age: 29,
    hobbies: ["viajar", "bailar"],
    country: "Chile",
  }*/

const proConMap = (usersArray) =>
  usersArray.map(
    ({ name, lastname, age, country }) =>
      `Hola, soy ${name} ${lastname}, tengo ${age} años, y vengo de ${country}. TQM :3 .`
  );

let resultProConMap = proConMap(users);
console.log(resultProConMap);

const filterByCountry = (dataArray, country) => {
  let result = dataArray.filter((user) => {
    return user.country === country;
  });
  return result;
};

const jediFilterByCountry = (dataArray, country) =>
  dataArray.filter((user) => user.country === country);
