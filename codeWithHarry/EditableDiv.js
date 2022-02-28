let divEle = document.createElement("div");
let container = document.querySelector('.container');
let first = document.getElementById("first");
// console.log(divEle , container , first)
let val = localStorage.getItem('text');
let text;
if(val == null){
    text= document.createTextNode('This is my new Div , click it to edit.');
}else{
    text = document.createTextNode(val);

}

divEle.setAttribute('id','elem');
divEle.setAttribute('class','elem');
divEle.setAttribute('style' , 'border:2px solid black; width:284px; margin: 34px; padding:23px;');
container.insertBefore(divEle , first);
divEle.appendChild(text)



divEle.addEventListener('click',()=>{
    let textareaCount = document.getElementsByClassName("textarea").length;
    if(textareaCount == 0){
        let html = divEle.innerText;
        divEle.innerHTML = `<textarea class="textarea" id="textarea">${html}</textarea>`;
    }
    let textarea=document.getElementById('textarea')
    textarea.addEventListener('blur' , ()=>{
        divEle.innerHTML = textarea.value
        localStorage.setItem('text', textarea.value)
    })
})