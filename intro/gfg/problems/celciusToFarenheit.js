class Solution {
  cToF(C) {
    const farenheit = Math.floor((C * 9) / 5 + 32);
    return farenheit;
  }
}

const result = new Solution().cToF(50);
console.log(result);
