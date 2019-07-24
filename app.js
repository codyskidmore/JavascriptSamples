const title = "Event Bubbling & Delegation";
document.title = title;

const cardTitle = document.querySelector('#card-title');

function runClickEvent(e){
    console.log('card title clicked');
}

cardTitle.addEventListener(MouseEvents.Click(), runClickEvent);

//console.log(cardTitle);