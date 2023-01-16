import fetch from "node-fetch";
const API = "https://jsonplaceholder.typicode.com";

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response;
}

const data = {
  title: "APIs Publicas",
  body: "Las mejores APIs publicas para consumir y practicar",
  userId: 90,
};

postData(`${API}/posts`, data)
  .then((response) => response.json())
  .then((data) => {
    // Post añadido
    console.log(data);
  })
  .catch((error) => console.log(error));
