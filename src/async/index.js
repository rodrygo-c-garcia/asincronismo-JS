// async y await
const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Async"), 2000)
      : reject(new Error("Error"));
  });
};

const anotherFn = async () => {
  const algo = await fnAsync();
  console.log(algo);
  console.log("Hello");
};

// Las fucniones asincronas no detienen la ejecucion del algoritmo
console.log("Before");
anotherFn();
console.log("After");
