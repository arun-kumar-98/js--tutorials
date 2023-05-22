function calculateTotal(subTotal, tax) {
  return subTotal + tax;
}
console.log(calculateTotal(10, 20));

let order1, order2, order3;

order1 = calculateTotal(10, 5);
order2 = calculateTotal(5, 10);
order3 = calculateTotal(100, 25);

console.log(order1, order2, order3);
