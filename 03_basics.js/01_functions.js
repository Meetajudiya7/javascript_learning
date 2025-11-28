function sayname(){
console.log("M");
console.log("E");
console.log("E");
console.log("T");
}


// sayname()

function addtwonumbers(a,b){
    console.log(a+b);
}

function addtwonumbers(a,b){
    let result=a+b
    return result

    //return a+b  //direct method
}

const result=addtwonumbers(3,5)
addtwonumbers(3,"4")
addtwonumbers(3,"a")

console.log("Result :",result);

function justloggedin(username="sam"){
    if(username=== undefined){
        console.log("Please Enter a user name");
        return
    }
    else{
    return `${username} just logged in`
    }

}

console.log(justloggedin("smit"))

function calculatecartprice(val1,val2,...num1){  // ... operator is rest operator
return num1
}

console.log(calculatecartprice(2,3,4,5,6,7))// just  because val1=1 and val2=2 and ...num1=4,5,6,7

const user={
    username:"smit",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    

}

handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const mynewarray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]

}

console.log(returnSecondValue([200,400,500,1000]));
