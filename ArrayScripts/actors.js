"use strict"

function getAcademyMember(academyMembers, memId)
{
    let academyMember = "";

    for (let i = 0; i < academyMembers.length; i++)
    {
        if (academyMembers[i].memID == memId)
        {
            academyMember = academyMembers[i].name;
        }
    }

    console.log("Who is the Academy Member whose ID is 187?");
    console.log(academyMember);
}

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
];

getAcademyMember(academyMembers, 187); // Who is the Academy Member whose ID is 187?