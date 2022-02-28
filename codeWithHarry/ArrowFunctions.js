// Arrow Functions 

// Creating a regular Function
function Arman(){
    console.log("Arman is the best Person");
}

// Creating a arrow function
const Programmer = ()=>{
    return (Arman()," and Excellent Programmer.");
}

// 1 liners do not required braces/return statement && argument is one so () is not required
const Greet = msg => `${Programmer()} Good Afternoon to ${msg} `;

// if returning an object through arrow function && since it has 2 arguments therefore () is required
const obj = (name , place)=> ({
    name : name,
    place : place})

console.log(Greet("everyone"));
console.log(obj("Arman" , "Jamshedpur"));

