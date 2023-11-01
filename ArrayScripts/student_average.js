"use strict"

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
];

getStudentAverageScore(students);

function getStudentAverageScore(students)
{
    let length = students.length;
    let studentName = "";

    for (let i = 0; i < length; i++)
    {
        let scores = 0;
        studentName = students[i].name; 

        let scoreLength = students[i].scores.length;

        for (let j = 0; j < scoreLength; j++)
        {
            scores = scores + students[i].scores[j];
        }

        let average = scores / scoreLength;
        console.log(`${studentName}'s average is ${average.toFixed(2)}`);
    }
}