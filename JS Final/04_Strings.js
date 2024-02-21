let userName= 'Asim Khan'
let age=25

console.log(`Hello everyone!My name is ${userName} and my age is ${age}`)


console.log(userName.charAt(3))
console.log(userName.length);
console.log(userName.indexOf('m'));

console.log(userName.slice(0,6))
console.log(userName.slice(-2,5));

console.log(userName.substring(-2,5));
console.log(userName.substring(0,3));

let userMessage=`   Hello! I hope that you will be doing great.               `

console.log(userMessage.trim());

console.log(userMessage.trim().replace('Hello', 'Hi'))