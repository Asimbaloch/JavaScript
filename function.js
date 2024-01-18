//function without Parametres

function add(){
    var a=3;
    var b=6;
    var c=a +b;
    console.log(c);
}

add();

//function with Parameters
function minus(a,b) {
    var a=3;
    var b=5;
    
    var c=3+5;

    console.log(c);
}
minus();

//function with loop
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

// letterfinder function

function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")


//Apna College Course

//Function

function temp() {
    console.log('Today the temperature is 5 degree.')
    console.log('The temperature will be good tomorrow')
}

temp()

//Function with Parameter

function sum(a,b) {
    console.log(a+b)
}

sum (5,3)
sum (55,36)

//multiplication function
function mul(a,b) {
    console.log(a*b)

}

mul(3,5)

//Arrow function
const match = (a,b,c) => {
    return a+b+c
};

console.log[match(3,4,2)]