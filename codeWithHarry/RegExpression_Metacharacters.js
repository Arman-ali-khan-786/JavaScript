// MetaCharacters in Regular expression in Javascript

let regex = /Arman/;

// Lets look into some metacharacter symbols
regex = /^Arman/; // ^str it means if the string starts with str, here ^ means starts with
regex = /man$/; // str$ it means if the string ends with str, here $ means ends with
regex = /Ar.an/; //  matches  any one characters , more than one will not be considered as a match.
regex = /A*n/; //  matches  any zero or more characters
regex = /Ar?man?i/; // ?after character that means that charactern is optional,
//  r and i are optional , it matches if they are present or not
regex = /Arman\*/; // \ is used as escape character and it treats * as actual character not metacharacter

const str =
  "Arman* is a good boy and Arman is a good coder and buys Armani product";
let result = regex.exec(str);
console.log(result);

if (regex.test(str)) {
  console.log(`The String "${str}" matches the expression '${regex.source}'`);
} else {
  console.log(
    `The String "${str}" does not matches the expression '${regex.source}'`
  );
}
