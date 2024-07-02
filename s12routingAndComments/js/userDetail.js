import { addCommentToUser, getUserByKey } from "./modules/usersApi.js";

let url = window.location.href;

//console.log(url);

let urlObject = new URL(url);

//console.log(urlObject);

let params = new URLSearchParams(urlObject.search);

//console.log(params);

let userKey = params.get("userKey");

//console.log(userKey);

let kudosArray;

const printUserDetails = async () => {
  let userData = await getUserByKey(userKey);
  let { about, abstract, name, lastname, picture, kudos } = userData;
  console.log(kudos);
  if (kudos) {
    kudosArray = Object.keys(kudos).map((key) => ({ ...kudos[key], key }));
    let kudosHtml = kudosArray.reduce((accum, current) => {
      return accum + `<li class="list-group-item">${current.content}</li>`;
    }, ``);
    console.log(kudosHtml);
    document.getElementById("kudos-wrapper").innerHTML = kudosHtml;
  }
  document.getElementById("user-picture").setAttribute("src", picture);
  document.getElementById("user-name").textContent = `${name} ${lastname}`;
  document.getElementById("user-bio").textContent = `${about}`;
  document.getElementById("user-abstract").textContent = `${abstract}`;
};

let kudoField = document.getElementById("kudo-field");
let kudoContent = "";
kudoField.addEventListener("keyup", ({ target }) => {
  let value = target.value;
  console.log(value);
  kudoContent = value;
});

let saveKudoBtn = document.getElementById("save-kudo-btn");
saveKudoBtn.addEventListener("click", async () => {
  let response = await addCommentToUser(userKey, { content: kudoContent });
  console.log(response);
  printUserDetails();
});

printUserDetails();
