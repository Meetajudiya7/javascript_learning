// let myname="meet    "
// let mychannel="smit   "

// console.log(myname.trim().length);


let myheros =['thor','spiderman']
let heropower={
    thor:'hammer',
    spiderman:'sling',

    getSpiderPower: function(){
        console.log(`spider power is ${this.spiderman}`);
        
    }
}
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

//inheritance
const user={
    name:"meet",
    email:"meet@gmail.com"
}
const teacher={
    makevideo:true
}

const teachingSupport={
    isavailabble:false
}

const TAsupport={
    makassignment:'JS assignment',
    fulltime:true,
    __proto__:teachingSupport
}

teacher.__proto__=user

//Modern syntax

Object.setPrototypeOf(teachingSupport,teacher)

let anotheusername="meet ajudiya"

String.prototype.truelength=function(){
    console.log(`${this}`);
        // console.log(`${this.name}`);
    console.log(`True length is:${this.trim().length}`);

    
}

anotheusername.truelength()
"smit".truelength()
"narola".truelength()

