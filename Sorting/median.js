"use strict"

function sortedArray(array)
{
    array.sort(function (left, right) {
        return left - right;
    })

    evenOrOdd(array);
}

function evenOrOdd(array)
{
    if (array.length % 2 == 0)
    {
        console.log("Even array");
    }
    else console.log("Odd array");
}






sortedArray([92, 98, 84, 76, 89, 100]);
console.log("--------------------------------");
sortedArray([82, 98, 94, 88, 92, 100, 100])