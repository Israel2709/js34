import { getAllUsers } from "../modules/usersApi.js";

const printAllUsers = async () => {
  let users = await getAllUsers();
  let list = document.createElement("ul");
  users.forEach((user) => {
    let { name = "N/A", lastname = "N/A", age = "N/A" } = user;
    let listItem = document.createElement("li");
    listItem.textContent = `${name} ${lastname} ${age}`;
    list.append(listItem);
  });
  document.body.append(list);
  console.log(users);
};

printAllUsers();
