// Actualizar un producto en especifico
import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlAPI, data) {
  const response = fetch(urlAPI, {
    method: "PUT",
    mode: "corse",
    credentials: "sema-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // informacion que queremos transmitir a la APU
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: "Ropas Americanas",
  price: 150,
};

postData(`${API}/products/1`, data)
  .then((response) => response.json().then((data) => console.log(data)))
  .catch((error) => console.error(error));
