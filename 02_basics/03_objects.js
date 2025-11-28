// Singleton 


// Object litrels

const mysym = Symbol("key1")


const Jsuser = {
    name: "meet",// this type value access through dot(.)
    "full name": "meet ajudiya",// this value access through square bracket [" "]
    [mysym]: "mykey1", // syntax for symbol
    age: 20,
    location: "jaipur",
    email: "meet@gmail.com",
    isLoggedIn: false,
    lastlogindays: ["monday", "saturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["full name"]);
console.log(Jsuser[mysym]);

Jsuser.email = "smit@gmail.com"
Object.freeze(Jsuser)//if print bottom function that time this line commented just because object was freeze
Jsuser.email = "narola@gmail.com"

console.log(Jsuser);

Jsuser.greeting = function () {
    console.log("Hello JS User");

}

Jsuser.greetingtwo = function () {
    console.log(`Hello JS User, ${this.name}`);

}


console.log(Jsuser.greeting())
console.log(Jsuser.greetingtwo())


