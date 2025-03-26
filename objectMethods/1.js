// Object methods

// 1. keys()
// Takes all the keys from an object and returns them as an array.

// let obj = {
//     name: "Azhar",
//     age: 20,
//     city: "Hyd"
// };
// let keys = Object.keys(obj);
// console.log(keys); // ["name", "age", "city"]

// 2. values()
// Takes all the values from an object and returns them as an array.

// let obj = {
//     name: "Azhar",
//     age: 20,
//     city: "Hyd"
// };
// let values = Object.values(obj);
// console.log(values); // ["Azhar", 20, "Hyd"]

// 3. object.fromEntries()
// converts array into an object.

// let arr = [["name", "Azhar"],["age", 20],["city", "Hyd"]];
// console.log(Object.fromEntries(arr)); // {name: "Azhar", age: 20, city: "Hyd"}


// 3. entries()
// converts an object into an array.

// let obj = {
//     name: "Azhar",
//     age: 20,
//     city: "Hyd"
// };
// let entries = Object.entries(obj);
// console.log(entries); // [["name", "Azhar"], ["age", 20], ["city", "Hyd"]]

// 4. object.seal()
// Only updates the value of an object, but does not allow to add or delete properties.

// let obj = {
//     name: "Azhar",
//     age: 20,
//     city: "Hyd"
// };
// Object.seal(obj);
// obj.city = 'DXB';
// console.log(obj); // {name: "Azhar", age: 20, city: "DXB"}
// obj.country = "India";
// console.log(obj); //  It Doesn't add country {name: "Azhar", age: 20, city: "DXB"}

// 5. isSealed()
// Checks whether an object is sealed or not.
// gives True or False only

// let obj = {
//     name: "Azhar",
//     age: 20,
//     city: "Hyd"
// };
// Object.seal(obj);
// console.log(Object.isSealed(obj)); // true

// 6. object.freeze()
// Prevents any changes to an object.
// It doesn't allow to update, add or delete properties.

// let obj = {
//     name: "Azhar",
//     age: 20,
//     city: "Hyd"
// };
// Object.freeze(obj);
// obj.city = 'DXB';
// console.log(obj); // (CAN'T UPDATE/ADD/DLT) {name: "Azhar", age: 20, city: "Hyd"}
// obj.country = "India";
// console.log(obj); // (CAN'T UPDATE/ADD/DLT) {name: "Azhar", age: 20, city: "Hyd"}
// delete obj.city;
// console.log(obj); // (CAN'T UPDATE/ADD/DLT) {name: "Azhar", age: 20, city: "Hyd"}

// 7. isFrozen()
// Checks whether an object is frozen or not.
// gives True or False only

// let obj = {
//     name: "Azhar",
//     age: 20,
//     city: "Hyd"
// };
// Object.freeze(obj);
// console.log(Object.isFrozen(obj)); // true









 


