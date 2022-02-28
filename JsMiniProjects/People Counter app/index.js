let countEl = document.getElementById("count-el")
let count = 0
function increment(){
    count = count + 1  
    console.log(count)
    countEl.innerHTML=count
}
function save(){
    console.log(count)
}
// let username = "arman"
// let message = "you have three new notifications"
// console.log(message+' '+username)
// let name = "arman"
// let greeting = "Hi, my name is"
// let myGreeting = greeting+' '+name
// console.log(myGreeting)
