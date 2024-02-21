//Conditional statements -- Vote
//if else

var age=19;
if (age>=18) {
    console.log ('You are eligible to vote.')
}
else {
    console.log ('You are not eligible for vote.')
}

//if, else if

let position='first';

if (position==='first') {
    console.log ('Gold')
}
else if (position==='second') {
    console.log('Bronze')
}

else { console.log('No Medal')}


//Odd or Even 

let a=66;
if (a % 2 ===0) {
    console.log('The number is even')
}

else {
    console.log('The number is odd')
}

//else if
let mode='silver';
let color='black';

if (mode==='silver') {
    color= 'white'
} else if (mode==='black') {
    color='blue'
}

else {
    'the code is executed'
};

console.log(color)

//Switch Statement

let winner='first';

switch(winner) {
    case 'first': console.log('Gold Medal');
    break;
    case 'second':console.log('Bronze Medal');
    break;
    case 'third' :console.log('Silver Medal')
    break;
     
    default: console.log('you participated in the game. Thanks')
}