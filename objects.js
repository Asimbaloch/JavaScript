//Object

var frontend ={
    HTML :80,
    Css :50,
    Javascript : 40,
    React :0,
    Git: 90,
};

console.log(frontend)
console.log(frontend.React)
frontend.Github=80

console.log(frontend)

//Arrays are objects and they have built in object methods
var drone=["Peshawar","North Waziristan","South Waziristan"]
drone.push('Khyber Agency')
console.log(drone)
drone.pop()
console.log(drone)

//Task
var clothes=[]

clothes.push("T-Shirt","Dress Pant","Dress Shirt","Hoodie","Winter Jackets")

console.log(clothes)

clothes.pop()
clothes.push("Tie")

console.log(clothes[4])

var favCar= {};

favCar.color = 'red';
favCar.convertible = true;

console.log(favCar)

//Adding Object 
var car={};

car.model=2015;
car.registration='Punjab';
car.color='white';
car.mileage=1200;

console.log(car);

car.turnthekey= function(){
    console.log("The engine is started")
}

car.turnligthson= function(){
    console.log("The lights are on");
}

console.log(car)
car.turnthekey()
car.turnligthson()