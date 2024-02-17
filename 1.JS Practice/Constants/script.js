let circumference;

const pi=3.14;

let radius;
radius=Number(radius);

document.getElementById('calculate').onclick = function() {
   radius= document.getElementById('radius').value;
   circumference= 2* pi * radius;
   console.log(circumference)
}