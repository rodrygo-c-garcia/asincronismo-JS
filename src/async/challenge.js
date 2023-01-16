// conectarse a la API de Platzy con funciones asincronas
import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

// implementacion de async
async function fetchData(urlAPI) {
  const response = await fetch(urlAPI);
  const data = await response.json();
  return data;
}

const anotherFn = async (urlAPI) => {
  try {
    const products = await fetchData(`${urlAPI}/products`);
    const product = await fetchData(`${urlAPI}/products/${products[0].id}`);
    const category = await fetchData(
      `${urlAPI}/categories/${product.category.id}`
    );

    console.log(products);
    console.log(`Producto escogido: ${product.title}`);
    console.log(`Titulo de la categoria: ${category.name}`);
  } catch (error) {
    console.log(error);
  }
};

anotherFn(API);
