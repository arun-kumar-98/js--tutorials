class Solution {
  isPrime(N) {
    if (N <= 1) return false;
    if (N == 2 || N == 3) return true;
    if (N % 2 == 0 || N % 3 == 0) return false;

    for (let i = 5; i * i <= N; i = i + 6) {
      if (N % i == 0 || N % (i + 2) == 0) return false;
    }
    return true;
  }
}
console.log(new Solution().isPrime(32));
