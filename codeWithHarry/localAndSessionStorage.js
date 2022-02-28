localStorage.setItem(`name`,`Arman`);
localStorage.setItem(`branch`,`CSE`)
console.log(localStorage ,typeof localStorage)
// localStorage.clear();
console.log(localStorage.name ,typeof localStorage.name)
let myName  = localStorage.getItem(`name`)
console.log(myName)
// localStorage.removeItem(`branch`)

let friends = [ 'Arman' , 'Ratneshwar' , 'Ayush'];
localStorage.setItem('myFriends' , JSON.stringify(friends));
let whoAreMyFriends = JSON.parse(localStorage.getItem('myFriends'))
console.log(whoAreMyFriends)
whoAreMyFriends.forEach(element => {
    console.log(element)
});

sessionStorage.setItem(`sessionname`,`Arman`);
sessionStorage.setItem(`sessionbranch`,`CSE`)
