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

const updatePreview = (entryData) => {
  let { title, content, cover } = entryData;
  let coverElement = document.getElementById("entry-cover");
  let titleElement = document.getElementById("entry-title");
  let contentElement = document.getElementById("entry-content");
  coverElement.setAttribute("src", cover);
  titleElement.textContent = title;
  contentElement.textContent = content;
};

let entryObject = {};

postFields.forEach((field) => {
  field.addEventListener("keyup", (event) => {
    let value = event.target.value;
    let property = event.target.name;
    console.log("property: ", property);
    console.log("value: ", value);
    entryObject[property] = value;
    console.log("entryObject: ", entryObject);
    updatePreview(entryObject);
  });
});
