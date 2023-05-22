/**
 * PROBLEM STATEMENT
 *
 *
 *
 *
 * PALLINDROM NUMBER
 */

function pallindrom(n) {
  let rev = 0,
    temp = n;
  if (temp === 1) return true;
  while (temp != 0) {
    let remainder = temp % 10; // /remainder
    rev = rev * 10 + remainder; //reversing  original number and forming new number so we can match
    temp = Math.floor(temp / 10); //eliminating every number for last
  }
  return n === rev;
}

console.log(pallindrom(363));

//time complexity:-theta(digit)
//space complexity:-O(1)
