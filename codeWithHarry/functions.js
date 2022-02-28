// functions in JavaScript

function greet(name , msg = "have a good day."){
    console.log(`Happy Birthday ${name} and ${msg}`)
}
// or 
const myWish = function(name){
    return msg = `hi , ${name} hopefully you are well ,`;
}

let name1 = "Simba";
let name2 = "cheeti";
let wish = myWish(name2); // function expressions


greet(name1);  // a function call
console.log(wish)
greet(name2, "party dediyo bhai santi se .")



// function returning value

function add(num1, num2){
    let sum = num1+num2;
    return sum;
}

let n1=4 , n2=5;
let sum = add(n1,n2)
console.log(sum)

// functions in objects 

const myObj = {
    name : "Arman",
    game : function(){
        return "COC";
    }
}
console.log(`Hi i am ${myObj.name} and i play ${myObj.game()}`)

// Scopes in function
let j = 8 ; 
var k = 6;
{
    let i = 567;
    j=10;
    console.log(i , j , k);
}
function hi(){
    let i = 34;
    j=9;
    k=10;
    console.log(i , j , k);
}
hi();
console.log( j , k);