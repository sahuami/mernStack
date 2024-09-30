// let n = 5;
// for(let i=0; i<n; i++){
//     console.log("hello", i);
// }
// console.log("bye ")


// console.log(process.argv);
 

// yaha pr humne ek file se dusre file me data ko import kiya hai
// (require ka use krne ke liye hame file name .cjs ka use krna hoga )
// const a = require('./2math.cjs');
// console.log(a);
// console.log(a.sum(22, 34));
// console.log(a.mul(2, 3));
// console.log(a.g);

//use of import(import use krne ke liye hame file name .mjs likhna hoga nhi toh error show krega)
// import {sum ,pi} from "./3solve.js";
// console.log(sum(1,2));
// console.log(pi);

// yaha pr humne ek directory(folder) ko dusre directory(folder) me import kiya hai
// const info = require("./4Fruits/index.c js");
// console.log(info);



import {generate} from "random-words";
console.log(generate());
