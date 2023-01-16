const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

// recibe nuestro url y el callback
function fetchData(urlApi, callback) {
  // llamado HTTP
  let xhttp = new XMLHttpRequest();
  // abrimos una conexion a nuestro API, con GET y urlApi y lo habilitamos con True
  xhttp.open("GET", urlApi, true);
  // Escuchamos los diferentes estados de la solicitud
  xhttp.onreadystatechange = function (event) {
    // validamos que el estado se hay completado, es decir igual a 4
    if (xhttp.readyState === 4) {
      // validamos que el estado es correcto
      if (xhttp.status === 200) {
        // enviamos la informacion de la peticion
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error" + urlApi);
        // enviamos el error de la peticion
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

// Productos
fetchData(`${API}/products`, function (error1, data1) {
  if (error1) return console.error(error1);

  // Producto en especifico
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    if (error2) return console.error(error2);

    // categoria del producto
    fetchData(
      `${API}/categories/${data2?.category?.id}`,
      function (error3, data3) {
        if (error3) return console.error(error3);
        console.log(data1[0]);
        console.log(data2.title);
        console.log(data3.name);
      }
    );
  });
});

// CLASE 11 Que son las promesas?
