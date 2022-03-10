// Maps in JavaScripts : can use any type of keys or value

const myMap = new Map();
console.log(myMap);

const key1 =  'Arman', 
key2 = {
    age : 19,
    city : 'JSR',
    Country : 'IND'
},
key3 = ()=>{
    console.log('I love to learn and earn .');
    
};
// Setting map values 
myMap.set(key1 , 'This is a String.');
myMap.set(key2 , 'This is an Object.');
myMap.set(key3 , 'This is a function.');

console.log(myMap);

// To Get the map values
let value = myMap.get(key3);
console.log(value);

// to get the size of the Map
console.log('Size of the Map : '+myMap.size);

// Iterating through map using for-of Loop
for (let [key , value] of myMap) {
    console.log('Key : '+ key+' and  value : '+value);     
}

// to get only keys
for (let key of myMap.keys()) {
    console.log('Key => ',key);
    
}

// Iterating through map using for-each Loop
myMap.forEach((value,key)=>{ // order should be value , key
    console.log(key , value);
    
})

// converting Map to array
let myArray = Array.from(myMap);
console.log('Map to Arrays => ',myArray);

// converting Map values to array
let valuesArray = Array.from(myMap.values());
console.log('MapValues to Arrays => ',valuesArray);

// converting Map keys to array
let keysArray = Array.from(myMap.keys());
console.log('MapKeys to Arrays => ',keysArray);
