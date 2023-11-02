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

function getMedian(array, modulus)
{
    let median = 0;
    let length = array.length;

    if (modulus == 0)
    {
        let firstNum = (length/2)-1;
        let secondNum = firstNum + 1;

        let medianAverage = array[firstNum] + array[secondNum];
        median = medianAverage/2

        // for (let i = firstNum; i < (secondNum + 1); i++)
        // {
        //     median = median + array[i];
        // }
    }
    else 
    {
        index = parseInt(length / 2);
        median = array[index];
    }
    

     return +(median.toFixed(2))
}


sortedArray([92, 98, 84, 76, 89, 100]);
console.log("--------------------------------");
// sortedArray([82, 98, 94, 88, 92, 100, 100])