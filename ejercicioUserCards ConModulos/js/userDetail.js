import { createUserCard, createNavbar } from "./modules/domComponents.js";

let navWrapper = document.getElementById("nav-wrapper");
navWrapper.append(createNavbar(["home", "contact", "detail"]));

let sampleUser = {
  name: "Israel Salinas Martínez",
  country: "Mexico",
  city: "CDMX",
  abstract: "Front-End mentor",
  socials: {
    github: "github/Israel2709",
    linkedin: "linkedin/israel-salinas-m",
  },
};

let wrapper = document.getElementById("user-detail-wrapper");

wrapper.append(createUserCard(sampleUser));
