const useremail = "smit@gmail.com"

if (useremail) {
    console.log("Got user Email");
}
else {
    console.log("Don't have user email");

}

// Falsy values

// false,0,-0, BigInt 0n, "",null,undefined,NaN

// Truthy values
// "0", 'false'," ",[],{},function(){}

if (useremail.length === 0) {
    console.log("Array is empty");

}

const obj1 = {}

if (Object.keys(obj1).length === 0) {
    console.log("Object is empty");

}

// NUllish coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);


//Ternary Operator 

// condition ? true : false

const iceteaprice = 100
iceteaprice >= 80 ? console.log("less than 80") : console.log("more than 80")

