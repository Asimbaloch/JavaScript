//Loops are used to execute the piece of code again and again

// for loop

for (let i=19;i<=40;i++) // let i=19 is initialization , i<=40 is the stopping condition , i++ is the updation in the value of variable i

{
    console.log (i)
}

//calculate sum of 1 to 100

let sum=0;
let n=100;

for (let i=1;i<=n;i++) {
    sum=sum + i;
}

console.log (sum)

//while
let i=1;
while (i<=20) {
    console.log(i);
    i++;
}

//do while
let j=1;
do {
    console.log('I am doing do while code');
    j++;
}

while (j<=20)

//A program to show the even numbers


for (let g=0;g<=100;g++) {
    if (g%2 === 0) {
        console.log (g)
    }

}

//Game to match the right number
let num=23;

let guess=prompt('Enter the guess number');

while (num!= guess) {
    guess=prompt('Enter the number again')
}

console.log('The number is correct.')

//String is a series of characters used to represent text
