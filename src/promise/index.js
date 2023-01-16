// Construimos nuestra promesa
const promise = new Promise(function (resolve, reject) {
  resolve("Hey!");
});
//verificar la cantidad de vacas, si cumple o no con nuestro rango (hasta 10)
const cows = 15;

const countCows = new Promise(function (resolve, reject) {
  // tenemos las vacas necesario
  if (cows >= 10) resolve(`We have ${cows} cows on the farm`);
  // no tenemos la cantidad de vacas necesario
  else reject("there is no cows on the farm");
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finaly");
  });
