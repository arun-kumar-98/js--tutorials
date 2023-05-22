/**
 * LCM
 *
 */

//NAIVE APPROACH

function lcm(x, y) {
  let leastNumber = Math.max(x, y);

  while (true) {
    if (leastNumber % x == 0 && leastNumber % y == 0) {
      return leastNumber;
    }
    leastNumber++;
  }
}
console.log(lcm(2, 4));

//time complexity:: O(a*b-max(a,b))

function myGcd(a, b) {
  let minNumber = Math.min(a, b);
  while (minNumber > 0) {
    if (a % minNumber == 0 && b % minNumber == 0) return minNumber;
    minNumber--;
  }

  return minNumber;
}

function optimizedLCM(x, y) {
  const leastNumber = myGcd(x, y);
  return (x * y) / leastNumber;
}
console.log(optimizedLCM(4, 6));

//time cmplexity:====> O(log min(a,b))
