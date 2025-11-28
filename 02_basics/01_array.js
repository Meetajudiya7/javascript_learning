// Arrays

const myarray = [0, 1, 2, 3, 4, 5]

const myheros = ["shaktiman", "superman", "powerrangers"]

const myarr2 = new Array(1, 2, 3, 4)
console.log(myarray[0]);

//  Array Mehtods
// myarray.push(6)
// myarray.push(7)
// myarray.pop()

// myarray.unshift(9)
// myarray.shift()
console.log(myarray);



console.log(myarray.includes(6));
console.log(myarray.indexOf(3));

const newarr = myarray.join()
console.log(myarray);
console.log(newarr);

// slice, splice

console.log("A ", myarray);
const myn1 = myarray.slice(1, 3)
console.log(myn1);
console.log("B ", myarray);

const myn2 = myarray.splice(1, 3)
console.log("C ", myarray);
console.log(myn2);











