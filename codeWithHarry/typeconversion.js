// type conversion 

let myVar = 34;
console.log(myVar, typeof(myVar))

myVar = String(34);
console.log(myVar,typeof(myVar))

let bool = true;
console.log(bool , typeof(bool))
bool = String(bool)
console.log(bool , typeof(bool))

let date = new Date();
console.log(date, typeof(date))
date = String(new Date())
console.log(date , typeof(date))

let arr = [1,3,4,6,7,8];
console.log(arr , arr.length, typeof arr);
arr = String(arr)
console.log(arr ,arr.length,  typeof arr)

let num = 1;
console.log(num , " and ", num.toString())

let str = "123";
console.log(str , typeof str)
str = Number(str)
console.log(str , typeof str)
str = Number(false)
console.log(str , typeof str)
str = Number(true)
console.log(str , typeof str)
str = Number([1,2,3,4])
console.log(str , typeof str)
str = Number("sjdhj")
console.log(str , typeof str)

let num2 = '34';
console.log(num2 , typeof num2)
num2 = parseInt(num);
console.log(num2 , typeof num2)
num2 = parseFloat("1.223333")
console.log(num2 , typeof num2)
console.log(num2.toFixed(2) , typeof num2)

// Type coersion

let str2 = "65";
let num3 = 43;
console.log(str2 + num3 , typeof(str2 + num3))
str2 = 65
console.log(str2 + num3 , typeof(str2 + num3))