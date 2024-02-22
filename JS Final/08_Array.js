//Array

const myArray= [1,2,3,4,5,6]

myArray.push(7)
myArray.pop()


myArray.unshift('9')
myArray.shift()

console.log(myArray);
console.log(myArray.includes(6));

console.log(myArray.indexOf(3))

//Spread Operator

let movies=['war','love','fight','comedy']
let actor=['jackie chen','salman']

let newarray= [...movies,...actor]

console.log(newarray);