// Events in JavaScript

document.getElementById(`heading`).
addEventListener(`click`,function(e){
    console.log("you clicked the heading")
    // console.log(e.target.classList)
    // console.log(e.target.id)
    // console.log(e.target.innerText)
    // console.log(e.offsetX)
    console.log(e.clientY)
    
})