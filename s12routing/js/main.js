import { getAllUsers } from "./modules/usersApi.js";

/*Valores inciales*/
let users = [];
let uniqueCountries = [];

/*Selecciones de dom*/
let searchByNameField = document.getElementById("search-by-name");
let countrySelect = document.getElementById("search-by-country");
let birthSortingRadios = document.getElementsByName("birth-sorting");
console.log(birthSortingRadios);

/*Funciones*/
const printUsers = async (usersArray) => {
  let usersWrapper = document.getElementById("users-wrapper");
  usersWrapper.innerHTML = "";

  let cards = usersArray.map((user) => {
    let { key, picture, name, lastname, abstract } = user;
    return `
          <div class="col">
              <a href="views/user-detail.html?userKey=${key}" class="text-decoration-none" target="_blank">
                  <div class="card mb-3">
                      <div class="row g-0">
                          <div class="col-md-4">
                          <img src=${picture} class="w-100 h-100 object-fit-cover rounded-start" alt="...">
                          </div>
                          <div class="col-md-8">
                          <div class="card-body">
                              <h5 class="card-title">${name} ${lastname}</h5>
                              <p class="card-text">${abstract}</p>
                              <button class="btn btn-dark">Ver detalle</button>
                          </div>
                          </div>
                      </div>
                  </div>        
              </a> 
         </div>`;
  });
  usersWrapper.innerHTML = cards.join("");
};

const createCountryOptions = (countriesArray) => {
  countriesArray.forEach((country) => {
    let countryOption = document.createElement("option");
    countryOption.textContent = country;
    countryOption.value = country;
    countrySelect.append(countryOption);
  });
};

const getUsers = async () => {
  users = await getAllUsers();
  uniqueCountries = users.reduce((accum, current) => {
    return accum.includes(current.country)
      ? accum
      : [...accum, current.country];
  }, []);
  createCountryOptions(uniqueCountries);
  printUsers(users);
};

getUsers();

/*Listeners*/

searchByNameField.addEventListener("keyup", (event) => {
  let query = event.target.value.toLowerCase();
  let result = users.filter((user) =>
    `${user.name} ${user.lastname}`.toLowerCase().includes(query)
  );
  printUsers(result);
});

countrySelect.addEventListener("change", (event) => {
  let selectedCountry = event.target.value.toLowerCase();
  console.log(selectedCountry);
  let result = users.filter(
    (user) => user.country.toLowerCase() === selectedCountry
  );
  printUsers(result);
});

birthSortingRadios.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    let value = event.target.value;

    let sortedArray = [];

    if (value === "ascending") {
      sortedArray = [...users].sort(
        (a, b) =>
          convertDateToTimeStamp(a.dateOfBirth) -
          convertDateToTimeStamp(b.dateOfBirth)
      );
    } else if (value === "descending") {
      sortedArray = [...users].sort(
        (a, b) =>
          convertDateToTimeStamp(b.dateOfBirth) -
          convertDateToTimeStamp(a.dateOfBirth)
      );
    }

    printUsers(sortedArray);
  });
});

const convertDateToTimeStamp = (date) => {
  const [day, month, year] = date.split("/");
  const dateObject = new Date(`${year}-${month}-${day}T00:00:00Z`);
  const timestamp = dateObject.getTime();
  return timestamp;
};
