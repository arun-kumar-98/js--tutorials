class Solution {
  absolute(I) {
    if (I < 0) {
      return -I;
    }
    return I;
  }
}
const result = new Solution().absolute(-45);
console.log(result);
