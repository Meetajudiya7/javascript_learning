// const mynums = [1, 2, 3]

// const mytotal = mynums.reduce(function (acc, currval) {
//     console.log(`acc:${acc} and currval: ${currval}`);

//     return acc + currval
// }, 0)

// const mytotal=mynums.reduce((acc,currval)=>acc+currval,0)

// console.log(mytotal);

const shoppingcart = [
    {
        itemname: "py course",
        price: 2999
    },
    {
        itemname: "java course",
        price: 999
    },
    {
        itemname: "js course",
        price: 5999
    },
    {
        itemname: "data course",
        price: 12999
    }
]

const payforcourse = shoppingcart.reduce((acc, item) => acc + item.price, 0)
console.log(payforcourse);
