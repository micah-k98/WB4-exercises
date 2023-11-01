"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
];

products.sort(function (left, right) {
    if (left.product < right.product) return -1;
    else return 1;
})
console.table(products);

console.log("-----------------------------------------");

products.sort( (left, right) => {
    return right.price - left.price;
})
console.table(products);
