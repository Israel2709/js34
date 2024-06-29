import { createNavbar } from "./modules/components.js";
/*let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";*/

const isLogged = () => {
  let token = localStorage.getItem("token");
  return token ? true : false;
};

/*createNavbar("navbar-wrapper", isLogged());*/

if (isLogged()) {
  window.open("views/main-dashboard.html", "_self");
} else {
  window.open("views/login-form.html", "_self");
}
