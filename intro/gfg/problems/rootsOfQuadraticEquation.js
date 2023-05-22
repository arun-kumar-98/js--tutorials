class Solution {
  quadraticRoots(a, b, c) {
    let root1, root2;

    const descriminant = Math.pow(b, 2) - 4 * a * c;
    console.log(descriminant);
    //descriminant >0
    if (descriminant > 0) {
      root1 = (-b + Math.sqrt(descriminant)) / (2 * a);
      root2 = (-b - Math.sqrt(descriminant)) / (2 * a);
      //   if (root1 < 0 && root2) {
      //     root1 = Math.floor(root1);
      //     root2 = Math.floor(root2);
      //   }

      root1 = root1 < 0 ? Math.floor(root1) : root1;
      root2 = root2 < 0 ? Math.floor(root2) : root2;

      return [root1, root2];
    } else if (descriminant == 0) {
      root1 = root2 = -b / (2 * a);

      return [root1, root2];
    } else {
      let real = -b / (2 * a).toFixed(4);
      //console.log("===== ", real);
      let imageRoot = Math.sqrt(-descriminant) / (2 * a).toFixed(4);
      root1 = `${real + imageRoot}i`;
      root2 = `${real - imageRoot}i`;
      console.log(`imaginary`);
    }
  }
}

// const result = new Solution().quadraticRoots(1, -2, 1);
// const [r1, r2] = result;
// console.log(result);

const result1 = new Solution().quadraticRoots(2, 8, 8);
console.log(result1);

// const [x, y] = result1;
// console.log(x, y);

//console.log(Math.floor(-0.2226));
