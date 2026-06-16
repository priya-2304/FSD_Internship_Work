// Modern Way -> modular js OR ESM
//1.
// import {city , country } from "./new.js";
// console.log(city);
// console.log(country);

// 2. 
// import add from "./new.js";
// console.log(add(6,6));



//  Traditonal method :- common js
const add = require("./new.js");
console.log(add(6,6));
