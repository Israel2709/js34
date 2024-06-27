let x = "foo";

console.log(x);

x = "bar";

console.log(x);

let result = 0;

setTimeout(() => {
  result = 100;
}, 5000);

setTimeout(() => {
  console.log(result);
}, 5001);
