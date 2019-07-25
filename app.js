const title = "Local & Session Storage";
document.title = title;

// Set local storage
// localStorage.setItem('name', 'John'); // Preserved until cleared.
// localStorage.setItem('age','40');
//sessionStorage.setItem('name', 'John'); // Discarded when browser closes.
//localStorage.clear(); // Clears out all local storage.
//localStorage.removeItem('name') // Clears just the one item.
//console.log(localStorage.getItem('name'), localStorage.getItem('age'));

function addTaskEvent(e){
    const task = document.querySelector('#task').value;
    const taskRepository = new TaskRepository();
    taskRepository.saveTasks(task);
    e.preventDefault();
}

function clearTasksEvent(e){
    const taskRepository = new TaskRepository();
    taskRepository.clearTasks();
    e.preventDefault();
}
document.querySelector('form').addEventListener(FormEvents.Submit(), addTaskEvent);
document.querySelector('#clear-tasks').addEventListener(MouseEvents.Click(), clearTasksEvent);