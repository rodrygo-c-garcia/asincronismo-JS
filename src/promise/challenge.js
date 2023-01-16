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
  // obteniendo todos los products
  .then((products) => {
    return (
      fetchData(`${API}/products/${products[0].id}`)
        .then((response) => response.json())
        // obteniendo el primer producto
        .then((product) => {
          console.log("El producto seleccionado es: ");
          console.log(product);
          return (
            fetchData(`${API}/categories/${product.category.id}`)
              .then((response) => response.json())
              // obteniendo la categoria del producto
              .then((category) => {
                console.log("La categoria del producto es: ");
                console.log(category);
              })
          );
        })
        .catch((error) => console.log(error))
    );
  })
  .catch((error) => console.log(error));
