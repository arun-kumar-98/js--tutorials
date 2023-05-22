/**
 *
 * PRIME NUMBER
 */

//NAIVE APPROACH

function prime(number) {
  if (number == 1) return false;

  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }
  return true;
}
console.log(prime(13));
//===========================================================
//=======bit optimzed in time complexity=====================

/**
 *
 * @param {*} n
 * @returns booleane
 *
 * time compelexity O(square root(n))
 */
function isPrime(n) {
  if (n === 1) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(8));

//more optimized

/**
 *
 * @param {*} n
 * @returns Boolen
 *
 * time complexity O(square root(N))
 */
function isPrimeNumber(n) {
  //check base cases
  if (n === 1) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

console.log(isPrimeNumber(1031));
