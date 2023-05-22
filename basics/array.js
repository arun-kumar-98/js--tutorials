const arr = ["abc", "ewe", 45, "susi", "acbds", null, undefined];

// console.log((arr[0] = "rohit"));
// console.log(arr.length);

//===============Challenegs==================

const fruits = ["apple", "mango", "grapes", 10];
let firstFruit = fruits[0];
let lastFruit = fruits[fruits.length - 1];
console.log(lastFruit);
fruits[3] = "dragon fruit";

console.log(firstFruit, fruits);

let order1, order2, order3;

let result = function (order1, order2, order3) {
  console.log(order1);
  console.log(order2);
  console.log(order3);

  let calculateResult = order1 + order2 + order3;
  return calculateResult;
};

result(10, 20, 30);
