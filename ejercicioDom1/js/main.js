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

let namesAndAges = users.map(
  ({ name, lastname, age }) => `${name} ${lastname} - ${age} años`
);

let uniqueCountries = users.reduce(
  (accum, current) =>
    accum.includes(current.country) ? accum : [...accum, current.country],
  []
);

const createListItem = (text) => {
  let listItem = document.createElement("li");
  let listItemText = document.createTextNode(text);
  listItem.classList.add("list-group-item");

  listItem.append(listItemText);
  return listItem;
};

const printList = (dataToPrint, listId) => {
  let listElement = document.getElementById(listId);
  dataToPrint.forEach((item) => {
    let listItem = createListItem(item);
    listElement.append(listItem);
  });
};

const uniqueHobbies = users.map((user) => user.hobbies.join(","));

console.log(uniqueHobbies);

printList(namesAndAges, "users-list");
printList(uniqueCountries, "countries-list");
printList(uniqueHobbies, "hobbies-list");
