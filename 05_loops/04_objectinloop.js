const myobject = {
    js: "jvascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myobject) {

    console.log(`${key} shortcut id for ${myobject[key]}`);


}

const program = ["js", "rb", "py"]

for (const key in program) {

    console.log(program[key])

}


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States Of India")
// map.set('Fr', "France")

// for (const key in map) {

//     console.log(key);


// }

const programming = ["js", "rb", "py", "java"]

programming.forEach(function (item) {  // callback 6 atle name no apvanu hoi function nu
    console.log(item);

})

programming.forEach((val) => {
    console.log(val);

})

function printme(item) {
    console.log(item);

}

programming.forEach(printme)

programming.forEach((item, index, arr) => {
    console.log(item, index, arr);

})


const mycoding = [
    {
        languagename: "java",
        languaggefilename: "java"
    },
    {
        languagename: "javascript",
        languaggefilename: "js"
    },
    {
        languagename: "python",
        languaggefilename: "py"
    }
]

mycoding.forEach((item) => {
    console.log(item.languagename);

})