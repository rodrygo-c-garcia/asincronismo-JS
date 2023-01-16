// Utilizamos la API de https://jsonplaceholder.typicode.com/
import fetch from "node-fetch";
const API = "https://jsonplaceholder.typicode.com";

fetch(`${API}/posts`)
  .then((response) => response.json())
  .then((posts) => {
    // obteniendo todos los posts
    console.log("Todos los posts");
    console.log(posts);

    fetch(`${API}/posts/${posts[0].id}`)
      .then((response) => response.json())
      .then((post) => {
        // obteniendo un post en particular
        console.log("El post seleccionado es: ");
        console.log(post);

        // Obtenemos el comentario del post
        fetch(`${API}/comments/${post.id}`)
          .then((response) => response.json())
          .then((comment) => {
            console.log("Comentario del Post es: ");
            console.log(comment);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err));
