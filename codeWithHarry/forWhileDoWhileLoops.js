// for loop in JavaScript

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

//While loop in JavaScript

let j = 11;
while (j <= 20) {
    console.log(j)
    j++;
}

//Do while loop in JavaScript

let k = 21;
do {
    console.log(k)
    k++;
}while( k <= 30)


// methods of iteration 

console.log(" ");
console.log("Example of break statement");
// break statement    ------------------------------------------------------------

 let arr = [ "Arman" , "Ayush" , "rattu" , "Jharia" , "Himanshu" , "Sachin"];
 for ( let a = 0 ; a < arr.length ; a++){
     if(a == 3){
         break;
     }
     console.log(arr[a])
 }

 console.log(" ");
 console.log("Example of continue statement");


 // continue statement ------------------------------------------------------------   
 for ( let a = 0 ; a < arr.length ; a++){
    if(a == 3){
        continue;
    }
    console.log(arr[a])
}


let places = [ "Jamshedpur" , "Ranchi" , "Goa" , "Bhubaneshwar" , "Patna"];

// places.forEach(function(ele){
//     console.log(ele)
// })

//or
places.forEach((element , index , array)=>{
    console.log(`The element ${element} is in index ${index} in array : ${array}`)
});

console.log(" ");

// to iterate or traverse an object

let obj = {
    name : "Arman",
    age : 19,
    designation : "student",
    os : "windows"
}

for(let key in obj){
    let str = `The ${key} of the object is ${obj[key]}`
    // document.body.innerHTML = str;
    console.log(str)
}
