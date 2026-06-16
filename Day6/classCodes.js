// event bubbling :- 
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");

// parent.addEventListener("click", () => {
//     console.log("parent");
// });

// child.addEventListener("click", () => {
//     console.log("child");
// });


// event delegation :-
// ul.addEventListener(
//     "click",
//     (e)=>{
//         console.log(e.target.textContent);
//     }
// )



// Synchronous and Asynchronous
// Sync code :-
// function multiply(a,b){
//     return a*b;
// }
// const a = 5;
// const b = 6;
// console.log(multiply(a,b));


// Async code :-
// const fs = require('fs');
// const http = require('http');

// // Task 1
// setTimeout(() => {
//     console.log('This is printed after 2 seconds');
// }, 2000);

// // Task 2
// http.get('http://jsonplaceholder.typicode.com/posts', (res) => {
//     let data = '';
//     res.on('data', (chunk) => data += chunk);
//     res.on('end', () => console.log('GET Response:', data));
// });

// // Task 3
// fs.readFile('sample.txt', 'utf8', (err, data) => {
//     if (err) console.log('Error reading file:', err);
//     else console.log('File Content:', data);
// });


// Sync code :-
// console.log("1");
// for (let i=0;i<10000000000;i++){}
// console.log("2");


// Async Code :-
// console.log("Start");
// setTimeout(()=>{
//     console.log("Meeeeeeeeeeeeooooooooooooowwwwwwwwwwwwwwwwwwww")
// },6000)
// console.log("End");


// Call Stack :- 
// console.log("hello world");
// var a = 11;
// var b = 2;

// setTimeout(()=>{
// console.log("Call me asap");},0);

// function multiply(x,y){
// const result = a*b;
// return result;
// }
// var c = multiply(a,b);
// console.log("multiplication result :",c);



