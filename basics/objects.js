let person = {
  name: "summit",
  last_name: "sharma",
  age: 18,
  education: true,
  married: false,
  greeting: function () {
    console.log("Good Morning summit");
  },
};

//accessing person object properties

console.log(person.name);
console.log(person.last_name);
person.greeting();

//============Challenges===================

let car = {
  make: "hyundai",
  model: "verna x6",
  year: "2023",
  colors: ["red", "blue", "black", "matt", "white", "silver"],
  hybrid_keys: false,
  drive() {
    console.log("now test driving started");
  },
  stop() {
    console.log("test drive for " + this.model + " stoped");
  },
};

console.log(car.make);
console.log(car.colors[0]);
console.log(car.hybrid_keys);
car.drive();
car.stop();

// hoisting
var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "local value";
})();

// TEMPORAL DEAD ZONE

// {
//   // TDZ starts at beginning of scope
//   console.log("bar variable TDZ " + bar); // undefined
//   console.log(" foo variable TDZ " + foo); // ReferenceError
//   var bar = 1;
//   let foo = 2; // End of TDZ (for foo)
//   console.log("after initialize bar variable TDZ " + bar); // undefined
//   console.log("after initialize foo variable TDZ " + foo); // ReferenceError
// }

//TYPEOF  WITH TDZ

// console.log("typeof  " + typeof item); //ReferenceError
// let item = 10;

// function test() {
//   var foo = 33;
//   if (foo) {
//     let foo = foo + 55; // ReferenceError
//   }
// }
// test();

// function go(n) {
//   // n here is defined!
//   console.log(n); // { a: [1, 2, 3] }

//   for (let n of n.a) {
//     //          ^ ReferenceError
//     console.log(n);
//   }
// }

// go({ a: [1, 2, 3] });

// var a = 1;
// var b = 2;

// if (a === 1) {
//   var a = 11; // the scope is global
//   let b = 22; // the scope is inside the if-block

//   console.log(a); // 11
//   console.log(b); // 22
// }

// console.log(a); // 11
// console.log(b); // 2

const c = ["a\0b"];
console.log(c);
