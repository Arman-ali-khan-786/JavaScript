// Character Sets in Regular Expressions in JavaScript

let regex = /A[A-Z]man/; // [ ] it is know as character sets ,
// if after A any b/w a to z then man ,it matches the string && [a-z] != [A-Z]
regex = /A[ryc]man/;
regex = /A[^ryc]ma[nk]/;  // charat(^) symbol inside set means not equal to
regex = /A[a-zA-Z][mJrYA]?a[n0-9A-Z]/;


// Quantifiers - we use curly braces{} for quantifying 

regex = /Arma{2}n/;  // a occurs exactly 2 times,this means after Arm there are 2 a's then n like Armaan is the required regex
regex = /Arma{0,2}n/;  // a can occur 0 , 1 or 2 time, 0 to 2 times



// Groupings - we use parenthesis() for groupings

regex = /([A-z]{4}([0-9]){4})/; // [A-z] is same as [A-Za-z]


// const str = "Armaaan Khan";
const str = "ARMZ8340"

let result = regex.exec(str);
console.log(result);

if (regex.test(str)) {
  console.log(`The String "${str}" matches the expression '${regex.source}'`);
} else {
  console.log(
    `The String "${str}" does not matches the expression '${regex.source}'`
  );
}
