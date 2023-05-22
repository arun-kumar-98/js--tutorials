/**
 * NAIVE  APPROACH
 * time complexity  ==>  theta(N) pace : auxiliary theta(N)
 */

function div(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}

//div(6);

console.log("============code optimization==================");

/**
 * optimized
 *
 *
 *
 * T.C   O(sqrt root N)
 * space complexity : AUXILAIARY O(1)
 *
 *
 *
 */

function div1(n) {
  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      console.log(i);
      if (i != n % i) {
        console.log(n / i);
      }
    }
  }
}

//div1(12);

/**
 * print divisorsin sorted order
 */

function div2(n) {
  for (let i = 1; i * i < n; i++) {
    if (n % i == 0) {
      console.log(i);
    }

    for (; i >= 1; i--) {
      if (n % i == 0) {
        console.log(i);
      }
    }
  }
}

div2(25);
