//CALLBACK
function sum(a, b) {
  return a + b;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 3, sum));
