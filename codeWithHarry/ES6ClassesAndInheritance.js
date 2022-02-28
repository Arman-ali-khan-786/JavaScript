// console.log("hello")
class Employee {
    constructor(name, experience, division) {
        this.name = name;
        this.experience = experience;
        this.division = division;
    }
    slogan() {
        return `I am ${this.name} ,nice to meet you`;
    }
    joiningYear() {
        return (2022 - this.experience);
    }
    static birthYear(bYear) {  // this method can be called without making the object of this class(static method)
        return `I was born in ${bYear}`
    }
}

let obj1 = new Employee("Arman", 4, "cse");
console.log(obj1);
console.log(obj1.slogan())
console.log(obj1.joiningYear())
console.log(Employee.birthYear(2002)) //Employee.slogan()  --> this will give error because solgan is not a static method

class Programmer extends Employee {
    constructor(name, experience, division, language) {
        super(name, experience, division);
        this.language = language;
    }
    fabLang(){
        if ((this.language.toLowerCase()) == 'java') {
            return 'Java';
        } else {
            return 'Javscript';
        }
    }
    static multiply(a,b){
        return a*b ;
    }
}

obj2 = new Programmer("Aman" , 7 , "CSIT" ,"JAVA");
console.log(obj2);
console.log(obj2.fabLang());
console.log(Programmer.multiply(2,34));