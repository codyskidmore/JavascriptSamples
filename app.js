const title = "Javascript Sandbox: Object Literals";
document.title = title;
document.querySelector("h1").innerHTML = title;

const person = {
  firstName: "Bob",
  lastName: "Jones",
  age: 40,
  emailAddress: 'bob@example.com',
  hobbies: ['Photography','Cooking'],
  adderss: {
    street: '504 West Hollywood Blvd',
    city: 'Hollywood',
    state: 'California'
  },
  getBirthYear: function(){
    return new Date().getFullYear() - this.age;
  }
};

console.log(person); // see output
console.log(person.firstName); // Bob
// also works but not recommended
//console.log(person['firstName']);
console.log(person.getBirthYear()); // March
console.log(person.adderss.state); // California

// Array of object literals
const people = [
  {name: 'Bob', age: 30},
  {name: 'Joyce', age: 29}
];

console.log(people);

people.forEach(person => {
  console.log(person.name); // Bob, Joyce
});