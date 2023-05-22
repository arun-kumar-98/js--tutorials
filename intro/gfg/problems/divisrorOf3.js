class Solution {
  exactly3Divisors(N) {
    let count = 0;
    for (let i = 1; i <= N; i++) {}
    if (i % 3 == 0) {
      count++;
    }
    return count;
  }
}

console.log(new Solution().exactly3Divisors(10));
