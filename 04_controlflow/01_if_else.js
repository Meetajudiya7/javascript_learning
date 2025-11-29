// if
const isUserLoggedIn = true
const tempreature = 41

if (tempreature < 50) {
    console.log("less than 50");
}

else {
    console.log("temprature is greater than 50")
}


const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);

}

//console.log(`User power: ${power} `); // do not access


const balance = 1000

if (balance > 500) console.log("test"), console.log("test2");//immature coding

if (balance > 500) {
    console.log("less than 500");
}
else if (balance < 750) {
    console.log("less than 750");

}
else if (balance < 900) {
    console.log("less than 900");

}
else {
    console.log("less than 1200");

}

const userloggedin = true
const debitcard = true
const loggedInfromgoogle = false
const loggedinfromemail = true

if (userloggedin && debitcard) {
    console.log("allow to buy course");
}

if (loggedInfromgoogle || loggedinfromemail) {
    console.log("user logged in");
}