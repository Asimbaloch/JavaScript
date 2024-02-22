function add(num1,num2) {
    return (num1 + num2)
}

let addDisplay= add(3,4)
console.log(`The result of the addDisplay is ${addDisplay}.`)

function userMessage(userName) {
   if (!userName) {
    console.log("Please write the user name.");
   }

   else {
    console.log(`How are you ${userName}`);
   }
} 
console.log(userMessage());