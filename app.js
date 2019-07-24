const title = "Event Bubbling & Delegation";
document.title = title;

const cardTitle = document.querySelector('#card-title');
const cardContent = document.querySelector('#card-content');
const card =  document.querySelector('#main');

////////////////////// Event bubbling

function runCardTitleClickEvent(e){
    console.log('card title clicked');
}
function runCardContentClickEvent(e){
    console.log('card conent bubbled');
}
function runCardClickEvent(e){
    console.log('card bubbled');
}

// cardTitle.addEventListener(MouseEvents.Click(), runCardTitleClickEvent);
// cardContent.addEventListener(MouseEvents.Click(), runCardContentClickEvent);
// card.addEventListener(MouseEvents.Click(), runCardClickEvent);

////////////////////// Event Delagation

////// What happens without delagation.

// Works for first item only but can be fixed by attaching with querySelectorAll()
// function deleteItem(e){
//     console.log(e.target); // icon
//     console.log(e.target.parentElement); // link
//     console.log(e.target.parentElement.parentElement); // li
// }
function deleteItem(e){
    console.log(`Deleting ${e.target.parentElement.parentElement}`);
    e.target.parentElement.parentElement.remove();
}


// Works but is more complicated and accident prone.
function deleteItemDelegate(e){
    if (e.target.parentElement.classList.contains('delete-item')){
        console.log(e.target);
    }
}

function liDeleteItem(e){
    console.log(e.target); // li via bubble up
}

// const item = document.querySelector('.delete-item');
// item.addEventListener(MouseEvents.Click(), deleteItem);

// I prefer this method over globally delegating. It does 
// not require you to add guard code to verify you are working
// with the right element. It only fires if the delete icon
// is clicked.
document.querySelectorAll('.delete-item').forEach(item => {
    item.addEventListener(MouseEvents.Click(), deleteItem);
});

// This model is more direct. It relies on the click event 
// bubbling up, but it also fires regardless of whether you
// clicked the delete icon or not.
// document.querySelectorAll('.collection-item').forEach(item => {
//     item.addEventListener(MouseEvents.Click(), liDeleteItem);
// });


////// What happens with delagation.

// Works but is more complicated and accident prone.
//const cardAction = document.querySelector('#card-action');
//cardAction.addEventListener(MouseEvents.Click(), deleteItemDelegate);

//console.log(cardTitle);