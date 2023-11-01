"use strict"

function getStartDateCourseId(courses, courseId)
{
    // 1. create container
    const withCourseIdStartDate = [];

    // 2. get the start date of the given courseId
    for (let i = 0; i < courses.length; i++)
    {
        const courseItem = courses[i];

        if (courseItem.CourseId == courseId)
        {
            withCourseIdStartDate.push(courseItem);
        }
    }

    // 3. return
    // return withCourseIdStartDate;

    console.log("When does the PROG200 course start?");
    for (let i =0; i < withCourseIdStartDate.length; i++)
    {
        console.log(withCourseIdStartDate[i].StartDate);
    }
    console.log("-----------------------------------");
}

function getTitle(courses, courseId)
{
    //  1. create container
    const withCourseIdTitle = [];

    // 2. get the title of the given courseId
    for (let i =0; i < courses.length; i++)
    {
        const courseItem = courses[i];

        if (courseItem.CourseId == courseId)
        {
            withCourseIdTitle.push(courseItem);
        }
    }

    // 3. return
    // return withCourseIdTitle;

    console.log("What is the title of the PROJ500 course?");
    for (let i =0; i < withCourseIdTitle.length; i++)
    {
        console.log(withCourseIdTitle[i].Title);
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

getStartDateCourseId(courses, "PROG200");
getTitle(courses, "PROJ500");
