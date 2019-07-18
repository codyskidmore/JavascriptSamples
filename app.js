const title = "Dates & Times";
document.title = title;
document.querySelector("h1").innerHTML = title;

const today = new Date();
const birthDate = new Date('09-10-1981 11:25:00:500');
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
const anotherDate = new Date(2019,7,15,11,30,15);
console.log(today.getMonth()); // Months are zero based which is kind of weird.
console.log(today.getDay()); // again zero based.
console.log(today.getTime()); // gets the timestamp in milliseconds
console.log(today.toTimeString());
console.log(today.getFullYear()); // current year
console.log(today.getUTCFullYear()); //current UTC year.
console.log(typeof today);
console.log(birthDate);
console.log(anotherDate);
birthDate.setMonth(2)
console.log(birthDate);
