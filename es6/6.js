// spread operator(..)

let user = {
    fname: "Azhar",
    age: 25
}

let updated = {
    ...user
    city: "Hyd"
}

console.log(updated);

let arr1 =["hello", "azhar", "shamil"];

console.log(...arr1, typeof arr1);

// let person = {
       ...updated
};

console.log(person);

// Rest Operator (...)
 // if u r using spread oprtr inside a function parameter 
function sum(...nums) {
    return nums.reduce((start,curr) =>{
        return start + curr
    }, 0)
}

let final = sum(3,4,5,6,7,8,9)
console.log(final);

// let nums = [1,2,3];

// let allNums = nums.reduce((start,current) => start + current)

// console.log(allNums)

// Default Parameters in Functions

// function sayHello(age =20, myName="Guest") {
console.log(`hello my name is $(myName) and age is $(age)`)
};

function Add(a =0, b=0){
    return a * b
}
let ans = Add();
console.log(Add);