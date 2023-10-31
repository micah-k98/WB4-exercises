"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

let myAverage = getAverage(myScores);
let yourAverage = getAverage(yourScores);

console.log(`My average is ${myAverage}`);
console.log(`Your average is ${yourAverage}`);

function getAverage(scores)
{
    let length = scores.length;
    let totalScores = 0;

    for (let i = 0; i < length; i++)
    {
        totalScores = totalScores + scores[i];
    }

    return +(totalScores / length).toFixed(2);
}