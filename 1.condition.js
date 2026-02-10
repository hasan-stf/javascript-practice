//module-14:fundamental concepts of conditions


console.log(5>10); //false
console.log(10>5); //true
console.log(10=='10'); //true
console.log(10==='10'); //false



console.log(10!='10');//false , only value check
console.log(10!=='10') // true , value and type both check 

// ......................................................................................


//if else statement
const age=12;
if(age>10){
    console.log("you can");
}
else{
    console.log("you can't");
}


//........................................................................................



var ag=15;
if(ag>=18){
    console.log("a");
}
else if(ag >=13){
    console.log("b");
}

else{
    console.log("c");
}
//........................................................................................

let ages = 17;
let withAdult = true;

if (ages > 15) {
    console.log("allowed in mela");

    if (withAdult) {
        console.log("allowed in horror room");
    } else {
        console.log("not allowed in horror room");
    }

} else {
    console.log("not allowed in mela");
}
/* open a new file  */