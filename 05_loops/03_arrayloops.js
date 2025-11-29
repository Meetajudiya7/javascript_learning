//for of
// ["","",""]
// [{},{},{}]
const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}
const greetings="hello wolrd"

for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
    
}

//maps


const map=new Map()
map.set('IN',"India")
map.set('USA',"United States Of India")
map.set('Fr',"France")

console.log(map)

for (const [key,value] of map) {
    console.log(key,':-',value);
    
}

// const myobj={
//     'name':"meet",
//     "age":"18"
// }
