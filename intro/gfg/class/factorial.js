/**
 * PROBLEM STATEMENT
 */

// function factorial(n) {
//   if (n === 0 || n === 1) return n;

//   let fact = 1;
//   // for loop
//   for (let i = 2; i <= n; i++) {
//     fact = fact * i;
//   }
// }

//console.log(factorial(1));

//RECURSIVE APPROACH

// function fact(n) {
//   if (n === 0) return 1;
//   let factorial = n * fact(n - 1);
//   return factorial;
// }
// console.log(fact(5));

//ADD NUMBERS USUNG RECUSION

// function sumOf(n) {
//   //check if n=0 then return 0
//   //else process to add elements
//   let sum = 0;
//   if (n == 1) return 1;

//   sum = n + sumOf(n - 1);
//   return sum;
// }
// console.log(sumOf(5));

//fibonacci series recursion

// function fibo(n) {
//   if (n == 0 || n == 1) return 1;
//   return fibo(n - 1) + fibo(n - 2);
// }

// console.log(fibo(6));

//while we declare class we can not do recursion
class Solution {
  factorial(N) {
    let facto = 0;
    if (N == 1) {
      return 1;
    } else {
      facto = N * factorial(N - 1);
      return facto;
    }
  }
}

console.log(new Solution().factorial(4));
