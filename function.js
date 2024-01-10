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