var readlineSync = require("readline-sync");
let num = readlineSync.question("Enter the number: ");

for (let i = 1; i <=10; i++){
    console.log(num+"*"+i+"="+num*i);
}