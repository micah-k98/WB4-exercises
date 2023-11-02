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

    console.log(`Who is the Academy Member whose ID is ${memId}?`);
    console.log(`  ${academyMember}`);
    console.log("--------------------------------------------------------");
}

function countNumberOfFilms(academyMembers, requiredNumOfFilms)
{
    const withRequiredNumOfFilms = [];

    for (let i = 0; i < academyMembers.length; i++)
    {
        if (academyMembers[i].films.length >= requiredNumOfFilms)
        {
            withRequiredNumOfFilms.push(academyMembers[i]);
        }
    }

    console.log(`Who has have been in at least ${requiredNumOfFilms} films?`);
    for (let i = 0; i < withRequiredNumOfFilms.length; i++)
    {
        console.log(`  ${withRequiredNumOfFilms[i].name}`);
    }
    console.log("--------------------------------------------------------");
}

function getNameStartsWith(academyMembers, name)
{
    const nameStartsWith = [];

    for (let i = 0; i < academyMembers.length; i++)
    {
        if (academyMembers[i].name.indexOf(name) != -1 )
        {
            nameStartsWith.push(academyMembers[i]);
        }
    }

    console.log(`Who has a name that starts with ${name}?`);
    for (let i = 0; i < nameStartsWith.length; i++)
    {
        console.log(`  ${nameStartsWith[i].name}`);
    }
    console.log("--------------------------------------------------------");
}

function getMemberWithFilm(academyMember, filmStartsWithLetter)
{
    const membersWithFilm = [];

    for (let i = 0; i < academyMembers.length; i++)
    {
        let filmLength = academyMembers[i].films.length;
        let memberName = "";

        for (let j = 0; j < filmLength; j++)
        {
            if (academyMembers[i].films[j].indexOf(filmStartsWithLetter) != -1)
            {
                memberName = academyMembers[i].name;
            }
        }

        if (memberName != "") membersWithFilm.push(memberName);
    }

    console.log(`Which Academy Members have been in a film that starts with ${filmStartsWithLetter}?`);
    for (let i = 0; i < membersWithFilm.length; i++)
    {
        console.log(`  ${membersWithFilm[i]}`);
    }
    console.log("--------------------------------------------------------");
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
countNumberOfFilms(academyMembers, 3); // Who has have been in at least 3 films?
getNameStartsWith(academyMembers, "Bob"); // Who has a name that starts with "Bob"?
getMemberWithFilm(academyMembers, "A") // Which Academy Members have been in a film that starts with "A"