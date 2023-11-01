"use strict"

function getStartDateProg200(courses, CourseId)
{
    // 1. create container
    const courseIdStartDate = [];

    // 2. get the start date of the given CourseId
    for (let i = 0; i < courses.length; i++)
    {
        const courseItem = courses[i];

        if (courses[i].CourseId == CourseId)
        {
            courseIdStartDate.push(courseItem);
        }
    }


    // 3. return
    return courseIdStartDate;
}

function displayOutput(courses)
{
    console.log("When does the PROG200 course start?");
    for (let i =0; i < courses.length; i++)
    {
        console.log(courses[i].StartDate);
    }
    console.log("-----------------------------------");
}


let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
];

const startDate = getStartDateProg200(courses, "PROG200");
displayOutput(startDate);