// nos permite crear una funcion que podemos utilizar para controlar el iterador (pausar o retomar)
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

// con esta funcion tenemos es el aceso reservada
const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["Oscar", "Omar", "Lucia", "Juana", "Nova"]);
console.log(`Primer valor: ${it.next().value}`);
console.log(`Segundo valor: ${it.next().value}`);
console.log(`Tercer valor: ${it.next().value}`);
