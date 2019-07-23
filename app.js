const title = "Creating Elements";
document.title = title;

const li = document.createElement('li');
li.className = 'collection-item';
li.id = 'new-item';
li.setAttribute('title','New Item');
li.appendChild(document.createTextNode('New List Item'));
const anchor = document.createElement('a');
anchor.className = 'delete-item secondary-content';
anchor.innerHTML = '<i class="fa fa-remove"></i>';
anchor.href = '#';

li.appendChild(anchor);

console.log(li);

const ul = document.querySelector('ul');
ul.appendChild(li); // see browser output
