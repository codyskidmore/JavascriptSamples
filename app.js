const name = 'Joe';
const age = 30;
const job = 'Programmer';
const city = 'Houston';
let html;

// Template the ES5 way
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';
// document.body.innerHTML = html;

// Template the ES6 way
// Also works with expressions and functions.
html = `
    <ul>
      <li>Name: ${name}</li>
      <li>Age: ${age}</li>
      <li>Job: ${job}</li>
      <li>City: ${city}</li>
    </ul>
`;
document.body.innerHTML = html;
