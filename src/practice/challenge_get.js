// Utilizamos la API de https://jsonplaceholder.typicode.com/
import fetch from "node-fetch";
const API = "https://jsonplaceholder.typicode.com";

fetch(`${API}/comments`)
  .then((response) => response.json())
  .then((comments) => {
    console.log("Todos los comentarios");
    console.log(comments);
  });
