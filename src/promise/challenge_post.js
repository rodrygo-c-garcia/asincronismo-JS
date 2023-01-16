// Guardar un nuevo producto en nuestra API
import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlAPI, data) {
  const response = fetch(urlAPI, {
    method: "POST",
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
  title: "Choes Nike",
  price: 120,
  description: "Nike shoes for people of all kinds",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};
