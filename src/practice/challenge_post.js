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

const data = {};
