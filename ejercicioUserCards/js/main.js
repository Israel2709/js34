/*
let user = {
    picture:"",
    name:"",
    country:"",
    city:"",
    abstract:"",
    socials: {
        github:"",
        linkedin:"",
        twitter:"",
        instagram:"",
    }
}
*/

let usersArray = [];
let userObject = {};

let generalInfoFields = document.querySelectorAll(
  "#user-form input.user-general-info"
);

generalInfoFields.forEach((field) => {
  field.addEventListener("keyup", (event) => {
    let property = event.target.name;
    let value = event.target.value;
    userObject[property] = value;
    console.log(userObject);
  });
});
console.log(generalInfoFields);

let socialFields = document.querySelectorAll("#user-form .user-socials");

console.log(socialFields);

socialFields.forEach((field) => {
  field.addEventListener("keyup", (event) => {
    let property = event.target.name;
    let value = event.target.value;
    userObject.socials
      ? (userObject.socials[property] = value)
      : (userObject.socials = { [property]: value });
    console.log(userObject);
  });
});

let saveUserBtn = document.getElementById("save-user-btn");

saveUserBtn.addEventListener("click", () => {
  let keys = Object.keys(userObject);
  if (keys.length) usersArray = [...usersArray, userObject];
  console.log(usersArray);
  printUserCards(usersArray, "user-cards-wrapper");
});

/*

<div class="col">
    <div class="card bg-medium-gray text-white h-100">
    <div class="card-body d-flex flex-column align-items-center">
        <img
        src="https://randomuser.me/api/portraits/women/29.jpg"
        alt=""
        class="rounded-circle w-50 mx-auto"
        />

        <h2 class="card-title">User Name</h2>

        <h4 class="text-success fs-4">Country, Location</h4>

        <p class="fs-5">Abstract</p>
        
        
        <div class="d-flex flex-column w-100 gap-3">
        <a class="w-100 d-block"
            ><button
            class="btn btn-dark bg-light-gray text-white w-100"
            >
            Github
            </button></a
        >
        <a class="w-100 d-block"
            ><button
            class="btn btn-dark bg-light-gray text-white w-100"
            >
            Linkedin
            </button></a
        >
        <a class="w-100 d-block"
            ><button
            class="btn btn-dark bg-light-gray text-white w-100"
            >
            Twitter
            </button></a
        >
        <a class="w-100 d-block"
            ><button
            class="btn btn-dark bg-light-gray text-white w-100"
            >
            Instagram
            </button></a
        >
        </div>
    </div>
    </div>
</div>
*/

const createSocialButton = (buttonData) => {
  /*{platform:"facebook",link:"www...."}*/
  let { platform, link } = buttonData;

  let buttonAnchor = document.createElement("a");
  buttonAnchor.classList.add(..."w-100 d-block".split(" "));
  buttonAnchor.setAttribute("href", link);

  let button = document.createElement("button");
  button.classList.add(
    ..."btn btn-dark bg-light-gray text-white w-100".split(" ")
  );
  button.textContent = platform;

  buttonAnchor.append(button);
  return buttonAnchor;
};

const createUserCard = (userInfo) => {
  let { picture, name, country, city, abstract, socials } = userInfo;

  let col = document.createElement("div");
  col.classList.add("col");

  let card = document.createElement("div");
  card.classList.add(..."card bg-medium-gray text-white h-100".split(" "));

  let cardBody = document.createElement("div");
  cardBody.classList.add(
    ..."card-body d-flex flex-column align-items-center".split(" ")
  );

  let userPicture = document.createElement("img");
  userPicture.classList.add(..."rounded-circle w-50 mx-auto".split(" "));
  userPicture.setAttribute("src", picture);

  let userName = document.createElement("h2");
  userName.classList.add("card-title");
  userName.textContent = name;

  let userLocation = document.createElement("h4");
  userLocation.classList.add(..."text-success fs-4".split(" "));
  userLocation.textContent = `${country}, ${city}`;

  let userAbstract = document.createElement("h4");
  userAbstract.classList.add("fs-5");
  userAbstract.textContent = abstract;

  let socialsWrapper = document.createElement("div");
  socialsWrapper.classList.add(..."d-flex flex-column w-100 gap-3".split(" "));

  let socialsKeys = Object.keys(socials);
  /*['github','twitter']*/
  socialsKeys.forEach((key) => {
    let socialObject = {
      platform: key,
      link: socials[key],
    };
    socialsWrapper.append(createSocialButton(socialObject));
  });

  cardBody.append(
    userPicture,
    userName,
    userLocation,
    userAbstract,
    socialsWrapper
  );

  card.append(cardBody);
  col.append(card);
  return col;
};

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
