/**
 * TRAILING FACTORIAL IN JS
 *
 *
 * APPROACH :: NAIVE APPOROACH
 */

//recursion

// function funFactorial(n) {
//   if (n == 1) return 1;
//   return n * funFactorial(n - 1);
// }

// function factorial(n) {
//   let fact = 0;
//   //   for (let i = 2; i <= n; i++) {
//   //     fact = fact * i;
//   //   }
//   fact = funFactorial(n);

//   console.log(fact);
//   let zeroTrailingCount = 0;
//   while (fact % 10 == 0) {
//     zeroTrailingCount++;
//     fact = fact / 10;
//   }
//   return zeroTrailingCount;
// }
// console.log(factorial(25));

// OPTIMIZED SOLUTION

/**
 *
 * @param {*} n
 * @returns  count of zero
 *
 *
 * TIME : O(logn) i=i*5 here  log to base 5 then n log5n
 *
 * space :O(1)
 */

function countTralingZeros(n) {
  let remainder = 0;

  for (let i = 5; i <= n; i = i * 5) {
    remainder = remainder + Math.floor(n / i);
  }
  return remainder;
}

console.log(countTralingZeros(25));
