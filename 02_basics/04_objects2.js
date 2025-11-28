// const tinder = new Object()//singleton

const tineruser = {} // Non Singleton

tineruser.id = "123abc"
tineruser.name = "sam"
tineruser.isLoggedIn = false


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sam",
            lastname: "choudhary"

        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname); // Nested Objects data access this style


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj4 = { 5: "c", 6: "d" }

// const obj3 = {obj1,obj2 }

// const obj3=Object.assign({},obj1,obj2,obj4)

const obj3 = { ...obj1, ...obj2 }// Most Usable
console.log(obj3);


const users = [{
    id: 1,
    email: "nenish@gmail.com"
},
{
    id: 1,
    email: "nenish@gmail.com"
}
] //when database through value fetch that time use this method

users[1].email
console.log(tineruser);
console.log(Object.keys(tineruser));
console.log(Object.values(tineruser));
console.log(Object.entries(tineruser));
console.log(tineruser.hasOwnProperty('isLoggedIn'));//check the property available or not




