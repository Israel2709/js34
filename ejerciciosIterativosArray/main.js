const productos = [
  {
    id: 1,
    name: "Camiseta de algodón",
    description:
      "Camiseta de algodón suave, perfecta para usar en cualquier ocasión. Disponible en varios colores y tallas, combina fácilmente con diferentes estilos. Ideal para el uso diario gracias a su comodidad y durabilidad.",
    priceMXN: 10.99,
    discount: 0.1,
    category: "ropa",
    stock: 50,
  },
  {
    id: 2,
    name: "Pantalones vaqueros",
    description:
      "Pantalones vaqueros de alta calidad, diseñados para ofrecer comodidad y estilo. Su tela resistente garantiza durabilidad, mientras que su corte clásico se adapta a diversas ocasiones. Perfectos para el día a día o eventos casuales.",
    priceMXN: 25.99,
    discount: null,
    category: "ropa",
    stock: 40,
  },
  {
    id: 3,
    name: "Suéter de lana",
    description:
      "Suéter de lana cálido y acogedor, ideal para mantenerte abrigado durante el invierno. Con un diseño elegante y moderno, este suéter es perfecto para cualquier evento casual o formal. Disponible en varias tallas y colores.",
    priceMXN: 30.49,
    discount: 0.15,
    category: "ropa",
    stock: 30,
  },
  {
    id: 4,
    name: "Zapatos deportivos",
    description:
      "Zapatos deportivos diseñados para proporcionar comodidad y soporte durante tus entrenamientos. Fabricados con materiales de alta calidad, estos zapatos son ideales para correr, caminar o cualquier actividad física.",
    priceMXN: 45.99,
    discount: 0.2,
    category: "ropa",
    stock: 20,
  },
  {
    id: 5,
    name: "Alfombra decorativa",
    description:
      "Alfombra decorativa que añade un toque de elegancia a cualquier habitación. Con un diseño moderno y materiales duraderos, esta alfombra es perfecta para salas de estar, dormitorios u oficinas. Fácil de limpiar y mantener.",
    priceMXN: 50.0,
    discount: 0.1,
    category: "hogar",
    stock: 10,
  },
  {
    id: 6,
    name: "Sofá de tres plazas",
    description:
      "Sofá de tres plazas con un diseño moderno y cómodo. Fabricado con materiales de alta calidad para garantizar durabilidad y confort. Ideal para salas de estar, proporcionando un espacio perfecto para relajarse.",
    priceMXN: 299.99,
    discount: null,
    category: "hogar",
    stock: 5,
  },
  {
    id: 7,
    name: "Lámpara de mesa",
    description:
      "Lámpara de mesa con un diseño elegante y funcional. Perfecta para iluminar cualquier espacio, ya sea en la oficina o en el hogar. Fabricada con materiales de alta calidad para garantizar durabilidad y eficiencia.",
    priceMXN: 15.99,
    discount: 0.05,
    category: "hogar",
    stock: 25,
  },
  {
    id: 8,
    name: "Cojín suave",
    description:
      "Cojín suave y cómodo, ideal para decorar tu sala de estar o dormitorio. Disponible en varios colores y diseños para combinar con tu decoración. Fabricado con materiales de alta calidad para mayor durabilidad.",
    priceMXN: 9.99,
    discount: 0.1,
    category: "hogar",
    stock: 30,
  },
  {
    id: 9,
    name: "Comida para perro",
    description:
      "Croquetas para perro elaboradas con ingredientes de alta calidad para garantizar una dieta equilibrada y nutritiva. A tu mascota le encantarán. Disponible en varios tamaños para satisfacer las necesidades de perros de todas las razas.",
    priceMXN: 20.0,
    discount: null,
    category: "mascotas",
    stock: 50,
  },
  {
    id: 10,
    name: "Juguete para gato",
    description:
      "Ratoncito de juguete para gatos, diseñado para mantener a tu felino entretenido y activo. Fabricado con materiales seguros y duraderos, este juguete es perfecto para estimular el instinto de caza de tu mascota.",
    priceMXN: 5.99,
    discount: 0.05,
    category: "mascotas",
    stock: 40,
  },
  {
    id: 11,
    name: "Rascador para gato",
    description:
      "Rascador para gatos, ideal para mantener las garras de tu felino en perfecto estado. Fabricado con materiales duraderos, este rascador es una excelente opción para proteger tus muebles y proporcionar diversión a tu gato.",
    priceMXN: 25.99,
    discount: 0.1,
    category: "mascotas",
    stock: 15,
  },
  {
    id: 12,
    name: "Collar para perro",
    description:
      "Collar ajustable para perro, diseñado para ofrecer comodidad y seguridad. Disponible en varios tamaños y colores, este collar es perfecto para pasear a tu mascota con estilo. Fabricado con materiales resistentes y duraderos.",
    priceMXN: 10.49,
    discount: null,
    category: "mascotas",
    stock: 35,
  },
  {
    id: 13,
    name: "Paquete de arroz",
    description:
      "Paquete de arroz de alta calidad, ideal para preparar una variedad de platos deliciosos. Este arroz es fácil de cocinar y siempre ofrece una textura perfecta. Disponible en diferentes presentaciones para satisfacer tus necesidades.",
    priceMXN: 2.99,
    discount: 0.1,
    category: "alimentos",
    stock: 100,
  },
  {
    id: 14,
    name: "Leche descremada",
    description:
      "Leche descremada de alta calidad, perfecta para toda la familia. Ideal para consumir en el desayuno, con café o en recetas. Envasada para garantizar frescura y sabor, esta leche es una excelente opción para una dieta equilibrada.",
    priceMXN: 1.99,
    discount: 0.05,
    category: "alimentos",
    stock: 80,
  },
  {
    id: 15,
    name: "Pan integral",
    description:
      "Pan integral, ideal para un desayuno o merienda saludable. Hecho con ingredientes naturales para ofrecer un sabor delicioso y una textura esponjosa. Perfecto para acompañar tus comidas diarias.",
    priceMXN: 1.49,
    discount: null,
    category: "alimentos",
    stock: 60,
  },
  {
    id: 16,
    name: "Queso cheddar",
    description:
      "Queso cheddar de alta calidad, perfecto para una variedad de platos. Con su sabor intenso y textura suave, este queso es ideal para sandwiches, ensaladas y mucho más. Disponible en varias presentaciones.",
    priceMXN: 3.99,
    discount: 0.2,
    category: "alimentos",
    stock: 50,
  },
  {
    id: 17,
    name: "Jabón líquido",
    description:
      "Jabón líquido con un agradable aroma, ideal para el uso diario. Su fórmula suave y efectiva limpia y protege tu piel, dejándola fresca y suave. Perfecto para toda la familia.",
    priceMXN: 4.99,
    discount: 0.1,
    category: "hogar",
    stock: 70,
  },
  {
    id: 18,
    name: "Toalla de baño",
    description:
      "Toalla de baño de alta calidad, suave y absorbente. Disponible en varios colores, esta toalla es perfecta para usar en casa o llevar al gimnasio. Fabricada con materiales duraderos para mayor confort.",
    priceMXN: 12.99,
    discount: null,
    category: "hogar",
    stock: 30,
  },
  {
    id: 19,
    name: "Camiseta deportiva",
    description:
      "Camiseta para correr, diseñada para ofrecer confort y rendimiento. Fabricada con materiales transpirables y ligeros, esta camiseta es perfecta para tus entrenamientos y actividades al aire libre. Disponible en varios colores y tallas.",
    priceMXN: 15.99,
    discount: 0.15,
    category: "ropa",
    stock: 45,
  },
  {
    id: 20,
    name: "Bufanda de lana",
    description:
      "Bufanda de lana, ideal para mantenerte abrigado durante el invierno. Con su diseño elegante y variedad de colores, esta bufanda es perfecta para complementar tu outfit y protegerte del frío. Suave y cómoda.",
    priceMXN: 8.99,
    discount: 0.1,
    category: "ropa",
    stock: 25,
  },
];

let exchangeRates = {
  dollar: 0.052,
  euro: 0.046,
  pound: 0.039,
};

/*Considerando el array products, resolver los siguientes ejercicios aplicando el método que sea más adecuado ( forEach || map || filter || reduce )*/

/*
  1.- Por cada producto, mostrar en consola el nombre del producto y su costo:
    "El producto {nombre} tiene un costo de {precio}"
*/

const printNamesAndPrices = (productsArray) => {
  productsArray.forEach(({ name, priceMXN }) =>
    console.log(`El producto ${name} tiene un costo de ${priceMXN}`)
  );
};

printNamesAndPrices(productos);

/*
  2.- Crear una nueva lista que contenga todos los productos, con el precio convertido a otra moneda ( dollar | euro | pound ), usar el objeto exchangeRates para la conversión
*/

const applyExchangeRate = (productsArray, currency) => {
  let result = productsArray.map((product) => ({
    ...product,
    [`priceIn${currency}`]: Number(
      (product.priceMXN * exchangeRates[currency]).toFixed(2)
    ),
  }));
  return result;
};

let pricesInDollar = applyExchangeRate(productos, "dollar");
console.log(pricesInDollar);

let pricesInEuro = applyExchangeRate(productos, "euro");
console.log(pricesInEuro);

let pricesInPound = applyExchangeRate(productos, "pound");
console.log(pricesInPound);

/*
    3.- Obtener el costo promedio de los objetos de la lista (en mxn)
*/
const getAveragePrice = (productsArray) =>
  productsArray.reduce(
    (accum, current) => accum + current.priceMXN / productsArray.length,
    0
  );

let averagePrice = getAveragePrice(productos);
console.log(averagePrice);

/*
    4.- Obtener una nueva lista con aquellos productos cuyo precio sea mayor al promedio (en mxn)
*/
const getExpensiveProducts = (productsArray, averagePrice) =>
  productsArray.filter(({ priceMXN }) => priceMXN > averagePrice);

let expensiveProducts = getExpensiveProducts(
  productos,
  getAveragePrice(productos)
);

console.log(expensiveProducts);
/*
    5.- Obtener una lista de las categorías de los productos sin repetir
*/

const getCategoriesList = (productsArray) => {
  let result = productsArray.reduce((accum, current) => {
    let category = current.category;
    return accum.includes(category) ? accum : [...accum, category];
  }, []);
  return result;
};

let categoriesList = getCategoriesList(productos);

console.log(categoriesList);
/*
    6.- Obtener una lista con todos los productos, agregándoles la propiedad shortDescription ( shortDescription debe ser igual a las primeras 5 palabras de description más '...' al final)
        shortDescription: 'Bufanda de lana, ideal para...'
*/
const addShortDescription = (productArray) =>
  productArray.map((product) => {
    let modifiedProduct = {
      ...product,
      shortDescription: `${product.description.split(" ", 5).join(" ")}...`,
    };
    delete modifiedProduct.description;
    return modifiedProduct;
  });

let productsWithShortDescription = addShortDescription(productos);
console.log(productsWithShortDescription);
/*
    7.- Obtener una lista que contenga todos los productos con el precio real en MXN ( el precio real es igual al precio de lista menos el descuento, considerar los casos en que los productos no tienen descuento)
*/

const applyDiscount = (productArray) =>
  productArray.map((product) =>
    product.discount /*El producto tiene descuento?*/
      ? {
          ...product,
          realPrice: product.priceMXN - product.priceMXN * product.discount,
        }
      : product
  );

let productsWithAppliedDiscount = applyDiscount(productos);
console.log(productsWithAppliedDiscount);

/*
    8.- obtener un producto con base en su id
*/

const getProductById = (productsArray, productId) =>
  productsArray.find(({ id }) => id === productId);

let testProduct = getProductById(productos, 2);
console.log(testProduct);

/*
    9.- Obtener la cantidad de dinero (mxn) que se necesitaría para comprar al menos una pieza de cada producto de la lista
*/

const getTotalCost = (productsArray) =>
  productsArray.reduce((accum, { priceMXN }) => accum + priceMXN, 0);

let totalCost = getTotalCost(productos);
console.log(totalCost);

/*
  10.- Obtener una lista de productos con base en su categoría
*/

const getProductsByCategory = (productsArray, queriedCategory) =>
  productsArray.filter(({ category }) => category === queriedCategory);

let homeProducts = getProductsByCategory(productos, "hogar");
console.log(homeProducts);
