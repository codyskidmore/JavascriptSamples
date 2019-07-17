const title = "Javascript Sandbox: Object Literals";
document.title = title;
document.querySelector("h1").innerHTML = title;

const person = {
  firstName: "Bob",
  lastName: "Jones"
};

console.log(person);
console.log(person.firstName);