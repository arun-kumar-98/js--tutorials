/**
 *
 */

//NAIVE APPROACH

function myGcd(a, b) {
  let minNumber = Math.min(a, b);
  while (minNumber > 0) {
    if (a % minNumber == 0 && b % minNumber == 0) return minNumber;
    minNumber--;
  }
  return minNumber;
}

console.log(myGcd(10, 15));
