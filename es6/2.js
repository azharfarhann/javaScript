// try catch error
// used to handle the exceptions in JS

try {
  console.log('Start of try runs');
  unicycle;
  console.log('End of try runs');
}
catch (err) {
  console.log('Catch is ignored, because there are no errors');
}   

// part 1 code
// let student = null;
// console.log(student.length); // Uncaught TypeError: Cannot read property 'length' of null

// part 2 code
// let student = null;
// console.log("Azhar");

// part 3 code
// let student = null;
// console.log("Azhar");
// console.log(student.length); // Uncaught TypeError: Cannot read property 'length' of null

try {
    let student = null;
    console.log(student.length);            
}  
catch (err) {
    console.log(err.name); // TypeError
}

// part 2 code
// let student = null;
// console.log("Azhar");

// part 3 code
// let student = null;
// console.log("Azhar");
// console.log(student.length); // Uncaught TypeError: Cannot read property 'length' of null

try {
    let student = null;
    console.log(student.length);            
}
catch (err) {
    console.log(err.name); // TypeError
}
finally {
    console.log("This is finally block and it will always run");
}
