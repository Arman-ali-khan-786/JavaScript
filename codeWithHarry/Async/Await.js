async function myName(){  // async returns a promise
    console.log("Inside function");
    const response = await fetch('https://api.github.com/users');
    console.log("before response")
    const users = await response.json();
    console.log('Users resolved');
    return  users;  // at this return the promise is resolve and control shifts to .then function
    // return "Arman";
}
console.log("before calling function");
const a = myName();
console.log("after calling function");
console.log(a);
a.then(data => console.log(data[2]))  // jab bhi a wahi promise resolve hoti h tho ye wali function execute kardo
console.log("Last line of js file");
