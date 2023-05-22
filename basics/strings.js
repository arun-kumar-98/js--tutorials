// let text = " Peter Jordan";

// const result = text.length;
// console.log(result);
// console.log(text.length);
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.charAt(1));
// console.log(text.charAt(text.length - 1));
// console.log(text.indexOf("e"));

// console.log(text.trim());
// console.log(text.trim().toLowerCase().startsWith("peter"));
// console.log(text.includes("eter"));
// console.log(text.slice(0, 3));
// console.log(text.slice(-3));

// //string literals

// let name = "John";
// let age = 25;

// let result1 = "Hey its " + name + " and age is " + age;
// console.log(result1);

// //same ES6
// // interpolaration notation   ${}

// let response = `Hey its ${name} and age is ${age}`;
// console.log(response);

// //##8
// //using string literals
// function fullName(firstName, lastName) {
//   let fullName = firstName + " " + lastName;
//   return fullName.toUpperCase();
// }
// console.log(fullName("arun", "kumar"));

// console.log(fullName("kumar", "arun"));

// //es6 interpolaration

// function fullName1(firstName, lastName) {
//   let fullNames = `${firstName} ${lastName}`;
//   return fullNames.toUpperCase();
// }

// console.log(fullName1("arun", "kumar"));
// console.log(fullName1("kumar", "arun"));

// //object refector
// function fname({ firstName, lastName }) {
//   let fnames = `${firstName} ${lastName}`;
//   return fnames.toUpperCase();
// }

// console.log(fname({ firstName: "arun", lastName: "sharma" }));

// console.log(fname({ firstName: "kumar", lastName: "arun" }));

// //=======================ARRAY==============================

// const names = ["john", "bob", "miller", "marks"];
// console.log(names.length);
// console.log(names[0]);
// console.log(names[names.length - 1]);

// //concat array

// const lastNames = ["peter", "sillir", "wood"];
// const allNames = names.concat(lastNames);
// console.log(allNames);

// ///reverse array

// const reverse = allNames.reverse();
// console.log(reverse);

// //unshift() : ADDING ELEMENTS TO FIRST INDEX IN THE ARRAY
// allNames.unshift("susy");
// allNames.unshift("banana");
// allNames.unshift("onion");
// console.log(allNames);
// //shift() : REMOVING ELEMENTS FROM FIRST INDEX IN ARRAY
// allNames.shift();
// allNames.shift();
// allNames.shift();
// console.log(allNames);

// //push :ADDING ELEMENT IN THE  LAST
// allNames.push("susy");
// console.log(allNames);

// //pop(): REMOVING ELEMENTS FROM LAST

// allNames.pop();
// allNames.pop();
// console.log(allNames);

// //splice(): MUTATES ORIGINAL ARRAY

// console.log(allNames.splice(0, 1));

// console.log(allNames.splice(3, 3));

// //  SHALLOW COPY

// let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];

// let ingredients_list_copy = Array.from(ingredients_list);
// console.log(JSON.stringify(ingredients_list_copy));
// // ["noodles",{"list":["eggs","flour","water"]}]

// //==============================//============
// ingredients_list_copy[1].list = ["rice flour", "water"];
// console.log(ingredients_list[1].list);
// // Array [ "rice flour", "water" ]
// console.log(JSON.stringify(ingredients_list));
// // ["noodles",{"list":["rice flour","water"]}]

// //================//===========================
// ingredients_list_copy[0] = "rice noodles";
// console.log(ingredients_list[0]);
// // noodles
// console.log(JSON.stringify(ingredients_list_copy));
// // ["rice noodles",{"list":["rice flour","water"]}]
// console.log(JSON.stringify(ingredients_list));
// // ["noodles",{"list":["rice flour","water"]}]

//========================================================================//

//=======================================================================//

// const names = ["bob", "susy", "peter", "miller"];
// const newArray = [];
// const lastName = "micheal";
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
//   newArray.push(`${names[i]} ${lastName}`);
// }

// console.log(newArray);
// //=================================================================//

// const food = [40, 10, 50];
// const gas = [200, 350, 400];

// function totalCalculate(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     total += arr[i];
//   }

//   return total;
// }

// const totalGas = totalCalculate(gas);
// const totalFood = totalCalculate(food);
// const totalRandom = totalCalculate([300, 500, 150]);

// console.log({
//   gas: totalGas,
//   food: totalFood,
//   random: totalRandom,
// });

// console.group(" group of expenses");
// console.log("gas expenses " + totalGas);
// console.log("food expenses " + totalFood);
// console.log(" random expenses " + totalRandom);
// console.groupEnd();

// GLOBAL SCOPE

let name = "bobo";
name = "peter";

console.log(name);

function calculate() {
  console.log(name);
  name = "orange";
  function inner() {
    name = "This is my inner value";
    console.log(`This is your ${name}`);
  }
  inner();
}

calculate();
if (true) {
  console.log(name);
  name = "pants";

  console.log(`this is your awesome  ${name}`);
}
