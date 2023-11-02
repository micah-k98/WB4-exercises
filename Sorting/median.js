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
    let modulus = array.length % 2;

    let average = getAverage(array);
    let median = getMedian(array, modulus);
}


sortedArray([92, 98, 84, 76, 89, 100]);
console.log("--------------------------------");
// sortedArray([82, 98, 94, 88, 92, 100, 100])