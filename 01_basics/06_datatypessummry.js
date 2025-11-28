// //Value Type (Primitive)

// // 7 types : String, Number, Boolean, null,undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // By default undifined

console.log(typeof scoreValue);

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(typeof anotherId);

console.log(id === anotherId);

const bigNumber = 321231156123n;
console.log(typeof bigNumber);

// Reference types (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "superman"];
console.log(typeof heros);

let myObj = {
  name: "meet",
  age: 20,
};

console.log(typeof myObj);

const myfunction=function(){
    console.log("hello wolrd");
}

// console.log(typeof myfunction);

//  **************************************************88

// stack(primitive), Heap (Non-primitive)

let myname = "meetajudiya";

let anothername = myname;
anothername = "meetnarola";


console.log(myname);
console.log(anothername);

let userone={
    email:"abc@gmail.com",
    upi:"user@ybl"
}

let usertwo=userone

usertwo.email="xyz@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

