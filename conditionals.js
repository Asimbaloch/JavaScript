//if-else

var marks=31;
if (marks>30) {
    console.log ("You are passed")
}

else {
    console.log ("Please try again")
}

//if-else if

var marks=40;

if (marks>40) {
    console.log ("You have D grade")
}
else if (marks>50) {
    console.log ("You have C Grade")
}

else if ("marks<33") {
    console.log ("You try again")
}

//switch statement
//converting the previous if-else example with switch-case

var light="green";
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
 }


 //Are You Old Enough? 
 var age=10;
 if (age>=65) {
    console.log("You get your income from pension")
 }

 else if(age<65 && age>=18) {
    console.log("you get an allowance")
 }

 else {
    console.log ("The value of the age variable is not numerical")
 }

//Days of the week program

var day="Sunday"
switch(day) {
    case "Monday" : console.log("Do something");
    break;

    case "Tuesday": console.log ("Do something");
    break;

    case 'Wednesday': console.log ("Do something");
    break;

    case "Thursday" : console.log ("Do something")
    break;

    case "Friday" :console.log ("Do something");
    break;

    case 'Saturday':
        console.log('Do something');
        break;
    case 'Sunday':
        console.log('Do something');
        break;

        default: console.log ("There is no such day");
}