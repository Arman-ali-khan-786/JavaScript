const proto = {
    slogan : ()=>{
        return 'This company is the best'
    },
    changeName : function(newName){
        this.name = newName;
    }
}

// this creates arman Object using  above define proto

let arman = Object.create(proto);
arman.name= "Arman "
arman.role = "Student"
// arman.changeName("Arman Ali Khan");
// console.log(arman)

// this also creates aman object old style of creating objects
 
let aman = Object.create(proto , {
    name : {value : " Aman", writable: true},
    role : {value : "Programmer"}
})
// aman.changeName("Aman Khan")
// console.log(aman)

// Employee constructor 

function Employee(name , salary , experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}
// slogan 
Employee.prototype.slogan = function(){
    return `This is company is the best, ${this.name}`;
};

let armanObj = new Employee("Arman Khan", 20411220 ,2);
console.log(armanObj)
console.log(armanObj.slogan())


// Programmer 

function Programmer(name , salary , experience , language){
    Employee.call(this, name , salary, experience);  // in the context of Programmer coonstructor call Employee constructor
    this.language = language;
}

// Inherit the Prototype
Programmer.prototype = Object.create(Employee.prototype); // prototpye of Programmer is set to equals that of the Employee Prototype

// manually set the constructor
Programmer.prototype.constructor = Programmer;

let Rattu = new Programmer("Ratneswar" , 204111, 4 , "Python");
console.log(Rattu);
console.log(Rattu.slogan())