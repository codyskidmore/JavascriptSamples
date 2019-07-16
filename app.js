// var, let, const
// do not use var - deprecate it.

// var name = 'John Doe';
// console.log(name);
// var name = 'Jane Doe';
// console.log(name);

// var message; // undefined
// console.log(message);
// message = 'Hello';
// console.log(message);
// message = 1; // Danger zone.
// console.log(message);

// varibles can include letters, numbers, _, & $. Cannot start /w a number. Not recommended  
// to start /w $. Starting /w '_' implies private var.
// Use camel case naming convention.

// let name = 'John Doe';
// console.log(name);
// name = 'Jane Doe';
// console.log(name);

// Required to initialize const
// const message;  // Uncaught SyntaxError: Missing initializer in const declaration
const name = 'John Doe';
console.log(name);

// const literal
const person = {
  name: 'Jane',
  age: 40
}

person.name = 'Mark'; // can change properties
// person = {name = 'John', age = 30}; // Uncaught SyntaxError: Invalid shorthand property initializ
console.log(person);

const numbers = [1,2,3,4,5];
console.log(numbers);
numbers.push(6);
console.log(numbers);
// numbers = [1,2,3,4,5]; // app.js:44 Uncaught TypeError: Assignment to constant variable.

// Use const unless the value will change. Otherwise use let.