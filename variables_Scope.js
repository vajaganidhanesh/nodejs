// ES6 features in javascript...

// ECMAScript, also known as JavaScript, is a programming language adopted 
// by the European Computer Manufacturer's Association as a standard for 
// performing computations in Web applications. ECMAScript is the official 
// client-side scripting language of VoiceXML.

//In var keyword we can re-asign the values while we can't in "let" and "const"
//  its was in js before ES6 futures
var name = "dhanesh"
var name = 0;

//let keyword used to blockscope inside the function and also 
// we can reasign the variable values if possible

let age = 23;
age = 224;

// const keyword it will be used for constant values which 
// we are not going to change in future of the application

const nameof = "dhanesh";

//we are not suppose to redeclare the used variable again to change the value of it
// name = "vajagani dhanesh"

console.log(nameof);
console.log(age);

// Arrow function
// asigning function to a variable is also known as arrow function which decreases code and
// 
let sum = function(a , b){
    // console.log(a+b);
    multiplication("calling from sum function");
}

const multiplication = (call)=>{ console.log("its arrow function",call);}
sum(45,45)

// spread operator and rest operator
const student = {
    name : "vajaganidhanesh",
    age : 24,
    designation : "web developer"
}

let copyObject  = {...student,name :"vajagani"}
console.log(copyObject);
let a =10,b=20;
function closures(){
    let ans = a+b;
    console.log(ans);
}

closures()