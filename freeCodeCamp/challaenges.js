// let x;
// {
//   var x = 10;
//   console.log(x);
// }
// if (MY_FAV === 7) {
//   // this is fine and creates a block scoped MY_FAV variable
//   // (works equally well with let to declare a block scoped non const variable)
//   let MY_FAV = 20;

//   // MY_FAV is now 20
//   console.log("my favorite number is " + MY_FAV);

//   // this gets hoisted into the global context and throws an error
//   var MY_FAV = 20;
// }

// MY_FAV is still 7
//console.log("my favorite number is " + MY_FAV);

// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myStr);

// let myStr = "This is the first sentence";
// myStr += ". This is the seond sentence.";
// console.log(myStr);

//
// const myArray = [50, 60, 70];
// const myData = myArray[0];
// console.log(myData);

// const myArray = [
//   ["John", 23],
//   ["cat", 2],
// ];

// myArray.push(["dog", 3]);
// console.log(myArray);

// const myArray = [
//   ["John", 23],
//   ["cat", 2],
// ];

// const removeFromArray = myArray.pop();
// console.log("remove      " + removeFromArray);
// console.log("remainig     " + myArray);

// const myArray = [
//   ["John", 23],
//   ["dog", 3],
// ];

// // Only change code below this line

// const removedFromMyArray = myArray.shift();
// console.log(removedFromMyArray);

// const myArray = [
//   ["John", 23],
//   ["dog", 3],
// ];
// myArray.shift();

// // Only change code below this line

// console.log(myArray);
// myArray.unshift(["Paul", 35]);
// console.log(myArray);

function trueOrFalse(wasThatTrue) {
  // Only change code below this line

  if (wasThatTrue) {
    return "Yes, that was true ";
  }
  return "No, Yes, that was true ";

  // Only change code above this line
}
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));
