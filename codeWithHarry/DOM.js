// let  a = document
let a  = document.all
// a = document.body
// a = document.forms
// a = document.forms[0]
// a= "Arman";
// Array.from(a).forEach((ele)=>{
//     console.log(ele)
// })
// Array.from(a).forEach((ele)=>{
//     console.log(ele)
// })
a= document.links

// Exercise _1

    let str = "react"
    for(let i = 0 ; i < a.length ; i++){
        if(a[i].href.includes(str)){
            console.log(a[i].href)
        }
    }

/* DOM Selctors 

   1. element selector :
       - Single element selector
       - multi element selector
   2. 

*/

//   >> Single element selector
 
        let element = document.getElementById("first");
        let element2 = document.getElementById("third")
        // console.log(element)

        // element = element.childNodes;
        // element=element.parentNode;
        element.style.color = "red";
        element.innerText = "Arman"
        element2.innerHTML = `<b>Hello ki hal ba</b>`;

        console.log(element2.innerText)
        let element3 = document.querySelector("#second");  // selects the first element,id,class,tag present
        let element4 = document.querySelector("div");
        element4.style.color = `green`;
        // console.log(element4)
        // console.log(element3)


//  >> Multi element selector

        // let eles = document.getElementsByClassName("child");
        // console.log(eles)
        eles = document.getElementsByTagName(`li`);
        
        // console.log(eles)
        // Array.from(eles).forEach((ele)=>{
        //     ele.style.color= "blue"
        // })

        //or

        for (let index = 0; index < eles.length; index++) {
            const element = eles[index];
            element.style.color = "brown"
            
        }