// if and else in JavaScript

const age = 19 ;
if(age>=18){
    console.log("eligible to vote")
}
else{
    console.log("you cannot vote")
}
console.log(" ")


// if , else if and else

let cgpa = 9.89;
if(cgpa==10){
    console.log("You are welcome in our college")
}
else if(cgpa>=9 &&cgpa<10){
    console.log("you have to give a test")
}
else{
    console.log("sorry!, try again next year .")
}
console.log(" ")


// example of equal to operator

let mark = '45';
if(mark == 45){  // checks value and not type
    console.log("true")
}else{
    console.log("false")
}
if(mark === 45){  // checks both value and type
    console.log("true1")
}else{
    console.log("false1")
}
console.log(" ")

// to check if a variable is defined or not

let num = 34;
if(typeof num !== 'undefined'){
    console.log("num variable is defined ")
}else{
    console.log("num variable is not defined")
}
if(typeof num2 !== 'undefined'){
    console.log("num2 variable is defined ")
}else{
    console.log("num2 variable is not defined")
}

console.log(" ")

const canYouVote = true;
if(canYouVote && age >18){
    console.log("you can vote and drive.")
}
else{
    console.log("you cannot vote")
    if(age>18){
        console.log("but you can drive.")
    }
    else{
        console.log(" and drive")
    }
}
console.log(" ")


// Ternary operator

console.log(age>18 ? `you are an adult` : `you are a teenager`);
console.log(" ");


// switch statements

    let programmer = true;
    // let programmer = false;
    switch (programmer) {
        case true:
            console.log("You are a programmer");
            break;
        case false:
            console.log("You are not a programmer");
            break;
        default:
            console.log("Invalid answer")
            break;
    }