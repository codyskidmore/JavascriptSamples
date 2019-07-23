const title = "Event Listeners & the Event Object";
document.title = title;


class MouseEventType{
    static Click(){
        return 'click';
    }
    static MouseOver(){
        return 'mouseover';
    }
}


const btn = document.querySelector('#clear-item-button');
btn.addEventListener(MouseEventType.Click(), function(eventObj){
    console.log(`${eventObj.type} event.`);
    console.log(eventObj.timeStamp)
    console.log(`X: ${eventObj.clientX}, Y: ${eventObj.clientY}`);
    // Get offset relative to the position of the element coordinates.
    console.log(`X offset: ${eventObj.offsetX}, Y offset: ${eventObj.offsetY}`);

    // Set the href to '#' on teh button to stop browser 
    // from redirecting which causes it to flash and disappear.
    // Better -- we can use the event method to stop the
    // browser from redirecting.
    eventObj.preventDefault();
});

// Also accomplished with a named event/function


function onClickEvent(eventObj){
    console.log(`${eventObj.type} event.`);
    console.log(eventObj);
    // Most important property is 'target' element.
    const target = eventObj.target
    console.log(target.id);
    console.log(target.classList);
    target.innerText = 'I was mouse overed.';
    // Set the href to '#' on teh button to stop browser 
    // from redirecting which causes it to flash and disappear.
    // Better -- we can use the event method to stop the
    // browser from redirecting.
    eventObj.preventDefault();
}

btn.addEventListener(MouseEventType.MouseOver(), onClickEvent);
