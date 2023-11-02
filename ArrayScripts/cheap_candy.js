"use strict"

function getCandyCost(products, price)
{
    const candiesWithPriceOf = [];

    for (let i = 0; i < products.length; i++)
    {
        if (+(products[i].price) < price)
        {
            candiesWithPriceOf.push(products[i]);
        }
    }

    console.log("Which candies costs less than $4.00?");
    for (let i = 0; i < candiesWithPriceOf.length; i++)
    {
        console.log(`${candiesWithPriceOf[i].product} --- ${candiesWithPriceOf[i].price}`);
    }
}

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
];

getCandyCost(products, 4); // Which candies costs less than $4.00?