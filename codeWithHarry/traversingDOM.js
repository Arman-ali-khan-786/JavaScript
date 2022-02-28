//   Traversing DOM

let cont = document.querySelector(".container")
console.log(cont.childNodes)  // includes newline, comments n etc ...
console.log(cont.children)   // only our elements will be shown
let nodeName = cont.children[4].nodeName
let nodeType = cont.children[4].nodeType
console.log("NodeName of 4 is :", nodeName)
console.log("NodeType at 4 is :", nodeType)
console.log(" ")
console.log(cont.children[1].children[0].children)
console.log(cont.firstChild)
console.log(cont.firstElementChild)
console.log(cont.lastElementChild)
console.log(cont.childElementCount)

console.log(" ")

console.log(cont.firstElementChild.parentNode)
console.log(cont.firstElementChild.nextSibling)
console.log(cont.firstElementChild.nextElementSibling)
console.log(cont.firstElementChild.nextElementSibling.nextElementSibling)




