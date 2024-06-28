import { getUserByKey } from "./modules/usersApi.js";

let url = window.location.href;

//console.log(url);

let urlObject = new URL(url);

//console.log(urlObject);

let params = new URLSearchParams(urlObject.search);

//console.log(params);

let userKey = params.get("userKey");

//console.log(userKey);

const printUserDetails = async () => {
  let userData = await getUserByKey(userKey);
  let { about, abstract, name, lastname, picture } = userData;
  document.getElementById("user-picture").setAttribute("src", picture);
  document.getElementById("user-name").textContent = `${name} ${lastname}`;
  document.getElementById("user-bio").textContent = `${about}`;
  document.getElementById("user-abstract").textContent = `${abstract}`;
};

printUserDetails();
