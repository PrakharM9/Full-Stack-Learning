// console.log("Hello World!");
// console.log(typeof "Prakhar")
// console.log(typeof 42);
// console.log(typeof true) ;

// variable declared using let can be reassigned
// value for variable defined using const cannot be reassign
// console.log("Every good boy does fine.".length);
// const myVariable="Mathematics";
// console.log(myVariable.charAt(6));
// console.log(myVariable.lastIndexOf("ath"))
// console.log(myVariable.slice(5,6));
// console.log("John,Doe,Rajesh".split(","));

// const myFloat=42.0;
// const myString="425.2222Prakhar";
// console.log(myFloat===myString);
// console.log(myString+3)
// console.log(Number.isInteger(9))
// console.log(Number.parseFloat(myString).toFixed(2))
// console.log(Number.parseInt())
console.log(Number.isNaN("Dave"));
// Actually isNaN function follows type coercion 
// due to which it first tries to convert value into Number

// Math methods and Properties 
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.floor(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.pow(3,4));
console.log(Math.min(3,9,5,9));
console.log(Math.max(3,5,6.2));
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
// Math.random generates value less than 1 and multiplying it with 10
// generates number in [0,9.999...] and then Math.floor make it[0,9] 
// and then +1 makes range [1,10]

// Write a code that will generate a randome letter from your name. 
const name = "Prakhar";
let val=Math.floor(Math.random()*name.length)
console.log(val,name.charAt(val))
let customerIsBanned=false;
let soup="chicken breast soup";
let crackers=true;
let reply;
if(customerIsBanned){
    reply="No soup for you!";
}
else if(soup && crackers){
    reply-`Here's your order of ${soup} & crackers.`;
}
else if(soup){
    reply=`Here's your order of ${soup}`;
}
else{
    reply="Sorry, we're out of soup";
}
console.log(reply)
testScore=89;
collegeStudent=true;e
if(testScore>=90){
    grade="A";
}
else if(testScore>=80){
    grade="B";
}
else if(testScore>=70){
    grade="C";
}
else if(testScore>=60){
    grade="D";
}
else{
    if(collegeStudent){
        grade="U";
    }
    else{
        grade="F";
    }
}