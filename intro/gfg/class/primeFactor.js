/**
 * NAIVE APPROACH
 *
 *
 *
 *
 * time complexity  O(N^3/2 logN)
 */

// function isPrimeNumber(n) {
//   //check base cases
//   if (n === 1) return false;
//   if (n === 2 || n === 3) return true;
//   if (n % 2 === 0 || n % 3 === 0) return false;
//   for (let i = 5; i * i <= n; i = i + 6) {
//     if (n % i === 0 || n % (i + 2) === 0) return false;
//   }
//   return true;
// }

// function pFactor(n) {
//   for (let i = 2; i < n; i++) {
//     if (isPrimeNumber(i)) {
//       let x = i;

//       while (n % x === 0) {
//         console.log(i);
//         x = x * i;
//       }
//     }
//   }
// }

// pFactor(12);

//======================================================================
//======================================================================
//======================================================================
//======================================================================

/**
 * optimized
 */

function pFactorOptimized(number) {
  //if number less than number
  if (number <= 1) return;
  //checking
  for (let i = 2; i * i <= number; i++) {
    console.log("=============", i);
    while (number % i == 0) {
      console.log(i);
      number = number / i;
      console.log(number);
    }
    if (number >= 1) {
      console.log("##############################", i);
    }
  }
}

pFactorOptimized(28);
