// MOre on JavaScript Events

let btn = document.querySelector("#btn");
// console.log(btn)
// btn.addEventListener(`click`,func1);
// btn.addEventListener(`dblclick`,func2);
// btn.addEventListener(`mousedown`,func3);
// btn.addEventListener(`mouseenter`,func4);
// btn.addEventListener(`mouseleave`,func5)
// btn.addEventListener(`mousemove`,func6);

function func1(e){
    e.preventDefault();
    // console.log(" button clicked",e)
    
}

function func2(e){
    e.preventDefault();
    // console.log("button doubled clicked")
}

function func3(e){
    e.preventDefault();
    // console.log("mouseDowned")
}

function func4(e){
    // console.log(`mouse entered`)
}

function func5(e){
    // console.log(`mouse leaved`)
}

function func6(e){
    // console.log("you moved the mouse")
}

// let do something cool 

  document.querySelector(".container").addEventListener(`mousemove`,(e)=>{
      document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY+e.offsetX},${e.offsetX})`
  });