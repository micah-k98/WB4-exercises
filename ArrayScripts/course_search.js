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

function getTitles(courses)
{
    // 1. create container
    const with50DollarsOrLess = [];

    // 2. get the titles of courses that cost $50 or less
    for (let i =0; i < courses.length; i++)
    {
        const courseItem = courses[i];

        if (+courseItem.Fee <= 50)
        {
            with50DollarsOrLess.push(courseItem);
        }
    }

    // 3. return
    console.log("What are the titles of the courses that cost $50 or less?");
    for (let i =0; i < with50DollarsOrLess.length; i++)
    {
        console.log(with50DollarsOrLess[i].Title);
    }
    console.log("-----------------------------------");
}

function getClasses(courses, classRoom)
{
    // 1. create container
    const classesMeetIn = [];

    // 2. get the titles of courses that cost $50 or less
    for (let i =0; i < courses.length; i++)
    {
        const courseItem = courses[i];

        if (courseItem.Location == classRoom)
        {
            classesMeetIn.push(courseItem);
        }
    }

    // 3. return
    console.log("What classes meet in \"Classroom 1\"?");
    for (let i =0; i < classesMeetIn.length; i++)
    {
        console.log(classesMeetIn[i].Title);
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
getTitles(courses);
getClasses(courses, "Classroom 1");
