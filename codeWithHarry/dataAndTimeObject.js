// console.log("hello")
let today = new Date();
// console.log(typeof today)
console.log(today)
console.log(new Date('15 feb 2022 07:43:35'))
// console.log(new Date('05/07/2002'))
console.log(new Date('15 feb 2022 07:43:35').getDay())
console.log(new Date('15 feb 2022 07:43:35').getDate())
console.log(new Date('15 feb 2022 07:43:35 ').getMonth())
console.log(new Date('15 feb 2022 07:43:35 ').getMinutes())
console.log(new Date('15 feb 2022 07:43:35 ').getSeconds())
console.log(new Date('15 feb 2022 07:43:35 ').getHours())
console.log(new Date('15 feb 2022 07:43:35 ').getTime())
console.log(new Date('15 feb 2022 07:43:35 ').getMilliseconds())


// to change dates
today.setDate(17);
console.log(today);
today.setFullYear(1890);
console.log(today)
today.setMonth(10);
console.log(today)
today.setMinutes(12);
today.setHours(32)
console.log(today)
today.setSeconds(44)
console.log(today)

