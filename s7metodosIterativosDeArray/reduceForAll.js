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

/* Imprimir en consola los nombres completos de todos los usuarios*/

const printFullNames = (usersArray) => {
  usersArray.reduce((accum, current) => {
    console.log(`${current.name} ${current.lastname}`);
  });
};

printFullNames(users);

/*Obtener una lista con los nombres completos de todos los usuarios*/

const getFullNamesList = (usersArray) => {
  let result = usersArray.reduce((accum, current) => {
    let fullName = `${current.name} ${current.lastname}`;
    return [...accum, fullName];
  }, []);
  return result;
};

let fullnames = getFullNamesList(users);
console.log(fullnames);

/*Obtener una nueva lista con los usuarios que tengan más de 25 años*/

const getUsersGreaterThanAge = (usersArray, queriedAge) => {
  let result = usersArray.reduce((accum, current) => {
    return current.age > queriedAge ? [...accum, current] : accum;
  }, []);
  return result;
};

let greaterThan25 = getUsersGreaterThanAge(users, 25);
console.log(greaterThan25);

/*Obtener la edad promedio de los usaurios*/

const getAverageAge = (usersArray) => {
  let averageAge = usersArray.reduce((accum, current, _, array) => {
    return accum + current.age / array.length;
  }, 0);
  return averageAge;
};

let averageAge = getAverageAge(users);
console.log(averageAge);

/*Quiero saber cuántos usuarios tienen un hobbie específico ( ejemplo: cantar)*/

const getHobbieCount = (usersArray, queriedHobbie) => {
  let result = usersArray.reduce((accum, current) => {
    return current.hobbies.includes(queriedHobbie) ? accum + 1 : accum;
  }, 0);
  return result;
};

let singers = getHobbieCount(users, "cantar");

console.log(singers);

/*
convertir el array users en un objeto con la siguiente estructura:
let result = {
    cantar:[
        {
            name: "Laura",
            lastname: "Martínez",
            age: 26,
            hobbies: ["pintar", "cantar"],
            country: "México",
        },{
            name: "Carlos",
            lastname: "López",
            age: 45,
            hobbies: ["cantar"],
            country: "Chile",
        }

    ],
    bailar:[
        {
            users a los que les gusta bailar
        },
        
    ],
    viajar:[
        {users a los que les gusta viajar}
    ]
}*/

const reorderInfo = (usersArray) => {
  let result = usersArray.reduce((accum, current) => {
    let hobbies = current.hobbies;
    hobbies.forEach((hobbie) => {
      accum[hobbie]
        ? (accum[hobbie] = [...accum[hobbie], current])
        : (accum[hobbie] = [current]);
    });
    return accum;
  }, {});
  return result;
};

let reorderedInfo = reorderInfo(users);

console.log(reorderedInfo);
