let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let inputValue = "";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if (buttonText == 'C') {
            screen.value = "";
            inputValue="";
        } else if (buttonText == '=') {
            screen.value = eval(inputValue);
        } else {
            inputValue += buttonText;
            screen.value = inputValue;
        }

        
    })
}