// for-in and for-of

var people = ["Arman" , "rattu" , "Ayush", "Jay" , "Abhiraj" , "Bhakta" , "Sanskar" ];
console.log('traditional for loop  :>> ');
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element); 
}

let me = {
    name : 'Arman',
    Lang : 'JavaScript',
    Hobbies : 'Web dev 3.0'
}
console.log('Iterating an object in Traditional way :>> ');
for (let index = 0; index < Object.keys(me).length; index++) {
    const element = me[Object.keys(me)[index]];
    console.log(element); 
}

console.log('Iterating an object using for-in Loop :>> ');
for(let key in  me){
    console.log(me[key]);
    
}

var myString = "Arman"; // for-in gives characters

// for (let index = 0; index < myString.length; index++) {
//     const element = myString[index];
//     console.log(element); 
// }
console.log('Iterating a String using for-in Loop :>> ');
for(let char in  myString){
    console.log(myString[char]);
    
}

// ******************************* For of Loop *******************************************

let sportsArr = ["cricket" , "hockey" , "volleyBall" , "football"];
for(let name of sportsArr){
    console.log(name);  
}
