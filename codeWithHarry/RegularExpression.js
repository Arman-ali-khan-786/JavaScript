// Regular  Expressions in JavaScript

let reg = /Arman/;   // this is a regular expression literal in js 
reg = /Arman/g ;  // here g is the global flag , helps to search globally
// reg = /arMan/i ;  // here i means caseInsensitive
console.log(reg);
// console.log(reg.source); // gives the value inside reg express


let str = "Good Morning , Arman and Stay well Arman"
// Function to Match expressions
   //->1. exec() => this function will return an array for match & null for no match
        let result = reg.exec(str);  // returns an array & stating which index first the match is found
        console.log(result);
        // result = reg.exec(str);   // we can use multiple exe() with global flag
        // console.log(result.input);  // if result is null then result.input will throw an error
        // console.log(result.index);  // same with the case with .index, will throw an error
        // result = reg.exec(str);
        // console.log(result);

   //->2. test() => returns true if it is a regular expression is print in the String or false ,if it is null/reg is not present in the String
        let result2 = reg.test(str);
        console.log(result2);
   
   //->3. match() => it will return an array of matched results or null
        let result3 = str.match(reg);
        console.log(result3);
   
   //->4. search() => returns index of 1st  match else -1
        let result4 = str.search(reg);
        console.log(result4);
   
   //->5. replace() => returns new replaced string with all the replacements (if no global flag is 
   // given the 1st match is replaced);
   let result5 = str.replace(reg , "Aman")
   console.log(result5); 
   console.log(str);
   
   
