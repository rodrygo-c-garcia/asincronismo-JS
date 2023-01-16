import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlAPI) {
  return fetch(urlAPI);
}

// mostrando todos los productos
// fetchData(`${API}/products`)
//   .then((response) => response.json())
//   .then((products) => {
//     console.log(products);
//   })
//   .catch((error) => console.log(error));

// Mostrando un producto en particular
fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    return fetchData(`${API}/products/${products[0].id}`)
      .then((response) => response.json())
      .then((product) => {
        console.log(product);
      });
  })
  .catch((error) => console.log(error));
