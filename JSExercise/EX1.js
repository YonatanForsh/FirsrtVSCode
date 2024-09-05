const student = {
    Name: "",
    Id: 0,
    Year: 0,
    IsEnrolled: false
}


function createStudent(name, id, year, isEnrolled)
{
    if (year < 4 && year > 0)
        {
        let person = Object.create(student)
        person.Name = name
        person.Id = id
        person.Year = year
        person.IsEnrolled = isEnrolled
        return person;
        }
    else
    {
        console.log("Year is invalid!")
        return null;
    }
}

function addStudent(name, id, year, isEnrolled)
{
    const newStudent = createStudent(name, id, year, isEnrolled)
    if (newStudent != null)
    {
        University.students.push(newStudent)
    }
}


const University = 
{
    students: []
}

addStudent("Yony", 123, 3, true)
console.log(University.students)