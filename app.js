// var, let, const
// do not use var - deprecate it.

var name = 'John Doe';
console.log(name);
var name = 'Jane Doe';
console.log(name);

var message; // undefined
console.log(message);
message = 'Hello';
console.log(message);
message = 1; // Danger zone.
console.log(message);

// varibles can include letters, numbers, _, & $. Cannot start /w a number. Not recommended  
// to start /w $. Starting /w '_' implies private var.
// Use camel case naming convention.

