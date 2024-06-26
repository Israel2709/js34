import {
  createSocialButton,
  createUserCard,
  createNavbar,
} from "./modules/domComponents.js";

let navWrapper = document.getElementById("nav-wrapper");
navWrapper.append(createNavbar(["home", "contact", "detail"]));

let usersArray = [];
let userObject = {};

let generalInfoFields = document.querySelectorAll(
  "#user-form input.user-general-info"
);

let socialFields = document.querySelectorAll("#user-form .user-socials");

let saveUserBtn = document.getElementById("save-user-btn");

generalInfoFields.forEach((field) => {
  field.addEventListener("keyup", (event) => {
    let property = event.target.name;
    let value = event.target.value;
    userObject[property] = value;
    console.log(usersArray);
  });
});

socialFields.forEach((field) => {
  field.addEventListener("keyup", (event) => {
    let property = event.target.name;
    let value = event.target.value;
    userObject.socials
      ? (userObject.socials[property] = value)
      : (userObject.socials = { [property]: value });
    console.log(usersArray);
  });
});

saveUserBtn.addEventListener("click", () => {
  let keys = Object.keys(userObject);
  if (keys.length) {
    usersArray.push({ ...userObject });
  }
  console.log(usersArray);
  printUserCards(usersArray, "user-cards-wrapper");
});

const printUserCards = (usersArray, cardsWrapperId) => {
  let cardsWrapper = document.getElementById(cardsWrapperId);
  while (cardsWrapper.firstChild) {
    cardsWrapper.removeChild(cardsWrapper.firstChild);
  }
  usersArray.forEach((user) => {
    let userCard = createUserCard(user);
    cardsWrapper.append(userCard);
  });
};
