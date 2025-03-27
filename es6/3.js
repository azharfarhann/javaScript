// Import and Export

// Exporting a function

function mul(x, y) {
  return x * y;
}

function add(x, y) {
  return x + y;
}

// console.log(mul(1, 2));
// console.log(add(1, 2));

// export default mul; // Exporting only 1 function
// export default add; // Exporting only 1 function
export {mul , add}; // Exporting multiple functions