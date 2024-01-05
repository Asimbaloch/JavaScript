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
