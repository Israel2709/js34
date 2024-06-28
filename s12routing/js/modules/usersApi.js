const BASE_URL = "https://js-511bb-default-rtdb.firebaseio.com/users";

const createUser = async (userObject) => {
  let response = await fetch(`${BASE_URL}/.json`, {
    method: "POST",
    body: JSON.stringify(userObject),
  });
  let data = await response.json();
  console.log(data);
  return data;
};

const getAllUsers = async () => {
  console.log("getting users");
  let response = await fetch(`${BASE_URL}/.json`);
  let data = await response.json();
  let dataKeys = Object.keys(data);
  let usersArray = dataKeys.map((key) => ({ ...data[key], key }));
  return usersArray;
};

const getUserByKey = async (userKey) => {
  let response = await fetch(
    `https://js-511bb-default-rtdb.firebaseio.com/users/${userKey}/.json`
  );
  let data = await response.json();
  return data;
};

export { createUser, getAllUsers, getUserByKey };
