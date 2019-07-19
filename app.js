const title = "Switch Statements";
document.title = title;
document.querySelector("h1").innerHTML = title;

class Colors {
    static get RED(){
        return {
            name: 'red',
            hex: '#f00'
        }
    }
    static get BLUE(){
        return {
            name: 'blue',
            hex: '#00f'
        }
    }
    static get GREEN(){
        return {
            name: 'green',
            hex: '#0f0'
        }
    }
}

const color = Colors.RED.name;

switch(color)
{
    case Colors.RED.name:
        console.log('Color is red');
        break;
    case Colors.BLUE.name:
        console.log('Color is blue');
        break;
    case Colors.GREEN.name:
        console.log('Color is green');
        break;
    default:
        console.log('Unknown color');
}