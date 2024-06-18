/*--- deconstrucción----*/
let product = {
  name: "Jabón",
  description: "Jabón líquido",
  price: 4.99,
  discount: 0.1,
  category: "hogar",
  stock: 70,
};

let { name, description, price, shortDescription } = product;
/*
  let name = product.name;
  let description = product.description;
  let price = product.price;
  */
console.log(name, description, price, shortDescription);

/*----construcción----*/
let raza = "Callermann";
let edad = 4;
let nombre = "Firu";

let perro = { raza: raza || "pitbull", edad, nombre, duenio: duenio || null };

console.log(perro);

/* raza = raza || breed || "pitbull" => asignación de corto circuito (short circuit assignment) => asigna los valores dependiendo de la existencia del valor previo, es decir, si raza no existe, asignará "pitbull"*/
