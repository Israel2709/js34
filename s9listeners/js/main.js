/*listeners*/
/* element.addEventListener(event,callback)*/

let myButton = document.getElementById("my-button");
let myWorkArea = document.getElementById("my-work-area");
let sampleTitle = document.getElementById("sample-title");

myButton.addEventListener("click", (event) => {
  console.log(event);
  myWorkArea.classList.contains("animated")
    ? (myButton.textContent = "Start animation")
    : (myButton.textContent = "Stop animation");
  myWorkArea.classList.toggle("animated");
});

let myInput = document.getElementById("my-input");

myInput.addEventListener("keyup", (event) => {
  console.log(event);
  console.log(
    event.target
  ); /*esto hace referencia al elemento al que le esta sucediendo el evento*/
  console.log(event.target.value);
  let value = event.target.value;
  sampleTitle.textContent = value;
});

/*----simulación del post----*/

/*Seleccionamos todos los campos*/
let postFields = document.querySelectorAll("#post-form .post-field");

console.log(postFields);

/*
    {
        propiedad:valor
        propiedad:valor
    }

    {
        title:"el título",
        content:"el contenido",
        cover:"url"
    }
*/

/*Esta función modifica la card que está en nuestro HTML*/
const updatePreview = (entryData) => {
  /*Recibe como argumento entryData, que representa el objeto de nuestra entrada de blog*/

  /*Extraemos los valores de title, content, cover, que usaremos para modificar nuestro HTML*/
  let { title, content, cover } = entryData;

  /*Seleccionamos los elementos de html que vamos a modificar. Estos elementos se encuentran en el index.html*/
  let coverElement = document.getElementById("entry-cover"); /*la imagen*/
  let titleElement = document.getElementById("entry-title"); /*el título*/
  let contentElement =
    document.getElementById("entry-content"); /*el contenido*/

  /*cambiamos el contenido de cada elemento, usando lo que tenemos en entryData*/
  coverElement.setAttribute("src", cover);
  titleElement.textContent = title;
  contentElement.textContent = content;
};

/*Creamos un objeto vacío que representa nuestra entrada de blog*/
let entryObject = {};

/*a cada campo le agregamos un listener*/
postFields.forEach((field) => {
  field.addEventListener("keyup", (event) => {
    /*De cada campo, extraeos loq ue tiene escrito, y su nombre, lo que tiene escrito representa el valor de la propiedad, y el nombre del campo representa la propiedad que queremos crear en el  objeto*/
    let value = event.target.value;
    let property = event.target.name;

    console.log("property: ", property);
    console.log("value: ", value);

    /*Asingamos la propiedad y su valor al objeto*/
    entryObject[property] = value;
    console.log("entryObject: ", entryObject);

    /*usamos el objeto actualizado, para modificar la vista previa de nuestra entrada de blog ( ver la función updatePreview que esta más arriba)*/
    updatePreview(entryObject);
  });
});
