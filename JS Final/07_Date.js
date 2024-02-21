let date= new Date
console.log(date)

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleTimeString());

//

let finalDate= new Date(2022,7,9)
console.log(finalDate.toDateString());

let customDate = new Date("1-14-2023")
console.log(customDate.toLocaleDateString());

const myDate = new Date(2024, 1, 21, 19, 12, 0, 0); // February 21, 2024, 7:12 PM
console.log(myDate.toLocaleDateString());
