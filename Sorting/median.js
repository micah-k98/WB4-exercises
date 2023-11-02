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

function getAverage(array)
{
    let length = array.length;
    let totalScores = 0;

    for (let i = 0; i < length; i++)
    {
        totalScores = totalScores + array[i];
    }

    return +(totalScores / length).toFixed(2);
}


sortedArray([92, 98, 84, 76, 89, 100]);
console.log("--------------------------------");
// sortedArray([82, 98, 94, 88, 92, 100, 100])