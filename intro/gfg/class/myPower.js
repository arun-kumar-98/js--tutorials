/**
 * computing power for a number
 *
 * e.g x^n  2^3=8
 */

function myPow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result = result * x;
  }
  return result;
}
console.log(myPow(2, 5));
