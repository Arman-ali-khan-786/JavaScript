// Character Classes

let regex = /\wrm/;   // "\w" => a word character (_ or alphabet or numbers)
regex = /\w+an/;      // "\w+" means one or more word characters
regex = /\W834/;      // "\W" => a non word character for.eg (space etc...)
regex = /\W+834/;     // "\W+" means one or more non word characters
regex = /\d340/;      // "\d" => any digit  between 0 to 9
regex = /\d+65/;      // "\d+" means more than one digit
regex = /\D65/;       // "\D"  => a non digit
regex = /\D+65/;      // "\D+"  => more than one  non digit
regex = /\sphon/;     // "\s"  =>  match white space character ("   "or \t tab) 
regex = /\s+phon/;    // "\s+"  =>  match white space character (more than one or \t tab) 
regex = /\Sphone/;    // "\S"  => Match a non-white space character
regex = /\S+phone/;   // "\S"  => Match one or  more than one non-white space character
regex = /phone\b/;    // word boundary


// Assertions 
regex = /p(?=h)/;  // it means after p there has to be  h
regex = /p(?!h)/;  // it means after p there can be anything but not h


// const str = "Armaaan Khan";
const str = "ArmanKhan &&&&&83401ahb65p9hone number "

let result = regex.exec(str);
console.log(result);

if (regex.test(str)) {
  console.log(`The String "${str}" matches the expression '${regex.source}'`);
} else {
  console.log(
    `The String "${str}" does not matches the expression '${regex.source}'`
  );
}
