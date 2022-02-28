// Creating element using JS

   let element = document.createElement(`li`);
   element.className = `items`;
   element.id = `cli`;
   element.innerHTML = `Amigo`; // or innerText is also valid
   element.setAttribute(`title`, `mytitle`);

   let element2 = document.createElement(`li`);
   element2.className = `items`;
   element2.id = `cli`;
   let inText = document.createTextNode(`Ki hal ba`);
   element2.appendChild(inText)

   //    console.log(element2)

   let ul = document.querySelector("ul.this");  // 1st ul whose className is this will be selected
   console.log(ul)
   ul.appendChild(element)
   ul.appendChild(element2)
   //    console.log(element2)
   
// Replacing Element in Js

   let element3 = document.createElement(`h1`);
   element3.className = `items`;
   element3.id = `ch1`;
   let text = document.createTextNode(`Banana`);
   element3.appendChild(text);
   console.log(element3)
   
   element2.replaceWith(element3) // to replace element2 with element3
   let myul = document.querySelector("ul#this2");
   myul.replaceChild(element3, document.getElementById("f2"));
   console.log(myul)
   myul.removeChild(element3) // to remove child

   let pr = element.getAttribute(`id`)  //it gives the value of the attribute ,otherwise null
   console.log(pr ,element)
   pr = element.hasAttribute('class') // if  class attribute is present in element it will return true otherwise false
   console.log(pr)
   element.removeAttribute(`title`)

// Exercise -2 

let ele2 = document.createElement('h2');
ele2.className = `ch2`;
ele2.style.color = `yellow`
ele2.setAttribute(`title`,`cwharry`);
let text2 = document.createTextNode(`Code with Harry Tutorial .`);
ele2.appendChild(text2)
document.body.appendChild(ele2)