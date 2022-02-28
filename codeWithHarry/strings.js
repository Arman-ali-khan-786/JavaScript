const name = "ARMAN"
const greeting = "Welcome back, "
console.log(greeting+` `+name+"!")
console.log(" ")

 // or
 
const myGreeting = greeting.concat(name , "!")
console.log(myGreeting)

//------------------------------ Methods in string --------------------------------------

console.log(myGreeting.length)
console.log(myGreeting.toUpperCase())
console.log(myGreeting.toLowerCase())
console.log(myGreeting.indexOf('ARMAN'))
console.log(myGreeting.lastIndexOf('A'))
console.log(myGreeting.indexOf("idudsddjanjs"))
console.log(myGreeting.charAt(5).toUpperCase())
console.log(myGreeting.endsWith('N!'))
console.log(myGreeting.endsWith('n!'))
console.log(myGreeting.includes("Arman"))
console.log(myGreeting.includes("ARMAN"))
console.log(myGreeting.substring(14,19))
console.log(myGreeting.substring(14,18))
console.log(myGreeting.slice(14,19).toLowerCase())
console.log(myGreeting.slice(-4))
console.log(myGreeting.split(' '))
console.log(myGreeting.split('a'))
console.log(myGreeting.replace('A', 'a'))
console.log(" ")

// --------------------------------- indexing -------------------------------------------

console.log(myGreeting[0])
console.log(myGreeting[4].toUpperCase())

console.log(" ")
console.log(" ")

// ------------------------------ Template Literal --------------------------------------

let name2 = "Varun",schoolName = "ABCD High School";
let intro = `<p>
Hello , My name is <b> ${name2}</b> from 
             <h1>${schoolName}</h1>
</p>
`
document.body.innerHTML = intro