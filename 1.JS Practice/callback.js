//Callback function

function morning() {
    console.log('Good Morning!')
}

function afternoon(x,y) {
    console.log ('Good Afternoon');
    x();
    y();
}

function night(){
    console.log ('Good Night!')
}

afternoon(night,morning)



function sum(Callback,x,y) {
    let result= x + y;
    console.log (result);
}



