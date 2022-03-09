// Iterators in Javascript

const myArray = ["Apples", "Grapes", "Mango", "Banana"];
console.log("My array is : ", myArray);

// an iterator protocol
function iterator(ele) {
  let nextIndex = 0;
  return {
    next: () => {
      if (nextIndex < ele.length) {
        return {
          value: ele[nextIndex++],
          Done: false,
        };
      } else {
        return {
          Done: true,
        };
      }
    },
  };
}


let fruits = iterator(myArray);
for (let index = 0; index < myArray.length; index++) {
    // console.log(fruits.next());
    console.log(fruits.next().value);
}


let sports = ['Cricket' , 'Football' , 'Basketball' ,'volleyball'];
console.log( " ");
console.log(sports);


function sportsIterator(sports){
  let nextInd = 0;
  return {
     next :()=>{
       if (nextInd<sports.length) {
         return {
           value : sports[nextInd++],
           Done :false
         }
       } else {
         return {
           Done : true
         }
       }
    }
  }
}


let mySports = sportsIterator(sports);
console.log('I love to play '+mySports.next().value+","+mySports.next().value+","+mySports.next().value+" and "+mySports.next().value);