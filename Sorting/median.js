"use strict"

function sortedArray(array)
{
    array.sort(function (left, right) {
        return left - right;
    })

}




sortedArray([92, 98, 84, 76, 89, 99, 100]);
console.log("--------------------------------");
sortedArray([82, 98, 94, 88, 92, 100, 100])