console.log("JavaScript is connected!");
alert("Hello from JavaScript!");

function getGrade(marks) {
    if (marks > 79) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks>= 50) {
        return "C";
    } else if (marks >= 40) {
        return "D";
    } else {
        return "E";
    }
}
let marks = prompt("Enter student marks (0-100):");
marks = Number(marks);

if (marks >= 0 && marks <= 100) {
    let grade = getGrade(marks);
    alert("Student grade is:" + grade);
}else {
    alert("Invalid marks entered.");
}


