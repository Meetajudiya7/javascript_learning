// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let mycreateddate = new Date(2025, 0, 25, 5, 3)
console.log(mycreateddate.toDateString());
console.log(mycreateddate.toLocaleString());

let locally = new Date("2023-01-14")
console.log(locally.toLocaleString());


let mostuseinindia = new Date("01-14-2023")
console.log(mostuseinindia.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1); // Reduce End user Confusion
console.log(newDate.getDay());

// `${newDate.getDate()} And the time ${newDate.getTime()}`

newDate.toLocaleString('default', {
    weekday: "long",
})








