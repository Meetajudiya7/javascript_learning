const marvel_heros = ["thor", "ironman", "spiderman"]

const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const mer = marvel_heros.concat(dc_heros)
console.log(mer);


const all_new_heros = [...marvel_heros, ...dc_heros]//most prefer
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]

const rea_another_array = another_array.flat(Infinity)
console.log(rea_another_array);


console.log(Array.isArray("Smit"));
console.log(Array.from("Smit"));
console.log(Array.from({ name: "Smit" }));//Intresting

let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score, score1, score2));






