// document.write("Hello  javascript world");
// alert("Hello World");
// console.log("Hello World");

// document.write({ name: "arun" });
// alert({ name: "aun" });
// console.log("==============", { name: "arun" });

//  ==============VARIABLES=================
// console.log("john steak burrito V");

// let name = "ads";
// console.log(name);

// //assign values
// let address, zip, state;
// address = "101 main street road vip";
// zip = "909090";
// state = "CA";

// console.log(name);
// console.log(address);
// console.log(zip);
// console.log(state);

//========String Concatenation===========
//========Single Quotation===============
//========Number Basics==================
console.log("=========Number==========");

const number = 2.23;
const num1 = 2;

console.log(num1);
console.log(number);

//==============Number Challenges============

//1.create variable score1,score2,score3 and assign them values (0-100)
// calculate total and avg score and assign them to a variable

const score1 = Math.floor(Math.random() * 100) + 0;
const score2 = Math.floor(Math.random() * 100) + 0;
const score3 = Math.floor(Math.random() * 100) + 0;

const totalNUmber = score1 + score2 + score3;
console.log("total NUmber " + totalNUmber);

const avgOfRandomNumers = (score1 + score2 + score3) / 3;
console.log("average of random numbers " + Math.floor(avgOfRandomNumers));

//2.create a plates variable and assign 20 ,creates peoples assign 7
//task: calculate remainig plates and assing to   a variable
//task:add 1 to the remainig plates

const plates = 20;
const peoples = 7;
let remainigPlates = plates % peoples;
console.log(remainigPlates);

remainigPlates += 1;
console.log(remainigPlates);
const name = "arun";
let message = "There are " + remainigPlates + " plates available";
console.log(message);

//Number

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let result = null;
let name1;

console.log("🔥🔥");
console.log(typeof result);
console.log(typeof name1);
