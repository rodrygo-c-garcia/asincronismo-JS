//CALLBACK
function sum(a, b) {
  return a + b;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log("Suma: " + calc(2, 3, sum));

//-------------------------------------------------------
setTimeout(function () {
  console.log("JavaScript");
}, 5000);

//--------------------------------------------------------
function grettin(name) {
  console.log(`Hola ${name}`);
}

setTimeout(grettin, 2000, "Oscar");
