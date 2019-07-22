const title = "DOM Selectors for Single Elements";
document.title = title;

// Get things using getElementById().
const taskTitle = document.getElementById('task-title');
console.log(taskTitle);
console.log(taskTitle.id);
console.log(taskTitle.className);

// Change styling. Use this for dynamic behavior, not styling.
taskTitle.style.background = '#2d78ba';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
//taskTitle.style.display = 'none'; // make it disappear.

// Change content.
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks'; // works the same as textContent
//taskTitle.innerHTML = "<span style='color: blue'>Task list inner html</span>"; // injects span into DOM.

// Get things by using querySelector()
console.log(document.querySelector('#task-title')); // by id
console.log(document.querySelector('.card-title')); // by class
console.log(document.querySelector('h5')); // get 1st h5
document.querySelector('li').style.color = 'red'; // Changes 1st li on page
document.querySelector('div ul').style.color = 'blue'; // Changes default text color for items within a ul within a div element on page
document.querySelector('li:last-child').style.color = 'orange'; // change last li using css pseudo classes
document.querySelector('li:nth-child(3)').style.color = 'orange'; // change 3rd li using css pseudo classes
document.querySelector('li:nth-child(4)').innerText = 'hello world'; // change 3rd li using css pseudo classes

