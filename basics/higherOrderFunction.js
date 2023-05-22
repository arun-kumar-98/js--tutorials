//Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)

// Higher Order function - accepts another function as an argument or returns another function as a result

// Callback Function - passed to a another function as an an argument and executed inside that function

// function morning(name) {
//   return `Good Morning ${name.toUpperCase()}`;
// }
// function evening(name) {
//   return `Good Evening ${name.toUpperCase()}`;
// }

// function greet(name, cb) {
//   let myName = "john";

//   console.log(` ${cb(name)}, My name is ${myName} `);
// }

// greet("bob", morning);

// greet("Robbin", evening);

// function filterFunction(arr, callback) {
//   const filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]) ? filteredArr.push(arr[i]) : null;
//   }
//   return filteredArr;
// }

// //
// // Function containing logic for filtering out odd numbers

// function isOdd(x) {
//   return x % 2 != 0;
// }

// // Function containing logic for filtering out even numbers

// function isEven(x) {
//   return x % 2 === 0;
// }

// const arr = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(filterFunction(arr, isOdd));
// console.log(filterFunction(arr, isEven));

//==========================================================================///

// const arr = ["one", "two", "three"];
// console.log(arr[2]); // three
// console.log(arr["length"]); // 3

// console.log(typeof Object);

// const a1 = ["a", "b", "c", "c", "a", 1, 3, 4, 1, 3];

// const res = a1.filter(Boolean);
// console.log(res);

// console.log(a1.some(Boolean));

// const v = [...new Set(a1)];
// console.log(v);

//====================FOREACH()=======================================//

// const people = [
//   { name: "miller", age: 23, position: "Developer", id: 1, salary: 5000 },
//   { name: "malan", age: 25, position: "Designer", id: 2, salary: 2000 },
//   { name: "maxwell", age: 26, position: "Manager", id: 3, salary: 3000 },
//   {
//     name: "martin",
//     age: 30,
//     position: "sales executive",
//     id: 4,
//     salary: 15000,
//   },
// ];

// function showPerson(person) {
//   console.log(person.position.toUpperCase());
// }

// people.forEach(showPerson);

//====================MAP()===============================================eo

// const ages = people.map(function (item) {
//   return item.age + 20;
// });
// console.log(ages);

// const newPeople = people.map(function (person) {
//   return {
//     personName: person.name.toUpperCase(),
//     oldAges: person.age + 20,
//   };
// });
// console.log(newPeople);

// const names = people.map(function (person) {
//   return `<h1>${person.name.toUpperCase()}</h1>`;
// });
// document.body.innerHTML = names.join("");

// console.log(names);

//====================FILTER()===============================

//best for filtering
// const youngDeveloper = people.filter(function (person) {
//   return person.age <= 25;
// });

// console.log(youngDeveloper);

// const Developer = people.filter(function (person) {
//   return person.position === "Developer";
// });

// console.log(Developer);

//=================FIND()============================

//best for unique search in array
// const onePerson = people.find(function (person) {
//   return person.id === 3;
// });

// console.log(onePerson.name);

//===========REDUCE(================================
// const sum = [];
// const total = people.reduce(function (accumulator, currentBValues) {
//   console.log(accumulator);
//   console.log(currentBValues);
//   accumulator += currentBValues.salary;
//   return accumulator;
// }, 0);
// //sum.push(total);

// console.log([total]);

//===========================================================================
//===========================================================================
//=====================OBJECT================================================
/**
 * object :collection of key (property) and values(can be number,string,boolean array and function etc...)
 * However the property value is a function and it's called METHOD in javascript
 *  */
//set variable

const age = 30;

//assigning property values to an object

//const random-value
//=====================NESTED OBJECTS===================

// const person = {
//   name: "john",
//   age: age,
//   marriage: true,
//   siblings: ["alok", "anshu"],
//   greet: function () {
//     console.log(`Hello my name is  ${this.name} `);
//   },
//   sayHello(name) {
//     console.log(`Hello  name is ${name}`);
//   },
//   job: {
//     titile: "developer",
//     company: {
//       name: "coding addict",
//       address: "123 main street menlo park CA ",
//     },
//   },
//   "random-value": "random",
// };

// console.log(person);
// console.group(" start  greeting..................");
// person.greet();
// person.sayHello("reyan ");
// console.log(person.age);
// console.log(delete person.siblings);
// console.log(person.job.titile);
// console.log(person.job.company.address, person.job.company.name);
// //access property

// console.log(person["random-value"]);

// console.log(`acessing name property ${person["name"]}`);
// console.log(`job title ${person["job"].titile}`);

// console.log(person);

// console.groupEnd();

//============================THIS KEYWORD====================================

// const john = {
//   firsyName: "john",
//   lastName: "miller",
//   age: 25,
//   fullName: function () {
//     console.log(`full name is ${this.firsyName}  ${this.lastName}`);
//     console.log(this);
//   },
// };

// const bob = {
//   firsyName: "bob",
//   lastName: "sutherland",
//   age: 28,
//   fullName: function () {
//     console.log(`full name is ${this.firsyName}  ${this.lastName}`);
//     console.log(this);
//   },
// };
// const reyan = {
//   firsyName: "reyan",
//   lastName: "david",
//   age: 35,
//   fullName: function () {
//     console.log(`full name is ${this.firsyName}  ${this.lastName}`);
//     console.log(this);
//   },
// };

// console.log(john["age"]);
// john.fullName();

// bob.fullName();
// console.log(bob["age"]);

// reyan.fullName();
// console.log(reyan["age"]);

//==========ADVANCED THIS KEYWORD=================================================

/**
 *
 *  IN REGULAR FUNCTION ("NOT ARROW FUNCTION")  'THIS'
 * DETERMINED BY  HOW !!!! A FUNCTION IS INVOKED (LEFT OF .)
 * EX. johnmiller.showThis();
 *
 * DEFAULTS TO  GLOBAL OBEJCTS    showThis();
 *
 */

// function showThis() {
//   console.log(this);
// }

// const johnmiller = {
//   name: "john miller",
//   showThis: showThis,
// };

// const bobsutherland = {
//   name: "bob sutherland",
//   showThis: showThis,
// };

// johnmiller.showThis();
// bobsutherland.showThis();

// //
// showThis();

// const btn_1 = document.querySelector(".btn-1");
// const btn_2 = document.querySelector(".btn-2");

// btn_1.addEventListener("click", showThis);
// btn_2.addEventListener("click", showThis);

// btn_1.addEventListener("click", () => {
//   alert("you are in inside alert function");
//   showThis();
// });

// btn_2.addEventListener("click", () => {
//   alert("you are in alert function");
//   showThis();
// });

//=========================================================================
//=========================================================================
//=========================================================================

//==================FACTORY FUNCTION=======================================================

// function createPerson(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function fullName() {
//       console.log(`my fullName is ${firstName} ${lastName} and  I love js`);
//     },
//   };
// }

// const john = createPerson("john", "miller");
// john.fullName();

// const bob = createPerson("bob", "sutherland");
// bob.fullName();

//========================CONSTRUCTOR FUNCTION=============================

// function Person(firstName, lastName) {
//   (this.firstName = firstName),
//     (this.lastName = lastName),
//     (this.fullName = function fullName() {
//       console.log(
//         `My fullname   is ${firstName} ${lastName}AND   I love REACT AS  MY FRONT END`
//       );
//     });
//   console.log(this);
// }

// const john = new Person("John", "Miller");

// john.fullName();

// const susy = john.constructor("susy", "malan");

// console.log(john.constructor);

// const bobo = {};
// console.log(bobo.constructor);

// const abc = [];
// console.log(abc.constructor);

// const sayHI = function () {};
// console.log(sayHI.constructor);

// const susy = new john.constructor("susy", "malan");

//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================

//==============================FUNCTION IN JAVASCRIPT==========================
//IFE PRACTICAL

// const num1 = 30;
// const num2 = 40;

// function add() {
//   console.log(`total is ${num1 + num2}`);
// }

// add();

// //annonymous function
// (function () {
//   const num1 = 30;
//   const num2 = 40;

//   console.log(num1 + num2);
// })();

// //with parameter

// (function (num1, num2) {
//   console.log(`parameterized function is ${num1 + num2}`);
// })(10, 20);

// //with return statement
// const total = (function (x, y) {
//   return x + y;
// })(100, 200);

// console.log(total);

// //source : DOCS
// (() => {
//   // some initiation code
//   let firstVariable;
//   let secondVariable;
// })();

// firstVariable and secondVariable will be discarded after the function is executed.
//console.log(firstVariable, secondVariable);

// IIFE DOCS (BEAN ALMAN)
// Because this function returns another function that has access to the

// "private" var i, the returned function is, effectively, "privileged."

// function makeCounter() {
//   // `i` is only accessible inside `makeCounter`.

//   var i = 0;

//   return function () {
//     console.log(++i);
//   };
// }

// // Note that `counter` and `counter2` each have their own scoped `i`.

// var counter = makeCounter();

// counter(); // logs: 1

// counter(); // logs: 2

// var counter2 = makeCounter();
// counter2(); // logs: 1

// counter2(); // logs: 2

// i; // ReferenceError: i is not defined (it only exists inside makeCounter)

//===========================================================================
//===========================================================================
//===========================================================================
//=================HOISTING IN JAVASCRIPT====================================

//hoisting
//display();
//console.log(moreComplex());

// const firstName = "john";
// let lastName = "crown";
// var random = "random ";

// //console.log(firstName);
// // console.log(lastName);
// // console.log(random);

// function display() {
//   console.log(`Hello world `);
// }

// function moreComplex() {
//   return `details ${firstName},${lastName},${random}`;
// }
// //normal execution
// console.log(moreComplex());

//============================================================================
//============================================================================
//============================================================================
//============================================================================
//========================CLOSURE=============================================
/**
 * closure will give you access to an outer function's scope from inner function
 */

// function outer() {
//   let privateVar = "secret";

//   function inner() {
//     console.log(`Hello there is secret is : ${privateVar}`);
//     function insideInner() {
//       let insideInnerValues = "innerVariable";
//       console.log(
//         `We are inside in inside inner function  :${insideInnerValues}`
//       );
//     }
//     return insideInner;
//   }
//   return inner;
// }

// outer()()();

// let value = outer();
// let value2 = value();
// value2();

//Example2 CLOSURE

// function newAccount(name, initialBalance) {
//   let balance = initialBalance;

//   function showBalance() {
//     console.log(`Hey ${name}, your balance is ${balance}`);
//   }

//   function deposite(amount) {
//     balance += amount;
//     showBalance();
//   }

//   function withdraw(amount) {
//     if (amount > balance) {
//       console.log(`${name} sorry you don't have enough balance `);
//       return;
//     }
//     balance -= amount;
//     showBalance();
//   }

//   return { showBalance: showBalance, deposite: deposite, withdraw: withdraw };
// }

// // const mohan = newAccount("mohan", 3000);
// // const rohit = newAccount("rohit", 4000);
// // mohan.withdraw(1000);
// // rohit();

// newAccount("suman", 4000).deposite(499);
// newAccount("mohit", 10000).withdraw(489);

//FREE CODE CAMP TUTORIAL FOR CLOSURE

// function numberGenerator() {
//   // Local “free” variable that ends up within the closure
//   var num = 1;
//   function checkNumber() {
//     console.log(num);
//   }
//   num++;
//   return checkNumber;
// }

// var number = numberGenerator();
// number(); // 2

//Scope Chain
// var x = 10;

// function foo() {
//   var y = 20; // free variable
//   function bar() {
//     var z = 15; // free variable
//     return x + y + z;
//   }
//   return bar;
// }

// const bar = foo();
// console.log(bar());

//================================================================
//================================================================
//================================================================
//================================================================

// let x = "b";

// let y = "a";
// let abc = x + y + +y + y;
// console.log(abc);

//================================================================

//================ARROW FUNCTION ==================================

//============================== ARROW FUNCTION USE CASES========================//

// const func = () => {
//   foo: 1;
// };
// Calling func() returns undefined!
//console.log(func());

//const func2 = () => { foo: function () {} };
// SyntaxError: function statement requires a name

//console.log(func2());

// const func3 = () => ({ foo() {} });
// console.log(func3());
// SyntaxError: Unexpected token '{'

//==================SOLUTION===========================
/**
 * This is because JavaScript only sees the arrow function as having a concise body
 * if the token following the arrow is not a left brace, so the code inside braces ({}) is parsed as a sequence of statements,
 *  where foo is a label, not a key in an object literal.

*/

//("use strict");

// const obj = {
//   i: 10,
//   b: () => console.log(this.i, this),
//   c() {
//     console.log(this.i, this);
//   },
// };

// obj.b(); // logs undefined, Window { /* … */ } (or the global object)
//obj.c(); // logs 10, Object { /* … */ }

// const sayHello = () => console.log(`Hello Arrow function`);
// sayHello();

// const add = (num) => num * 2;
// console.log(add(2));

// const multiply = (num1, num2) => num2 * num1;
// console.log(multiply(2, 3));

//note:  if we make it multiple line and not writing console.log insode it then returning is important  ex.
/**
const multiply = (num1, num2) => {
   return num2 * num1}; 
 * 
 */

//return onject

// const person = () => ({ name: "arun", age: 25 });
// console.log(person());

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const num = numbers.filter((number, index) => {
//   console.log(index);
//   return number > 2;
// });
// console.log(num);

//  ARROW FUNCTION -- OBJECT & THIS
// const john = {
//   firstName: "john",
//   lastName: "smiliga",

//   sayName: function () {
//     console.log(this); //parent
//     setTimeout(() => {
//       console.log(this);
//       console.log(`my name is ${this.firstName} ${this.lastName}`);
//     });

//     console.log(`Hello  ${this.firstName} ${this.lastName} ,welcome to you`);
//   },

//   //working with this inside arrow function
// };

// const bob = {
//   firstName: "bob",
//   lastName: "miller",
//   sayName: function () {
//     console.log("===================>  ", this);
//     console.log(`Hello  ${this.firstName} ${this.lastName} ,welcome to you`);
//   },
// };

// john.sayName();
// bob.sayName();

//DEFAULT PARAMETER & hOISTING GOTCHAS

// const john = function (person = "susan") {
//   console.log(`HI ${person}`);
// };

// john();

//=======DOCS  EXAMPLE ==================
// function multiply(a, b = 1) {
//   return a * b;
// }

// console.log(multiply(5, 2)); // 10
// console.log(multiply(5)); // 5
// console.log(multiply(5, false)); // 5

// function f(x = 1, y) {
//   return [x, y];
// }

// console.log(f()); // [1, undefined]
// console.log(f("", 1)); // [2, undefined]

//=================================================
//=================================================
//=================================================

// function test(value, arr = []) {
//   arr.push(value);
//   return arr;
// }

// console.log(test(1));

//==================================================
//==================================================
//==================================================
//==================================================
//===================h==============================

//===========================ARRAY DESTRUCTURING=====================================

// const friends = ["aman", "sahil", "saurabh", "satyam", "sankalp"];
// //destructing

// const [, sahil, satyam, ,] = friends;
// console.log(sahil, satyam);

// docs example

// let a, b, rest;
// const arr = [10, 20, 30, 40, 50];

// [a, b] = [10, 20];

// console.log(a);
// // Expected output: 10

// console.log(b);
// // Expected output: 20

// [a, b, ...rest] = arr;

// console.log(rest);
// // Expected output: Array [30, 40, 50]

// [a, , b] = arr;
// //skip element
// console.log(a, b);

//destructuring with default value
// [a = 5, b] = arr;
// console.log(a, b);

// [a, , b, ...rest] = arr;

// console.log(a, b, rest);

// [a, b, ...{ pop, push }] = arr;
// console.log(a, b, pop);

// DEFAULT VALUE IN DESTRUCTURING

// const [a = 1] = []; // a is 1
// console.log(a);
// const { b = 2 } = { b: undefined }; // b is 2
// console.log(b);
// const { c = 2 } = { c: null }; // c is null
// console.log(c);

//

//const { b = console.log("hey") } = { b: 2 };
// Does not log anything, because `b` is defined and there's no need
// to evaluate the default value.

//console.log(b);

//============================================================================
//============================================================================
//============================================================================
//============================================================================

//=================SWAPPING VARIABLES=======================================
// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1

// const arr = [1, 2, 3];
// [arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); // [1, 3, 2]

// //=============================================================================

// let firstName = "rohit";
// let lastName = "mohit";
// [lastName, firstName] = [firstName, lastName];
// console.log(
//   ` before swapping ${firstName} ${lastName} after swapping    ${lastName}  ${firstName}`
// );
//

//=========OBJECT DESTRUCTURING=============================

// const numbers = {
//   a: 10,
//   b: 20,
// };
// // console.log(numbers.a);
// // console.log(numbers.b);

// const { a, b } = numbers;
// console.log(a);
// console.log(b);

// const person = {
//   name: "arun",
//   lastName: "sharma",
//   city: "bth",
//   language: ["Hindi", "Bhojpuri", "English"],
// };
// const { name, lastName, city, language } = person;
// console.log(name, lastName, city, language);

// //=======================DESTRUCTURING FUNCTION PARAMETER=============================

// function printPerson({ name, lastName, language }) {
//   console.log(`=============================`);
//   console.log(name);
//   console.log(lastName);
//   console.log(language);
// }
// printPerson(person);

//========================================================================================
//========================================================================================
//=======================
// let x = "false;";
// let y = !x;
// console.log(y);

///======================================================

// const { a } = undefined;
// //console.log(a);

// const { b } = null;
// console.log(b);

// const props = [
//   { id: 1, name: "Fizz" },
//   { id: 2, name: "Buzz" },
//   { id: 3, name: "FizzBuzz" },
// ];

// const [, { name }] = props;

// console.log(name); // "FizzBuzz"

//==================================================================

//==================================================================
//==================================================================

//=======================STRING METHODS=============================(
//startWith(),endsWith(),include(),repeat()

// const person = "peter smith";

// const Manager = "james-docker";
// const employee = "wan-doe-peter";

// console.log(person.startsWith("p"));
// console.log(employee.startsWith("w"));
// console.log(Manager.startsWith("j"));

// //=======================================================================
// console.log(person.endsWith("th"));
// console.log(employee.endsWith("ter"));
// console.log(Manager.endsWith("r"));
// //======================================================================

// console.log("includes  " + employee.includes("pet"));

// //============================================
// const multipPeople = (people, amount = 10) => people.repeat(amount);
// console.log(multipPeople(person, 2));

///=========================================================================
//===============FOR...OF===================================================

// const fruits = ["apple", "orange", "banana", "guava"];

// //break statement
// for (const fruit of fruits) {
//   if (fruit === "guava") {
//     break;
//   }
//   console.log(fruit);
// }

// //continue statement

// for (const fruit of fruits) {
//   if (fruit === "orange") {
//     continue;
//   }
//   console.log(fruit);
// }
// //return
// for (const fruit of fruits) {
//   if (fruit === "orange") {
//     return fruit;
//   }
//   console.log(fruit);
// }

//============REST OPERATOR=============================

//==========with array==================================
// const udemy = "udemy";
// //console.log([...udemy]);

// const boys = ["rohit", "mohit", "sahil"];
// const girls = ["ananya", "sakshi", "shruti"];
// const bestFriend = "akash";

// const friends = [...boys, bestFriend, ...girls];
// console.log(friends);

// // ADD NEW FRIEND
// friends[0] = "kaushik ";
// console.log(friends);

// //=====================with objects========================

// const person = { name: "maxwell", age: 40 };
// const newPerson = { ...person, city: "chicago", name: "miller" };
// console.log(newPerson);

//==============spread operator:- function argument=================

// const number = [3, 5, 6, 10, 34, 80, 90];

// const maxNUmber = Math.max(...number);
// console.log(maxNUmber);

//==========
// const person = ["miller", "johnson"];

// const sayHello = (firstName, lastName) => {
//   console.log(`Hello ${firstName} ${lastName}`);
// };

// sayHello(...person);

//==============REST OPERATOR============================================

// const fruits = ["apple", "mango", "banana", "orange", "guava"];

// const [first, second, ...fruit] = fruits;

// console.log(first, second, fruit);

// //

// const person = {
//   name: "kaoushal",
//   lastName: "bhrgava",
//   job: "developer",
//   location: "Hyderabad",
// };

// const { name, ...rest } = person;
// console.log(name, rest);

// //===find average

// const testScore = [90, 78, 34, 10, 56, 75];

// const getAvg = (name, ...scores) => {
//   console.log(name);
//   console.log(scores);
//   //find average of scores
//   let total = 0;
//   for (const score of scores) {
//     total += score;
//   }

//   console.log(`average score is ${total / scores.length}`);
// };

// getAvg(person.name, 90, 78, 34, 10);

// getAvg(person.name, ...testScore);

//============================================================================================
//============================================================================================
//============================================================================================
//====================================ARRAY PROTOTYPES========================================

// Array.of(): always creates new instance of an array

// console.log(Array.of());

// const arr = Array.of("one", "two", "three");
// console.log(arr);

// console.log(Array.of(7));

// console.log(Array(7));

// console.log(Array.of(1, 2, 3));

// console.log(Array(4, 5, 6, 7));

// console.log(Array.of(undefined, undefined));
// console.log(Array.of(null, null, null));

//========CALLING OF() IN NON ARRAY CONSTRUCTOR============

// function notArray(len) {
//   console.log(`notArray called witlengthh ${len}`);
// }

// console.log(Array.of.call(notArray, 1, 2, 3, 4));

// //notArray called witlengthh 4
// //notArray { '0': 1, '1': 2, '2': 3, '3': 4, length: 4 }

// console.log(Array.of.call(Object));

//======================FROM()=================================

// console.log(`'Array from function`);
// const udemy = "udemy";
// console.log(Array.from(udemy));

// function totalCount() {
//   const total = Array.from(arguments).reduce((acc, value) => (acc += value), 0);

//   console.log(total);
// }
// totalCount(78, 67, 50);

//from docs
// const arr = [12, 34, 10, 40, 20];
// function addElements(arr) {
//   const sum = Array.from(arr, (elements) => elements + elements);
//   return sum;
// }
// console.log(addElements(arr));

//==================array from string==================
// const foo = "foo";
// console.log(Array.from(foo));

// //ARRAY FROM SET

// const set = new Set(["foo", "bar", "car", "foo"]);
// console.log(Array.from(set));

//ARRAY FROM A MAP
// const map = new Map([
//   [1, 4],
//   [2, 5],
//   [3, 6],
// ]);
// console.log(Array.from(map.values()));

//=========================================================
//=========================================================
//=========================================================

//=============find,filter,findIndex,every,some=======================

// const people = [
//   { id: 1, name: "akash" },
//   { id: 2, name: "akshay" },
//   { id: 3, name: "arpit" },
// ];

// const filteredName = people.filter((person) => person.name === "akash");
// console.log(filteredName);

// const findName = people.find((item) => item.id === 3);
// console.log(findName);

// const findIndexedElement = people.findIndex((item) => item.id === 2);
// console.log(findIndexedElement);

// const grades = ["A", "B", "A", "A", "C"];
// const allGrades = ["A", "B", "A", "B"];

// const grade = grades.every((grade) => grade !== "C");
// console.log(grade);

// const oneGrade = allGrades.some((gradee) => gradee === "A");
// console.log(oneGrade);

//====================FOR...IN LOOP=================================

// const person = {
//   name: "miller",
//   age: 25,
//   status: "student",
// };

// for (let student in person) {
//   console.log(`${student}:${person[student]}`);
// }

// const keys = Object.keys(person);
// console.log(keys);
// const values = Object.values(person);
// console.log(values);

// const entry = Object.entries(person);
//console.log(entry);

//using map ()
// const result = entry.map((map) => {
//   //array destructuing
//   const [first, second] = map;
//   console.log(first, second);
// });

//using for...in loop

// for (let item of entry) {
//   console.log(`inside for...of method`);
//   const [first, second] = item;
//   console.log(`${first} ${second}`);
// }

//=======================================================
//=======================================================
//=======================================================

// const unique = new Set();
// unique.add("first");
// unique.add("second");
// unique.add("three");
// unique.add(true);
// unique.add(5);

// console.log(unique);

// //DELETE()
// // unique.delete(5);
// // console.log(unique);

// //CLEAR()
// // unique.clear();
// // console.log(unique);

// //HAS()
// const isValue = unique.has(10);
// console.log(isValue);

// //FOREACH()
// console.log(unique.size);
// unique.forEach((item) => {
//   console.log(`${item}`);
// });

//ENTRIES()

// const result = unique.entries();
// console.log(result);
// console.log(unique);

//new Set(): USE CASES

// const products = [
//   {
//     title: "high-bench desk",
//     company: "ikea",
//   },
//   {
//     title: "albany table ",
//     company: "marcos",
//   },
//   {
//     title: "accent chai",
//     company: "caressa",
//   },
//   {
//     title: "wood chair",
//     company: "ikea",
//   },
// ];

// console.log(products);

// const companies = products.map((item) => item.company);
// console.log(companies);

// //ne set()

// const uniqueCompany = new Set(companies);
// console.log(uniqueCompany);

// console.log(`spread operator`);

// const finalCompany = [...uniqueCompany];
// console.log(finalCompany);

// //shorthand.........
// const result = ["all", ...new Set(products.map((item) => item.company))];
// console.log(result);

//===========================================================================
//===========================================================================
//===========================================================================
//===========================================================================
//====================STRING INCLUDE()=======================================
// const firstName = "miller";

// const result = firstName.includes("m");
// console.log(result);

// const product = {
//   titile: "Leather shoes",
//   titile1: "belt",
//   titile2: "wallet",
// };

// console.log(product);

// console.log(product.titile.includes("lea"));

// const chairCategories = [
//   { title: "Modern Paster" },
//   { title: "Bar Stool" },
//   { title: "Armchair" },
//   { title: "Leather chair" },
// ];
// const text = "a";
// const isProductAvailable = chairCategories.filter((product) =>
//   product.title.toLocaleLowerCase().includes(text)
// );
// console.log(isProductAvailable);

// //=========================ARRAY INCLUDES()==========================
// const groceries = ["milk", "sugar", "lemon", "honey", "ghee"];
// let searchItem = "oil";
// searchItem = "sugar";

// const searchedProduct = groceries.includes(searchItem);
// console.log(searchedProduct);

//=================================================================================
//=================================================================================
//=================================================================================
//=================================================================================
//=============================ASYNCHRONOUS JAVASCRIPT=============================

//corner use  cases
// const x = [];
// const y = [];
// console.log(typeof (x + y)); //string(because concatenation +)

//==============================================================================i

// boiler(0);
// console.log("menanwhile prepare ingredient");

// function boiler(time) {
//   console.log("boiling...................");
//   setTimeout(() => {
//     console.log(`done.. within ${time}`);
//   }, time);
// }

//===============================================================================
//======================PROMISE==================================================
// const promise = new Promise((resolve, reject) => {
//   const value = true;
//   if (value) {
//     resolve([1, 2, 3, 3].reduce((acc, val) => acc + val));
//   } else {
//     reject(`there is Error in code please check your code`);
//   }
// });

// console.log(promise);

// //to access promise result we need to use
// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//===================TASK=================================

// const btn = document.querySelector(".btn");
// const container = document.querySelector(".img-container");

// const url = "https://source.unsplash.com/fe";

// btn.addEventListener("click", () =>
//   loadImage(url).then((data) => container.appendChild(data))
// );

// //load image data

// function loadImage(url) {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     //loading image....
//     img.addEventListener("load", () => {
//       {
//         resolve(img);
//       }
//     });
//     //for getting an error
//     //fire event for this
//     img.addEventListener("error", () => {
//       reject(new Error(`Failled to load an image from source: ${url}`));
//     });

//     img.src = url;
//   });
// }

// const x = [1, 2, 3];
// x[10] = 10;
// console.log(x.length); //11
//===================================================================================
// const getCountryName = function () {
//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.OPENED;

//   xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
//   xmlhttp.send();
//   const result = fetch(
//     `https://www.worldometers.info/geography/how-many-countries-in-europe/`
//   ).then((response) => response.json());
//   return result;
// };

// getCountryName();

//======================================================================================
//======================================================================================
//=============scope chaining=================================

// const a = "jonas";
// //call
// first();
// function first() {
//   const b = "Hi";
//   second();

//   function second() {
//     const c = "Hello";
//   }
//   third();
// }

// function third() {
//   const d = "Bye";
//   console.log(d + c + b + a);
// }

//refenrenceError : b and c not this scope
//they are not accessible out of function

let name = "sameer";

console.log(name);
//==========================================================================
