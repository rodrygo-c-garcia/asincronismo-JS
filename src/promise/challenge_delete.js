// Eliminamos un producto
import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlAPI) {
  const response = fetch(urlAPI, {
    method: "DELETE",
    mode: "corse",
    credentials: "sema-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // informacion que queremos transmitir a la APU
  });
  return response;
}

postData(`${API}/products/1`)
  .then((response) => response.json().then((data) => console.log(data)))
  .catch((error) => console.error(error));
