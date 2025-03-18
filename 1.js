// variables in JS

// /*
// what is a variable
// variables are containers for storing data values

// 4 types of variables to store
// */

// 1. var
// 2. let
// 3. const
// 4. using default

// var a = 10;
// console.log(a)

// let b = 100;
// console.log(b)

// const c = 1000;
// console.log(c)

// d = 50;
// console.log(d)

// var names = "Azhar"
// console.log(names)

// var age = 20;
// console.log(age)

// var isAlive = true;
// console.log(isAlive)


// var a = 10;
// console.log(a)

// let b = "ash"
//   b = "bat"
//   console.log(b)

//  const c = "20"
//   console.log(typeofc)         



// examples of string 
//  let fname = "azhar"
//  let lname = "farhan"
//  console.log(typeof[azhar])

// let c = 10;
// let d = 5;
// console.log(c & d);

// let c = 10;
// let d = 5;
// console.log(c | d);
// let c = 10;
// let d = 2;
// console.log(c ^ d);

// let z = 20;
// console.log(~z);
// // XOR ==> -(x + 1)


// let a = 4;
// let b = 5;

// console.log(a )

// let d1 = "10";
// let d2 = 5;
// console.log(d1 == d2);
// console.log(d1 === d2);
// console.log(d1 != d2);
// console.log(d1 !== d2);
// console.log(d1 !== d2);   


// let s = 10;
// console.log(--s);
// console.log(s);

// let r = 5;
// console.log(r--);
// console.log(r)

// implicit conversions
// anydatatyoe ti string ( string operator)

// let data = 2;
// data = 2 + "";
// console.log(data,typeofdata);

// let bool = true + "2";
// console.log(bool,typeofbool);

// let str = "azahr" + "2";
// console.log(str,typeofstr);


// if condition syntax
// let n = 2;
// if (n < 5) {
//     console.log('hello')
// }


//if else statement 

// let num = 2;
// if(num < 10){
//     console.log("hello, true")
// } else{
//     console.log ("hello,false")
// }

// if else statement to check a number is
// +ve or -ve

// let num = 5;

// if (num >= 5){
//     console.log("true")
// } else {
//     console.log("false")
// }

// check if a number is even or odd 
//  by using coparison operator == 
// let num = 4;
// if(num % 2 == 0) {
//     console.log("even")
// } else{
//     console.log("odd")
// }

/*
3. if ....else if ..... else 
let myscore = 70;

if (myscore >= 90){
 console.log("A")}else if{
 console.log("B")
 } else if {
  console.log("C")}else{
  console.log("failed")}

*/
/// if age is >= 18 ..you can vote 
// if age is <= 18 .. you can't vote
// if age is negative ..say negative age
// if age is greater than 100 ...say you cant vote

let age = -10
if (age >= 18) {
    console.log("can vote")
} else if (age <= 18) {
    console.log("cannot vote")
} else if (age < 0) {
    console.log("negative age")
} else {
    console.log("cant vote")
}