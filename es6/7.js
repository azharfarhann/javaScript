// setTimeOut and setInterval
//1. it is used to execute a function after a specified number of milliseconds.
//2. it is used to execute a function at specified intervals.
// runs a function after specified number of milliseconds
// setTimeout( function, milliseconds);
// setTimeout( () => { }, milliseconds);


// method 1
// setTimeout(function(){
//     console.log("hello");
// }, 3000);

// method 2
// setTimeout(() => {
//     console.log("hello");
// },2000);

// method 3
// let hello = () => {
//     console.log("hello");
// }   
// setTimeout(hello, 1000);

// method 4
// setTimeout( sayHello,2000);

// // setInterval
// // Runs a function at fixed intervals of time

// Method 3:
// setInterval(() => {
//     console.log("hello");
// }, 1000);

// Method 4:
// let hello = () => {
//     console.log("hello");
// }
// setInterval(hello, 1000);

// Method 5:
// setInterval(sayHello, 1000); // sayHello ,is a function
// // setInterval(() => {
// //     console.log("hello");
// // }, 1000);

//how to stop setInterval
let timeId = setInterval(() => {
    console.log("hello. u r logged in");
}, 1000);    // it will print "hello.u r logged in" after every 1 second

setTimeout(() => {
console.log("u r logged out now");
    clearInterval(timeId);
}, 5000);    // it will stop after 5 seconds

