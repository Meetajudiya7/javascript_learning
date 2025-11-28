const name = "meet"
const repoCount = 50

// console.log(name+repoCount+"value");

console.log(`Hello my name is${name} and my repo count is ${repoCount}`);

const gamename = new String('meet-fc')

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

const newString = gamename.substring(0, 4)
console.log(newString);



const anotherstring = gamename.slice(-5, 4)
console.log(anotherstring);

const newstringone = "  meet  "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://google.com/google%20chrome"

console.log(url.replace('%20', '-'));

console.log(url.includes('google'));
console.log(gamename.split('-'));










