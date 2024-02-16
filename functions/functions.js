//Function: A function is the block of code that performes a specific taska and can be invoked whenever needed

//Sum function
function sum(a,b) {
    let c=a+b;
    console.log(c)
}

sum(3,4)

// Arrow function : Arrow function is the part of Modern JS.

let add=(a,b) => {
    console.log(a+b)
}

add(4,34)

//for of

let check ='hey!'

for (const ex of check){
    console.log(ex)
}

function countvowels(str){
    let count=0;
    for (const char of str) {
        if (char === 'a' || char === 'e'|| char ==='i'|| char ==='o'|| char==='u') {
            count++
        }
    }   
    return count;
}
console.log(countvowels('sHellopfhdsfdjfhkfaferuelkfdfdj'))

let countvowel=(str) => {
    let count=0;
    for (const char of str) {
        if (char === 'a' || char === 'e'|| char ==='i'|| char ==='o'|| char==='u') {
            count++
        }
    }   
    return count;
}
console.log(countvowel('sHellopfhdsfdjfhkfaferuelkfdfdj'))
