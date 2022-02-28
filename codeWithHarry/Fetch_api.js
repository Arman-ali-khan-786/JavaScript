console.log("Fetch api demo");
let mybtn = document.getElementById("my-btn")
let content = document.getElementById("content")

// ---------------------- Fetch syntax  for GET request -----------------------------------

// function getData(){
//     console.log("started getData");
//     let url = "Arman.txt"
//     fetch(url).then((response)=>{   // fetch is asynchronous 
//         console.log("Inside first then");
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then");
//         console.log(data);
//     })
// }


function getData(){
    let url = "https://api.github.com/users"
    fetch(url).then((response)=>{   // fetch is asynchronous 
        return response.json(); // this statement just parse the json data 
        // return response.text(); // this will not parse data, it will return string
    }).then((data)=>{
        // console.log(typeof data);
        // console.log(JSON.parse(data)) // if using response.text()
        console.log(data)
    })
}

// console.log("Before running getData");
// getData();
// console.log("After running getData");


// ---------------------- Fetch syntax for POST request -----------------------------------

function postData(){
    // let url = "https://api.github.com/users"; 
    // let url = "https://api.instantwebtools.net/v1/airlines" // url to create a airline
    // data = {
    //     "id": 7874,
    //     "name": "Bhuko Airways",
    //     "country": "Bhugi land",
    //     "logo": null,
    //     "slogan": "null",
    //     "head_quaters": "new, bhugi",
    //     "website": null,
    //     "established": "2022"
    // };
    let url = "https://api.instantwebtools.net/v1/passenger";
    data = {
        "name": "Arman Ali Khan",
        "trips": 0,
        "airline": 4
    }
    params = {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        // body:data,
      }

    // using arrow function shortcut
    fetch(url, params).then(response => response.json())
    .then(data => console.log(data) )
}


postData();