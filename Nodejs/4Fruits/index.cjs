// index.cjs ek special file jo same folder ka sara data require krke  usse folder ke bhar use kr skte hai 
// yaha hame sari ek folder sari information ko combine kiya fir hum isse folder ke bhar use kr rahe hai
// note: jb hum ek folder ko dusre  folder m import krna chate hai toh hum us folder ki sari file ko ek single file m import(combine) krke fir hum dusre folder m import krte hai

const apple = require("./apples.cjs")
const banana = require("./banana.cjs")
const orange = require("./orange.cjs")

let fruits = [apple, banana, orange];

module.exports = fruits;