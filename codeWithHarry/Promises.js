// >> Promise :-
//   -- resolve
//   -- reject
//   -- pending

function func1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (!error) {
                console.log("Function : You request will be  resolved soon .");
                resolve("Hoorra , Promise have been fullfilled .");
            } else {
                console.log("Function : we are checking for some errors , please wait.")
                reject("Sorry , Promise not fulfilled.")
            }
        }, 2000);
    })
}
func1().then((success) => {
    console.log(success);
}).catch((error) => {
    console.log(error)
})

// promises on CallbackFunction.js

const students = [
    {
        name: "Arman",
        subject: "JavaScript"
    },
    {
        name: "Rattu",
        subject: "Django"
    },
    {
        name: "Ayush",
        subject: "Adrino"
    }
]
function enrollStudent(student) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            students.push(student);
            console.log("Student has been enrolled .")
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject();
            }
        }, 3000);
    })



}
function getlStudents() {
    setTimeout(() => {
        let str = "";
        students.forEach((student) => {
            str += `<li>${student.name}</li>`
        })
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched .")
    }, 1000);


}

let newStudent = { name: "Jay", subject: "DataScience" }
enrollStudent(newStudent).then(()=>{
    getlStudents();
}).catch(()=>{
    console.log("Some error ocurred .");
})
// getlStudents();