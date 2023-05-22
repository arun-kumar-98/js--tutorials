class Solution {
  digitsInFactorial(N) {
    if (N < 0) return 0;
    if (N <= 1) return 1;
    let count = 0;
    for (let i = 2; i <= N; i++) {
      count += Math.log10(i);
    }
    return Math.floor(count) + 1;
  }
}

console.log(new Solution().digitsInFactorial(120));
