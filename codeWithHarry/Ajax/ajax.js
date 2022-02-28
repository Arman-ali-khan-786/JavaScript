console.log("Ajax full")
let fetchbtn = document.getElementById("fetchbtn");
fetchbtn.addEventListener('click',fetchbtnHandler);

function fetchbtnHandler(){
    console.log("you have clicked the fetchbtn.");
    
    // instantiate an xhr(XMLHttpRequest) object
    const xhr = new XMLHttpRequest();

    // open the object

        // use this for GET request

            // xhr.open('GET' , 'sample.txt' , true);
            // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1',true)

        // use this for POST request
            xhr.open('POST' , 'http://dummy.restapiexample.com/api/v1/create' ,true)
             xhr.getResponseHeader('content-type' ,'application/json'); //'application/x-www-form-urlencoded'); // this means that i am sending the data in the url 

        // GET -> in the get we only fetch data using the urls/files/others ..
        // POST -> in the post we send/give data+url to fetch the data(according to the given data) from the url
        // true -> asynchronous call don't block , false -> synchronous call

    // what to do on progress (optional) , ready state 4 
    xhr.onprogress = function(){
        console.log("On progress");
        // this can be used to show spinners/loader/ loading icons etc...
    }

    // an old functions
    // xhr.onreadystatechange =function(){
    //     console.log("ready state is ",xhr.readyState)
    // }

    // what to do when respond is ready
    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText)
        }else{
            console.error("Oops! some error occured .");
        }
    }

    // send the request for GET
        // xhr.send();
    // send the request for POST
        param  = `{"name":"test456676645","salary":"123","age":"23"}`
        xhr.send(param);
    console.log("We are Done");
}

let popbtn = document.getElementById("popbtn");
popbtn.addEventListener('click',popbtnHandler);

function popbtnHandler(){
    console.log("you have clicke popbtn")
    const xhra = new XMLHttpRequest();
    xhra.open('GET','http://dummy.restapiexample.com/api/v1/employees', true);
    //employee.json
    // http://dummy.restapiexample.com/api/v1/employees
    // https://fakestoreapi.com/products
    xhra.onload = function(){
        if (this.status == 200) {
            // console.log(this.responseText)
            let obj = JSON.parse(this.responseText)
            console.log(obj);
            let list = document.getElementById("list");
            let str="";
            // for (let [key, value] of Object.entries(obj)) {
            //     console.log(key, value);
            //     str +=`<li class="my-4">${value}</li>`
            // }
            for(key in obj.data){
                str +=`<tr>
                <th scope="row">${obj.data[key].id}</th>
                <td>${obj.data[key].employee_name}</td>
                <td>${obj.data[key].employee_salary}</td>
                <td>${obj.data[key].employee_age}</td>
              </tr>`
            }
            list.innerHTML = str;
        } else {
            console.error("Oops! some error occured");
        }
    }
    xhra.send();
}