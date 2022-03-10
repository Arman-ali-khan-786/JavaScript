// Destructuring in JavaScript

let a,b;
[a ,b] = [23 , 56];
console.log(a ,b);
[a , b , c , ...d] = [1,2,3,4,5,6,7,8,9,10]
console.log(a);
console.log(b);
console.log(c);
console.log(d);

({a ,b, c , ...d} = {a:12,b:333,c:497,d:555,e:20202})
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Array Destructuring 
const sports = ["Cricket" , "Volleyball", "Football", "Kabbadi"];
[a,b,c,d] = sports;
console.log(a,b,c,d);

// Object Destructuring 
car = {
    model : "maruti 800",
    speed : 120,
    isTested : ()=>{
        console.log('Yes');
    }
}
const{model,speed,isTested} = car;
console.log(model,speed,isTested);
isTested();
