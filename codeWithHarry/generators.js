// Generators in JavaScript

// 1-10

function* numGen(){
    let i = 1 ;
    while(i<=10){
        if(i%2 == 0){
            yield i++;
        }else{
            yield (i++).toString();
        }

    }
}
const gen = numGen();
console.log(gen.next().value,typeof gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

