const students = [
    {
      id: 1,
      fullName: "Moshe Goldberg",
      age: 20,
      degree: "Computer Science",
      grades: [85, 92, 78, 95, 88],
      isPaid: true,
      enrollmentDate: new Date("2021-09-01")
    },
    {
      id: 2,
      fullName: "Rachel Shapiro",
      age: 22,
      degree: "Biology",
      grades: [76, 88, 92, 79, 85],
      isPaid: false,
      enrollmentDate: new Date("2020-09-01")
    },
    {
      id: 3,
      fullName: "Avi Cohen",
      age: 21,
      degree: "Psychology",
      grades: [90, 85, 88, 92, 79],
      isPaid: true,
      enrollmentDate: new Date("2021-01-15")
    },
    {
      id: 4,
      fullName: "Sarah Levy",
      age: 19,
      degree: "Engineering",
      grades: [95, 88, 92, 97, 91],
      isPaid: true,
      enrollmentDate: new Date("2022-09-01")
    },
    {
      id: 5,
      fullName: "David Friedman",
      age: 23,
      degree: "Business Administration",
      grades: [82, 78, 85, 80, 88],
      isPaid: false,
      enrollmentDate: new Date("2019-09-01")
    },
    {
      id: 6,
      fullName: "Esther Rosenbaum",
      age: 20,
      degree: "Nursing",
      grades: [88, 92, 85, 90, 87],
      isPaid: true,
      enrollmentDate: new Date("2021-09-01")
    },
    {
      id: 7,
      fullName: "Yakov Stern",
      age: 22,
      degree: "Physics",
      grades: [91, 95, 88, 93, 89],
      isPaid: true,
      enrollmentDate: new Date("2020-09-01")
    },
    {
      id: 8,
      fullName: "Miriam Katz",
      age: 21,
      degree: "English Literature",
      grades: [87, 82, 90, 85, 88],
      isPaid: false,
      enrollmentDate: new Date("2021-01-15")
    },
    {
      id: 9,
      fullName: "Eli Bernstein",
      age: 20,
      degree: "Chemistry",
      grades: [89, 93, 86, 91, 88],
      isPaid: true,
      enrollmentDate: new Date("2022-09-01")
    },
    {
      id: 10,
      fullName: "Leah Weiss",
      age: 22,
      degree: "Economics",
      grades: [84, 88, 92, 79, 86],
      isPaid: false,
      enrollmentDate: new Date("2020-09-01")
    }
  ];


function getAverage(nums)
{
    const length = nums.length
    let sum = 0
    for (let i = 0; i< nums.length; i++)
    {
        sum += nums[i]
    }
    return sum/length;
}


function paidCount()
{
    let paid = 0
    for (const student of students)
    {
        if (student.isPaid)
        {
            paid += 1
        }
    }
    const notPaid = students.length -paid
    return "student that paid: " + paid + " student that not paid:" + notPaid;
}


function nameAndAverage()
{
    for (let i = 0; i< students.length; i++)
    {
        console.log(students[i].fullName, getAverage(students[i].grades))
    }
    console.log(paidCount());
    
}

nameAndAverage()

function myFunction()
{
    
}
let a = students.forEach(myFunction)