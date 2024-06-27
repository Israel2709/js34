const BASE_URL = "https://js-511bb-default-rtdb.firebaseio.com/users";

/*Leer información */
const getAllUsers = async () => {
  let response = await fetch(
    `${BASE_URL}/.json`
  ); /*haz la petición a la base de datos*/

  let data = await response.json();
  /*{
    user1:{
        ....
    },
    user2:{
        ....
    }
  }*/
  console.log(data);
  let keysArray = Object.keys(data);
  let usersArray = keysArray.map((key /*user1 || user2 || -a-jdfasjcv*/) => ({
    ...data[key] /*{name:"Israel", lastname:"salinas"}*/,
    key /*key: "user1" || "user2" || "-a-jdfasjcv"*/,
  }));
  /*
        [
            {name:"Israel", lastname:"salinas", key: "user1"}
            ...
        ]
    */
  return usersArray;
};

/*Crear nuevos datos*/
const createUser = async (userObject) => {
  let response = await fetch(`${BASE_URL}/.json`, {
    method: "POST",
    body: JSON.stringify(userObject),
  });
  let data = await response.json();
  console.log(data);
  return data;
};

/*Actualizar datos*/

const updataUser = async (userRef, newData) => {
  let response = await fetch(`${BASE_URL}/${userRef}/.json`, {
    method: "PATCH",
    body: JSON.stringify(newData),
  });
  let data = await response.json();
  console.log(data);
};

/*Eliminar datos*/

const deleteUser = async (userRef) => {
  let response = await fetch(`${BASE_URL}/${userRef}/.json`, {
    method: "DELETE",
  });
  let data = await response.json();
  console.log(data);
};

export { createUser, deleteUser, updataUser, getAllUsers };
