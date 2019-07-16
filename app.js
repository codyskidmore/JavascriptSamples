///////////// Primative types

// string
const name = 'Jane';
console.log(typeof(name));
// number
const age = 45;
console.log(typeof(age));
// boolean
const flag = true;
console.log(typeof(flag));
// null
const nullTest = null;
console.log(typeof(nullTest)); // returns object which is actually a bug. https://stackoverflow.com/questions/18808226/why-is-typeof-null-object
// undefined
let undefinedTest;
console.log(typeof(undefinedTest));
// symbol
const symbolTest = Symbol();
console.log(typeof(symbolTest))

///////////// Reference types

// array
const arrayTest = ['a','b'];
console.log(typeof(arrayTest));
// Object literal
const objetLiteral = {
  city: 'Concord',
  state: 'NH'
};
console.log(typeof(objetLiteral));
// date
const today = new Date();
console.log(typeof(today));

