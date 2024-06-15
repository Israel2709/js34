/*Callback*/

const pintarLaCasa = () => {
  let pintarLaCasa;
  setTimeout(() => {
    pintarLaCasa = true;
    console.log("la casa esta pintada!");
  }, 5000);
};

const construirCasa = (paso2) => {
  let ponerCimientos;
  setTimeout(() => {
    ponerCimientos = true;
    console.log("los cimientos estan construidos");
    paso2();
  }, 3000);
};

construirCasa(pintarLaCasa);

/*forEach()*/
/*Es un método iterativo de array, permite recorrer todos los elementos de una array, y ejecutar una función ( callback ) por cada elemento del array recorrido*/

/*Ejemplo:*/
/*Imprimir en consola los nombres completos de las personas de el siguiente array:*/

let people = [
  ["Juan", "Gómez", "Martínez"],
  ["Ana", "Pérez", "López"],
  ["Carlos", "Rodríguez", "García"],
  ["María", "Fernández", "Sánchez"],
  ["Luis", "Hernández", "Torres"],
];

const printFullNames = (dataArray) => {
  let result = [];
  dataArray.forEach((item, index) => {
    if (index === 3) {
      console.log("llegamos al 3er index");
    }
    let fullName = item.join(" ");
    result.push(fullName);
  });
  return result;
};

const printFullNamesWithFor = (dataArray) => {
  let result = [];
  for (let i = 0; i < dataArray.length; i++) {
    let fullName = dataArray[i].join(" ");
    result.push(fullName);
  }
  return result;
};

printFullNames(people);

const productos = [
  { nombre: "Producto 1", precio: 10, tieneOferta: true, descuento: 0.1 },
  { nombre: "Producto 2", precio: 15, tieneOferta: false, descuento: 0.2 },
  { nombre: "Producto 3", precio: 20, tieneOferta: true, descuento: 0.15 },
  { nombre: "Producto 4", precio: 25, tieneOferta: false, descuento: 0.3 },
  { nombre: "Producto 5", precio: 30, tieneOferta: true, descuento: 0.25 },
  { nombre: "Producto 6", precio: 35, tieneOferta: false, descuento: 0.4 },
  { nombre: "Producto 7", precio: 40, tieneOferta: true, descuento: 0.35 },
  { nombre: "Producto 8", precio: 45, tieneOferta: false, descuento: 0.2 },
  { nombre: "Producto 9", precio: 50, tieneOferta: true, descuento: 0.5 },
  { nombre: "Producto 10", precio: 55, tieneOferta: false, descuento: 0.1 },
  { nombre: "Producto 11", precio: 60, tieneOferta: true, descuento: 0.3 },
  { nombre: "Producto 12", precio: 65, tieneOferta: false, descuento: 0.25 },
  { nombre: "Producto 13", precio: 70, tieneOferta: true, descuento: 0.4 },
  { nombre: "Producto 14", precio: 75, tieneOferta: false, descuento: 0.35 },
  { nombre: "Producto 15", precio: 80, tieneOferta: true, descuento: 0.5 },
  { nombre: "Producto 16", precio: 85, tieneOferta: false, descuento: 0.15 },
  { nombre: "Producto 17", precio: 90, tieneOferta: true, descuento: 0.2 },
  { nombre: "Producto 18", precio: 95, tieneOferta: false, descuento: 0.3 },
  { nombre: "Producto 19", precio: 100, tieneOferta: true, descuento: 0.4 },
  { nombre: "Producto 20", precio: 105, tieneOferta: false, descuento: 0.25 },
];

const printProductsWithDiscount = (productsArray) => {
  let result = [];
  productsArray.forEach((product) => {
    if (product.tieneOferta) result.push(product);
  });
  return result;
};

console.log(printProductsWithDiscount(productos));

const createRealPriceList = (productsArray) => {
  let result = [];
  productsArray.forEach((product) => {
    let updatedProduct = {
      ...product,
      realPrice: product.precio - product.precio * product.descuento,
    };
    result.push(updatedProduct);
  });

  return result;
};

console.log(createRealPriceList(productos));

let test = myCallbackFunction("x", 3, []);

console.log(test);
