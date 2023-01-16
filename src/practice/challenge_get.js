// Utilizamos la API de https://jsonplaceholder.typicode.com/
import fetch from "node-fetch";
const API = "https://jsonplaceholder.typicode.com";

fetch(`${API}/comments`)
  .then((response) => response.json())
  .then((comments) => {
    // obteniendo todos los comentarios
    console.log("Todos los comentarios");
    console.log(comments);

    fetch(`${API}/comments/${comments[0].id}`)
      .then((response) => response.json())
      .then((coment) => {
        // obteniendo un comentario en particular
        console.log("El comentario seleccionado es: ");
        console.log(coment);
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err));
