/**
 * priint number
 */

// function fun(n) {
//   if (n == 0) return 0;
//   console.log("GFG");
//   fun(n - 1);
// }

//fun(3);

// function fn(n) {
//   if (n == 0) return 0;
//   console.log("***", n);
//   fn(n - 1);
//   console.log("####", n);
// }
// fn(3);

//=================================================//
//=================================================//

// function func(n) {
//   if (n == 0) return;

//   func(n - 1);
//   console.log(n);
//   func(n - 1);
// }
// func(3);

//===================================================
//===================================================
//===================================================
//===================================================

function fun5(n) {
  if (n == 1) return 0;
  return 1 + fun5(Math.floor(n / 2));
}

console.log(fun5(16));

function fun6(n) {
  if (n == 0) return 0;
  fun6(Math.floor(n / 2));
  console.log(n % 2);
}

console.log(fun6(10));
