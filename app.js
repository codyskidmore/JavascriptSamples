const title = "Keyboard & Input Events";
document.title = title;

class FormEvents {
    static Submit(){
        return 'submit';
    }
}
class InputEvents {
    static Input(){
        return 'input';
    }
    static Change(){
        return 'change';
    }
    static Focus(){
        return 'focus';
    }
    static Blur(){
        return 'blur';
    }
    static Cut(){
        return 'cut';
    }
    static Copy(){
        return 'copy';
    }
    static Paste(){
        return 'paste';
    }
}

class KeyboardEvents {
    static KeyDown(){
        return 'keydown';
    }
    static KeyUp(){
        return 'keyup';
    }
    static KeyPress(){
        return 'keypress';
    }
}

////// Input events.
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskTitle = document.querySelector('#task-title');
// Clear input
taskInput.value = '';

function inputRunEvent(e){
    console.log(e.target.querySelector('input').value);
    console.log(`Event Type: ${e.type}`);
    e.preventDefault();
}

form.addEventListener(FormEvents.Submit(), inputRunEvent);

////// Keyboard events

function keyboardRunEvent(e){
    console.log(`Key: ${e.key}, Key Code: ${e.keyCode}`);
    console.log(`Event Type: ${e.type}`);
    console.log(e);
    taskTitle.innerText = `Tasks (${e.target.value})`;
}

// taskInput.addEventListener(KeyboardEvents.KeyDown(), keyboardRunEvent);
// taskInput.addEventListener(KeyboardEvents.KeyUp(), keyboardRunEvent);
// taskInput.addEventListener(KeyboardEvents.KeyPress(), keyboardRunEvent);
// taskInput.addEventListener(InputEvents.Focus(), inputRunEvent);
// taskInput.addEventListener(InputEvents.Blur(), inputRunEvent);

/////// Input events
function inputRunEvent(e){
    console.log(`Event Type: ${e.type}`);
    console.log(`Target: ${e.target.id}`);
    console.log(`Target: ${e.target.value}`);
}

function detectUndoEvent(e){
    if (e.ctrlKey && e.code === 'KeyZ'){
        console.log('Undo event detected');
        console.log(e.target);
    }
}

// Set globally but can target a specific input.
document.addEventListener(KeyboardEvents.KeyDown(), detectUndoEvent);
document.addEventListener(InputEvents.Cut(), inputRunEvent);
document.addEventListener(InputEvents.Copy(), inputRunEvent);
document.addEventListener(InputEvents.Paste(), inputRunEvent);
document.addEventListener(InputEvents.Input(), inputRunEvent);

const select = document.querySelector('#select-test'); // Must disable reference to materialize stylesheet to make this part work..
select.addEventListener(InputEvents.Change(), inputRunEvent);