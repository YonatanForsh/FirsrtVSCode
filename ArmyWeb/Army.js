const sessions = [
    {
        Date: "2024-09-01",
        Instructor: "John Doe",
        Description: "Introduction to JavaScript",
        Duration: "2 hours",
        Equipment: "Laptop"
    },
    {
        Date: "2024-09-02",
        Instructor: "Jane Smith",
        Description: "Advanced CSS Techniques",
        Duration: "1.5 hours",
        Equipment: "Laptop, Internet Connection"
    },
    {
        Date: "2024-09-03",
        Instructor: "Michael Johnson",
        Description: "Responsive Web Design",
        Duration: "2.5 hours",
        Equipment: "Laptop"
    },
    {
        Date: "2024-09-04",
        Instructor: "Emily Brown",
        Description: "JavaScript ES6 and Beyond",
        Duration: "3 hours",
        Equipment: "Laptop, Text Editor"
    },
    {
        Date: "2024-09-05",
        Instructor: "Chris Davis",
        Description: "Web Accessibility",
        Duration: "1 hour",
        Equipment: "Laptop, Screen Reader"
    },

    {
        Date: "2024-09-06",
        Instructor: "Patricia Wilson",
        Description: "Version Control with Git",
        Duration: "2 hours",
        Equipment: "Laptop, Git Installed"
    },
    {
        Date: "2024-09-07",
        Instructor: "Robert Martinez",
        Description: "Intro to Node.js",
        Duration: "2.5 hours",
        Equipment: "Laptop, Node.js Installed"
    }
];

console.log(sessions);

function fillDetails(number){
    const training = sessions[number]
    localStorage.setItem("Training", JSON.stringify(training))
    window.location.href = "regist.html";
    document.getElementById()
}