const numbers = [12,43,1,5,16,2];

console.log([12,43,1,5,16,2,'me', new Date()]);
console.log(new Array(12,43,1,5,16,2,'me', new Date(), {a:1, b:2}));

console.log(numbers.length); // 6
console.log(Array.isArray(numbers)); // true
console.log(numbers[0]); // 12
numbers[1] = 100;
console.log(numbers); //  [12, 100, 1, 5, 16, 2]
console.log(numbers.indexOf(2)); // 5

// Mutating arrays.

// add to end
numbers.push(50);
console.log(numbers);

// add to front
numbers.unshift(500);
console.log(numbers);

// remove from the end
console.log(numbers.pop());
console.log(numbers);

// remove from the front
console.log(numbers.shift());
console.log(numbers);

// remove from the middle
console.log(numbers.splice(1,1));
console.log(numbers);

console.log(numbers.splice(1,2));
console.log(numbers);

// reverse order
console.log(numbers.reverse());

// concat arrays
console.log(numbers.concat([4,6]));

// sort
console.log(numbers.sort(function(x,y){
  return x - y;
}));

// also can just reverse compare function => return y - x;
console.log(numbers.reverse());

// find first element.
console.log(numbers.find(function(num){
  return num < 16;
}));

// find all that match
console.log(numbers.filter(function(num){
  return num < 16;
}));