// Function in JS

/*
function is a block of code which performs specific task

there are 2 types of function is JS

1.BuiltIn Function
2.User Defined Function

// 2. User Defined Function
// a function which is user is declared and call the function

// how to declare a function

1.a function is declared using the function keyword
2.use camelCase for declaring name of the number
3.a functon is reusable
4.the body of function is in code block{}
5.functions are fundamental blocks of JS
6.a function is also similar as a set of statements
7.functions is a group of code designed to perform a specific task and used to code block multiple times

// syntax and how to use a function 
function = Declare + call

// Declaring the function

function completeHomeWork()
{
//code block
}

// calling the function
completeHomeWork()


// example of function
// declaring it 
*/
// function Azhar()
// {
//     console.log("hi its a function")
// }
// Azhar() // calling is mandatory!! 


//////////////////////////////
// For loop example practice
//  for (let i = 0; i <= 10; i++)
//  {
//     console.log("2 * ",i,"=", 2 * i);
//  }

 /////////////////////////////


// Template literal's
// it is used to print a variable with strings or inside a string

// let age = 20;
// let names = "Azhar"
// console.log("my age is " + age + "and my name is azhar")
// console.log(`my age is ${age}and my name is ${names}`) // (this a shortcut template witout using (+) symbols.)
// 3 ways to use a string 

// console.log("hello")
// console.log('hello')

// if u have a variable to shoowcase in string then good to use `` (template literals)
// console.log(`hello`);
// console.log(`hello,my age is ${age}`)

/////////////////////// PRACTICE

// var a = 10;
// console.log(a);

// let b = 10;
// console.log(b)

// d = 50;
// console.log(d)

// var a = 10;
// var a = 20;
// console.log(a);

// let a = 10;
//  a = 20;
// console.log(a);


// const aadharNumber = 7568947598475;
// const phone = 5738344;
// console.log(const);

// let box = null;
// box = 20;
// console.log(box)

// let box1;
// console.log(box1);

// let person = {
//    fname: "azhar",
//    age: 20,
//    isAlive: true,

// }
// console.log(person.fname);
///////////////  ARRAYS
// let students = ["ab","cd","ef","gh","jk"]
// console.log(students[0]);

/////////Assignment operator

// let num = 10;
// num +=5;
// num -=5;
// num *=5;
// num **=2;
// console.log(num);

// let num = 4;
// num **= 3;
// console.log(num);

// let a = 2;
// let b = 3;
// console.log(a ** b);

// let pobj = {
//    fname:"azhar",
//    age: 22
// }
// console.log(typeof pobj , pobj);

// let arr = [1,2,3,"azhar",true];
// console.log(typeof arr , arr[4])

// let arrr = [10, 20, 30, "Suhail", false];
// console.log(typeof arrr)

// let a1 = "Suhail";
// let b1 = "Ali";

// console.log(a1 + "" + b1);

// let c = 10;
// let d = 10;
// console.log(c & d); // AND 

// let e =10;
// let f = 20;
// console.log(e | f); // OR 

// let z = 20;
// console.log(~z); // NOT

// let a = true;
// let b = false;
// // console.log(a > b && b > a);

// // console.log(a > b || b > a);

// console.log(!a, !b);

// let x = 5;
// let y = "5";
// console.log(x !== y);

/////////////////////////////////////////// 19 march

// Types of Functions 
/*
1.Simple Function
2.Functions Parameter
3.Function Return
4.Function Expression
5.Arrow Function

*/

// Simple Function

// function azharFarhan() {
//     console.log("Hello")
// }

// azharFarhan()

// Function Parameter

// A function can also be declared with parameter
// A parameter is a value that is passed when declaring a function

// let  age = 22;
// let fname = "Azhar";

// function callName(){
// console.log(`Hello ${fname} you are ${age} years old`);
// }
// callName();

// function add(num1,num2,num3){
//     let sum = num1 + num2 + num3
//     // console.log(num);
//     return sum;
//     console.log("hello azhar");
// }

// let finalValue = add(1,2,3);
// console.log(first)



// function sumNumbers(a, b, c, d) {
//         console.log(a + b + c + d)
//     }
    
//     sumNumbers(10, 20, 10, 10)






// function Expression
/*
it is a way to define a function as part of an expression, usually by assigning it to variable. unlike function declarations, function expressions are not hoisted, meaning they r only avaialble after they r defined.
*/


// simple function example

// function sayHello(){
//     console.log("hello");

// }
// sayHello()

// function expression ( also called anonymous function)
// let sayHello = function() {
//     console.log("hello");
// }
// sayHello()

// 1. take function name with a let and add bfore function.
// 2. Add an equal to (=) sign.


// Function Hoisting
/*
in JS, Hoisting is a behaviour in which a function or variable can b used bfore declaration is called Hoisiting
*/
//// hoisting included below in example..

// sayHello()
// function sayHello(){
//     console.log("hello");
// }

/// hoisting not applicated below

// function sayHello(){
//     console.log("hello");
// }
// sayHello();

//// we can initialize sayHello() before i.e Hoisting only in simple function and not in other functions.  

// sayHello()
// let sayHello = function (){
//     console.log("hello");
// }                             ///// error in output since its expression function.

// Arrow Functions
/*
1. introduce in  ES6
2. allows us to write shorter function syntax
*/
// before Arrow func

// let sayBye = function () {
//     console.log("bye");
// }
// sayBye();

// After Arrow Func

// let sayBye = () => {    
//     console.log("bye");
// }
// sayBye();

// Note : > Hoisitng will not work in function expression and in arrow function.
//        > Hoisting will work only in Simple Functions.

// IIFE ( Immediately Invoked Function Expression).
/*
a function expression can be immediately executed by wrapping it in parentheses.
*/

// (function () {
//     console.log("Hello");
// })
// ();