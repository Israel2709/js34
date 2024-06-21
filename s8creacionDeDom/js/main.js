console.log("hola koders!");

/*D.O.M.*/
/*Document Object Model*/

/*Método para crear un elemento*/
/*document.createElement(tagname)*/
/*Devuelve un elemento de DOM, que se considera un objeto dentro de JavaScript*/

let title = document.createElement("h1");
/*Para agregar clases a un elemento, tenemos la propiedad classList y su método "add(classname1, classname2, classnameN)"*/

title.classList.add("text-peru", "bg-dark", "mb-3");

/*Método para crear nodos de texto*/
/*document.createTextNode(text)*/
/*Devuelve un nodo de texto*/
let titleText = document.createTextNode("Hola koders!");

console.log(titleText);

/*método para inserción de DOM*/
/* parent.append(child) */

title.append(titleText);

console.log(title);

/*Métodos de selección de DOM*/

/*Selección por tagname:*/
/*document.getElementsByTagName(tagname)*/
/*permite seleccionar todos los elementos de mi documento que tengan el tagname especificado*/
/*Devuelve una HTMLCollection con todos los elementos encontrados*/

let listItems = document.getElementsByTagName("li");
console.log(listItems);
console.log(listItems[2]);

/*Selección por clase:*/
/*document.getElementsByClassName(classname)*/
/*permite seleccionar todos los elementos de mi documento que incluyan la clase indicada en su lista de clases*/
/*Devuelve una HTMLCollection con todos los elementos encontrados*/

let listGroupItems = document.getElementsByClassName("list-group-item");
console.log(listGroupItems);

/*Selección por Id:*/
/*document.getElementById(id)*/
/*permite seleccionar el elemento de DOM que tenga el id indicado*/
/*devuelve el elemento encontrado*/

let myList = document.getElementById("my-list");
console.log(myList);

/*QuerySelector*/
/*Recibe como argumento un selector válido de css, y devuelve el primer elemento que encuentre que cumpla con ese selector*/
/*document.querySelector(cssSelector)*/

let myListItem = document.querySelector("#my-list li");
console.log(myListItem);

/*querySelectorAll*/
/*Recibe como argumento un selector válido de css, y devuelve todos los elementos que cumplan con el selector*/
/*document.querySelectorAll(cssSelector)*/

let myListItems = document.querySelectorAll("#my-list li");
console.log(myListItems);

myListItems.forEach((item) => {
  console.log(item);
});

let header = document.getElementById("header");
header.append(title);
