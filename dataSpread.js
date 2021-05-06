//* 1. Combining Arrays
/*Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
Once again create two arrays. Save all elements of both arrays to another variable. */
let asianCountries = ["Singapore", "India", "Japan", "Turkmenistan"];
//console.log("These are Asian nations", asianCountries);

let euroCountries = ["Cyprus", "Greece", "Slovakia", "Austria"];
//console.log("These are European countries", euroCountries);

euroCountries = [...euroCountries, ...asianCountries];
console.log("Euro and Asian countries combined are:", euroCountries);

//Once again create two arrays. Save all elements of both arrays to another variable.
let asianCountries2 = ["Iraq", "North Korea", "Thailand"];
let euroCountries2 = ["Italy", "Spain", "Ireland", "Serbia"];
let clonedNations = [...asianCountries2, ...euroCountries2];
console.log("This is new array from two arrays", clonedNations);

/* #### 2. Copying Arrays
 * Copy an array using the spread operator. Store the copied array in another variable. */
let africanCities = [
  "Douala",
  "Lagos",
  "Cairo",
  "Pretoria",
  "Bujumbura",
  "Kinshasa",
];
let copiedCities = [...africanCities];
console.log(copiedCities);

/* 3. Find the Largest...
Create a function to find the largest number in an array. */
let numbers = [300, 200, 500, 100, 50, 1000, 40];
function findLargestNum() {
  let biggest = Math.max(...numbers);
  console.log(biggest);
}
findLargestNum();

/* 
#### 4. Find the Smallest
Create a function to find the smallest number in an array. */
let arrays = [-2, 5, 40, 90, -60, 500, 30, 80, 700, -600];
function smallestNum() {
  let smallest = Math.min(...arrays);
  console.log(smallest);
}
smallestNum();

/* #### 5. Clone and Merge
Given two objects:
```javascript
const person = {name: "John"}
const job = {role: "Teacher"}
```
* 5.1 Clone the person object.
* 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so. 
* 5.3 Then change the values of the properties in the employee object. */

//SOLUTION:
// 5.1 Clone the person object.
const person = { name: "John" };
let personClone = person;
console.log("This is the 'Person' clone ==>", personClone);

//5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.

const job = { role: "Teacher" };
let employee = { ...person, ...job };
console.log(employee);

//5.3 Then change the values of the properties in the employee object.
employee.role = "Trainer"
employee.name = "Andrew Jung"
console.log(employee)