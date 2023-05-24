var readlineSync = require("readline-sync");
let num = readlineSync.question("Enter a number:")

if(num%2==0){
    console.log("It's an Even Number");
}
else{
    console.log("It's an Odd Number");
}