const title = "Mouse Events";
document.title = title;

class MouseEvents{
    static Click(){
        return 'click';
    }
    static DoubleClick(){
        return 'dblclick';
    }
    static MouseOver(){
        return 'mouseover';
    }
    static MouseDown(){
        return 'mousedown';
    }
    static MouseUp(){
        return 'mouseup';
    }
    static MouseEnter(){
        return 'mouseenter';
    }
    static MouseLeave(){
        return 'mouseleave';
    }
    static MouseOver(){
        return 'mouseover';
    }
    static MouseOut(){
        return 'mouseout';
    }
    static MouseMove(){
        return 'mousemove';
    }
}

const clearBtn = document.querySelector('#clear-btn');
const card = document.querySelector('#main');
const heading = document.querySelector('#task-title');

console.log();

function runEvent(e){
    console.log(`Event Type: ${e.type}`);
    const randomRgbValue = getRandomRbgValue();
    heading.textContent = `Tasks (Coordinates: ${e.offsetX}, ${e.offsetY}, ${randomRgbValue})`;
    document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, ${randomRgbValue})`;
    e.preventDefault();
}

function getRandomRbgValue()
{
    return Math.floor(Math.random() * 255 + 1);
}

clearBtn.addEventListener(MouseEvents.Click(), runEvent);
clearBtn.addEventListener(MouseEvents.DoubleClick(), runEvent);
clearBtn.addEventListener(MouseEvents.MouseDown(), runEvent);
clearBtn.addEventListener(MouseEvents.MouseUp(), runEvent);
clearBtn.addEventListener(MouseEvents.MouseOver(), runEvent);
clearBtn.addEventListener(MouseEvents.MouseOut(), runEvent);
card.addEventListener(MouseEvents.MouseEnter(), runEvent);
card.addEventListener(MouseEvents.MouseLeave(), runEvent);
card.addEventListener(MouseEvents.MouseMove(), runEvent); // good for highly interactive events like games.


console.log(heading);
