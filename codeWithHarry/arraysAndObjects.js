// Arrays in Js

const marks = [ 14 , 15 , 17 , 18 , 65];
let fruits = [ "Orange" , " Apple" , "Banana"];
const mixed = [ 'str' , 94 , [2,6]];
let arr2 = ["Arman", 34]
let str = "Arman"

const arr = new Array(23 , 12, 33, 'Orange');
console.log(arr);
console.log(mixed);
console.log("marks Array : ",marks);
console.log(fruits,fruits[0],fruits[1],fruits[2]);
console.log(arr.length)
fruits[2] = "Watermelon"; // updation in array
console.log(fruits)
console.log(" ")
console.log(" ")

// Methods----------------------------------

console.log(Array.isArray(arr2));
console.log(Array.isArray(str));
// let value = marks.indexOf(17);
// console.log(marks)
console.log(marks.indexOf(97))

// mutating or modifying array

marks.push(34); // to add an element at the back of the array
console.log("marks array after push() method",marks);
marks.unshift(10); // to add an element at the front of the array
console.log("marks array after unshift() method",marks);
marks.pop(); // to delete an element at the back of the array
console.log("marks array after pop() method",marks);
marks.shift(); // to delete an element at the front of the array
console.log("marks arrays after shift() method",marks)
marks.splice(1,2);  // splice(index, noOfElements) ->> start from index one delete 2 elements
console.log("marks array after splice() method",marks)
marks.reverse(); // to reverse an array
console.log("marks array after reverse() method",marks)
let fruits2 = [ "Banana" , "kiwi" , "Mango"]
fruits = fruits.concat(fruits2);
console.log("fruits array after concatinating with fruits2 array",fruits)

// Objects in Js

let obj = {
    name: 'Arman',        // key : value ,pairs 
    "college name": 'ITER',   // if want to give space between keys
    isStudent : true,
    marks : [9.05 , 9.45]
}

console.log(obj)
console.log(obj.marks)
console.log(obj.isStudent)
console.log(obj.name)
console.log(obj["college name"]) // to access a spaced key name
console.log(obj.marks[1])
