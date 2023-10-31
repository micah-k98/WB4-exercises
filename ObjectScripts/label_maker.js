"use strict"


const label = {
    name: "Anya Forger",
    address: "128 Park Avenue",
    city: "Spy City",
    state: "Westalis",
    zip: "007"
}

printContact(label);


function printContact(label)
{
   console.log(label.name);
   console.log(label.address);
   console.log(`${label.city}, ${label.state} ${label.zip}`);
}