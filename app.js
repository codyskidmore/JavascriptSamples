const title = "If Statements & Comparison Operators";
document.title = title;
document.querySelector("h1").innerHTML = title;

// The key part of this demo is the definition of truthy/falsy
// JavaScript tries to coerce the type and compare it if you use
// a '==', so 100 == '100' is true. However if you use '===', JavaScript 
// compares the type and the value to verify they are exactly the same.

// The rest of the conditional blocks & operators work the same as other languages.

let value = '100';

console.assert(value === 100, 'assert says value is not 100');

if (value === 100)
{
  console.log('value and type match.');
}

if (value == 100)
{
  console.log('value matches.');
}

if (value !== 100)
{
  console.log('value or type mismatch.');
}

if (typeof(value) !== 'undefined')
{
  console.log(`value is ${value}`);
}

value = undefined;

if (typeof(id) === 'undefined')
{
  console.log('id is now undefined');
}

// Just for giggles, Ternary Operator. Note the '==='.
console.log(value === 100 ? 'correct' : 'incorrect');