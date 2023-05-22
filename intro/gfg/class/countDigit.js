/**
 * problem statement:
 *
 * count number of digit
 */

function countNumberOfDigit(number) {
  if (number === 0) return 1;
  let count = 0;
  while (number > 0) {
    // OR condition (number!=0)
    //ignore floating number
    number = Math.floor(number / 10);
    count++;
  }
  return count;
}

//dry run

console.log(`number of counts   ${countNumberOfDigit(100)}`);

//time complexity:: theta(digit) or O(nlog10(n))
//space complexity:O(1)
