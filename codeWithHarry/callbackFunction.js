const students = [
    {
        name : "Arman",
        subject : "JavaScript"
    },
    {
        name : "Rattu",
        subject : "Django"
    },
    {
        name : "Ayush",
        subject : "Adrino"
    }
]
function enrollStudent(student ,callback){
    setTimeout(()=>{    // this function inside settimeout(a callback function) will be excuted after 3 seconds
        students.push(student);
        console.log("Student has been enrolled .")
        callback(); // this will be called after student has been enrolled;
    },3000);
    

}
function getlStudents(){
    setTimeout(() => {
        let str ="";
        students.forEach((student)=>{
            str+=`<li>${student.name}</li>`
        })
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched .")
    }, 1000);
    
    
}

let newStudent = {name : "Jay" , subject : "DataScience"}
enrollStudent(newStudent ,getlStudents);
// getlStudents();