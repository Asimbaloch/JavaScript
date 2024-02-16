

var d =5;
var f=5;

var c =d+f; // a and b are operands while the + is operator

/* Operator Types are 
1. Arithmetic Operators


*/
//Arithmetic Operators
let a=3;
let b=6;

console.log('a + b=', a + b) //Addition
console.log('a - b=', a - b) //Substraction
console.log('a / b=', a / b) //Division
console.log('a * b=', a * b) //Multiply
console.log('a % b=', a % b) //Modulus
console.log('a ** b', a ** b) //Exponentiation

//Unary Operators

a=a++;
b=b--;

console.log(a++, b--)
console.log(a,b)

//Assignment Operators 

let g=3;
h=5;
g+=3;

console.log(g)

//Comparison Operators
// == is equal to .... !=not equal to

console.log (g != h)

let asim= 55;
if (asim % 5===0) {
    console.log('It is the multiple of 5')
}
else {
    console.log('It is not the multiple of 5')
}

//Grade Program

let marks=100;

if (marks>=80 && marks <=100) {
    console.log ('Grade is A')
}

else if (marks>=70 && marks <80) {
    console.log ('Grade is B')
}

else if (marks>=60 && marks <70) {
    console.log ('Grade is C')
}

else if (marks >=50 && marks <60) {
    console.log ('Grade is D')
}

else {
    console.log ('Grade is F')
}