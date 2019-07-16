const firstName = 'Joe';
const lastName = 'Blow';

console.log(firstName+lastName); // 'JoeBlow'
// Concatenation.
console.log(firstName+' '+lastName); // 'Joe Blow'
let concatTest = firstName;
concatTest += ' ';
concatTest += lastName
console.log(concatTest); // 'Joe Blow'

// escaping
let escapeTest = "That's now to embed single quotes";
escapeTest = 'That\'s now to escape single quotes';
console.log(escapeTest.length);
console.log(firstName.concat(' ', lastName));
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName[0]); // 'J'
console.log(firstName.indexOf('o')); // 1
console.log(('William').lastIndexOf('l')); // 3
console.log(firstName.charAt(2)); // 'e'
console.log(firstName.charAt(firstName.length - 1)); // 'e'

function lastChar(stringValue){
  return stringValue.charAt(stringValue.length - 1);
};

console.log(lastChar(lastName)); // 'w'
console.log(lastName.substr(0,2)); // 'Bl'
console.log(lastName.slice(0,2)); // 'Bl'
console.log(lastName.slice(-2)); // 'ow'
console.log(escapeTest.split(' ')); // ["That's", "now", "to", "escape", "single", "quotes"]
console.log(lastName.replace('w', 'wn')); // 'Blown'
console.log(lastName.includes('Bl')); // true