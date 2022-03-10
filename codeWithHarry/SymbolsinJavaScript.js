// Symbols in JavaScript
// Symbol is a primitive type that is unique 
// and it is mainly use to Create unique keys
// for example
const sym1 = Symbol('Arman');
const sym2 = Symbol('Arman');
console.log('Type of sym1 : ' ,typeof sym1); // symbol

console.log(sym1 === sym2); // false

// (5 primitives including object which is reference type ) and 7th one is Symbol
// but other for other primitives

let a = "Arman"
let b = "Arman"
console.log(a === b); // true
a = 786 
b = 786
console.log(a === b); // true
a=null
b=null
console.log(a === b); // true
a=undefined
b=undefined
console.log(a === b); // true
// -----------------------------   ----------------------------------- --------------

const k1 = Symbol();
const k2 = Symbol();
const k3 = Symbol();

myObj = {};
arr = [k1 , k2 ,k3]
myObj[k1] = "Arman";
myObj[k2] = "Ali";
myObj[k3] = "Khan";
myObj["signifies"] = "Hope"
myObj["age"] = 34;

console.log(myObj);
console.log(myObj[k2]);
console.log(myObj.k2); // cannot do this to get the value bcz it is same as myObj["k2"] 
arr.forEach(key => {
    console.log(myObj[key]);
    
});
console.log('-----------------------------------------------------------------------');


// Symbols are ignored in for in loop
for(key in myObj){
    console.log(key, myObj[key]);
}
// and in Json.stringify() also
console.log(JSON.stringify(myObj));



