"use strict"

let lunch = [
    {item: "Philly Roll with Tuna", price: 15.00},
    {item: "House Salad", price: 3.99},
    {item: "Raspberry Tea", price: 2.79}
];

let subtotal = getSubtotal(lunch);
let tax = getTax(subtotal);
let tip = getTip(subtotal);
let totalPrice = getTotalPrice(subtotal, tax, tip);

console.log(`Subtotal: $${subtotal}`);
console.log(`Tax: $${tax}`);
console.log(`Tip: $${tip}`);
console.log(`Total Price: $${totalPrice}`);


function getSubtotal(lunch)
{
    let length = lunch.length;
    let subtotal = 0;

    for ( let i = 0; i < length; i++)
    {
        subtotal = subtotal + lunch[i].price;
    }

    return subtotal;
}

function getTax(subtotal)
{
    return +(subtotal * .08).toFixed(2);
}

function getTip(subtotal)
{
    return +(subtotal * .18).toFixed(2);
}

function getTotalPrice(subtotal, tax, tip)
{
    return +(subtotal + tax + tip).toFixed(2);
}