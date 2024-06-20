const getAllCountries = async () => {
  let response = await fetch("https://restcountries.com/v3.1/all");
  let data = await response.json();
  return data;
};

const initApp = async () => {
  let countryData = await getAllCountries();
  printAllCountries("country-list", countryData);
};

const createContryCard = (countryData) => {
  console.log(countryData);
  let { name, population, capital, region, flags } = countryData;
  console.log(name);
  let cardColumn = document.createElement("div");
  cardColumn.classList.add("col");

  let card = document.createElement("div");
  card.classList.add(
    "card",
    "h-100",
    "border-0",
    "rounded-lg",
    "overflow-hidden",
    "bg-dark-blue"
  );

  let cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top");
  cardImage.setAttribute("src", `${flags.svg}`);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "bg-dark-blue", "text-white");

  let cardTitle = document.createElement("h6");
  cardTitle.classList.add("card-title", "mb-3");
  let titleText = document.createTextNode(`Name: ${name.official}`);
  cardTitle.append(titleText);

  let countryPopulationLabel = document.createElement("p");
  countryPopulationLabel.classList.add("card-text");
  let populationText = document.createTextNode(`Population: ${population}`);
  countryPopulationLabel.append(populationText);

  let countryRegionLabel = document.createElement("p");
  countryRegionLabel.classList.add("card-text");
  let regionText = document.createTextNode(`Region: ${region}`);
  countryRegionLabel.append(regionText);

  let countryCapitalLabel = document.createElement("p");
  countryCapitalLabel.classList.add("card-text");
  let capitalText = document.createTextNode(`Capital: ${capital[0]}`);
  countryCapitalLabel.append(capitalText);

  cardBody.append(
    cardTitle,
    countryPopulationLabel,
    countryRegionLabel,
    countryCapitalLabel
  );

  card.append(cardImage, cardBody);
  cardColumn.append(card);
  return cardColumn;
};

const printAllCountries = async (listWrapperId, countriesArray) => {
  let wrapper = document.getElementById(listWrapperId);

  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }

  countriesArray.forEach((country) => {
    let countryCard = createContryCard(country);
    wrapper.append(countryCard);
  });
};

initApp();

let continentSelect = document.getElementById("continent-select");

continentSelect.addEventListener("change", async (event) => {
  let countriesData = await getAllCountries();
  let selectedOption = event.target.value;
  console.log(selectedOption);
  if (selectedOption !== "all") {
    let result = countriesData.filter(
      (country) => country.region === selectedOption
    );
    console.log(result);
    printAllCountries("country-list", result);
  } else {
    printAllCountries("country-list", countriesData);
  }
});

let searchByNameInput = document.getElementById("search-by-name");

searchByNameInput.addEventListener("keyup", async (event) => {
  let searchValue = event.target.value.toLowerCase();
  console.log(searchValue);
  let countriesData = await getAllCountries();
  let result = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue)
  );
  printAllCountries("country-list", result);
});
