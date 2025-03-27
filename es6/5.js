// Destructoring Object and Array
// Destructoring Object
const person = {
    fname: 'Azhar',
    age: 20,
    city: 'Hyd'
    };

const {fname, age, city} = person; 
// const declare all variables in one line
// take variables of same name as object keys called person 

console.log(fname, age, city); // Azhar 20 Hyd


// Destructoring Array

let arr = [10, 20, 30, 40, 50];
let [a, b, c, d] = arr;    
// const declare all variables in one line
// take variables of same name as array index   
console.log(a, b, c, d); // [10, 20, 30, 40]