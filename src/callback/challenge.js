const XMLHttpRequest = require("xmlhttprequest");
const API = "https://api.escuelajs.co/api/v1";

// recibe nuestro url y el callback
function fetchData(urlApi, callback) {
  // llamado HTTP
  let xhttp = new XMLHttpRequest();
  // abrimos una conexion a nuestro API, con GET y urlApi y lo habilitamos con True
  xhttp.open("GET", urlApi, true);
  // Escuchamos los diferentes estados de la solicitud
  xhttp.onreadystatchange = function (event) {
    // validamos que el estado se hay completado, es decir igual a 4
    if (xhttp.readyState === 4) {
      // validamos que el estado es correcto
      if (xhttp.status === 200) {
        // enviamos la informacion de la peticion
        callback(null, JSON.parse(xhttp.responseText));
      }
    } else {
      const error = new Error("Error" + urlApi);
      // enviamos el error de la peticion
      return callback(error, null);
    }
  };
  xhttp.send();
}
