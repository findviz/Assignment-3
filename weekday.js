var readlineSync = require("readline-sync");
let day = readlineSync.question("Enter the week day in number:")
if(day == 1){
    console.log("It's Monday");
}else if(day == 2){
    console.log("It's Tuesday ");
}else if(day == 3){
    console.log("It's Wednesday");
}else if(day == 4){
    console.log("It's Thursday");
}else if(day == 5){
    console.log("It's Friday");
}else if(day == 6){
    console.log("It's Saturday");
}else if(day == 7){
    console.log("It's Sunday");
}else {
    console.log("Invalid day!");
}