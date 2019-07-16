let val;

// number to string
val = 5;
console.log("Number");
console.log(val);
console.log(typeof val);
console.log(val.length);

// Convert to string
console.log("Number to string");
val = String(5);
console.log(val);
console.log(typeof val);
console.log(val.length);

// bool to string
console.log("bool to string");
val = String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);

// Date to string
console.log("Date to string");
val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

// array to string
console.log("array to string");
val  = String([1,2,3]);
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log("literal to string");
val = (5).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);

let val2 = 5;
val = (val2).toString();
console.log("ToString option");
console.log((val2).toString); // does not work BTW => ƒ toString() { [native code] }

console.log(val);
console.log(typeof val);
console.log(val.length);

console.log("string to number");
val = Number('5');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

console.log("string to number");
val = Number('5');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

// Other tests.
console.log("Other to number tests");
console.log(Number(true));  // 1
console.log(Number(false)); // 0
console.log(Number(null));  // 0
console.log(Number('hello')); // NaN
console.log(Number([1,2,3])); // NaN
console.log(parseInt('11')); // 11
console.log(parseInt('11.11')); // 11
console.log(parseFloat('11.11')); // 11.11