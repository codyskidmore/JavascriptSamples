const title = "Removing & Replacing Elements";
document.title = title;

/////// Replace element demo

// Create new element
const h2Title = document.createElement('h2');
h2Title.id = 'task-title';
h2Title.appendChild(document.createTextNode('Task List'));

// Get the old element
const h5Title = document.querySelector('#task-title');

// Get old element's parent.
const parent = h5Title.parentElement;

// Do the replacement
parent.replaceChild(h2Title, h5Title); // See output.

/////////// Remove element.
const ul = document.querySelector('ul');
ul.children[0].remove();
const li = ul.children[2];
ul.removeChild(li);

// Modify classes & attributes
const link = ul.children[0].children[0];
console.log(link.className);
console.log(link.classList[0]);
link.classList.add('test');
console.log(link.classList);
link.classList.remove('test');
console.log(link.classList);

console.log(link.getAttribute('href')); // #
link.setAttribute('href','https://google.com');
console.log(link.getAttribute('href')); // https://google.com
console.log(link.hasAttribute('href')); // true
console.log(link.hasAttribute('title')); // false
link.setAttribute('title', 'my-title');
console.log(link.hasAttribute('title')); // true
link.removeAttribute('title');
console.log(link.hasAttribute('title')); // false
