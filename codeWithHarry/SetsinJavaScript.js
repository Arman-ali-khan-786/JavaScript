// Sets in JavaScript
// set stores unique values
const mySet = new Set(); // initializing empty set
console.log(mySet);

// adding values this set
mySet.add('This');
mySet.add('this'); 
mySet.add(' is my Name.');
mySet.add('This');  // it will not add repeated values
mySet.add(855);
mySet.add(true);
console.log("Set looks like this now ",mySet);

// Using a constructor to initialize a Set
var people = ["Arman" , "rattu" , "Ayush", "Jay" , "Abhiraj" , "Bhakta" , "Sanskar" ];
const mySet2 = new Set(people);
console.log(mySet2);

// to get Set size/length
console.log('Set size : ',mySet.size);

// to check whether an element is present or not
console.log(mySet.has(855));
console.log(mySet.has("this"));
console.log(mySet.has("Name"));

// to delete a value from Set 
console.log('Set before removal : ', mySet);
mySet.delete("this")
console.log('Set After removal : ', mySet);


// Iterating a Set using for-of Loop
for(let item of mySet){
    console.log('Item is : ',item);  
}
console.log('');

// Iterating a Set using for-each Loop
mySet.forEach((item)=>{
    console.log('Item is : ',item);  
    
})

// converting Set to array using Array.from() method
let myArr = Array.from(mySet);
console.log(myArr);


// Exercise for understanding the use of converting set to an array
let array = [ 1,3,32,3,1,34,2,22,56,3,1];
console.log('Array with duplicate elements : ',array);

// to remove duplicates from the above array

// function rmDup(arr){
//     // console.log('Inside function array is ',arr);
//     var set = new Set(arr);
//     // console.log('Inside function set is ',set);
    
//     return Array.from(set);
// }
// array = rmDup(array);
// or
array = Array.from(new Set(array));  // direct without using function
console.log('Array without duplicate elements : ',array);
