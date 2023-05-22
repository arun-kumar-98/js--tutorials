class Solution {
  utility(a, r, n) {
    // if (n <= 0) return 1;
    const result = a * Math.pow(r, n - 1);
    return result;
  }
}
console.log(new Solution().utility(2, 2, 10));
