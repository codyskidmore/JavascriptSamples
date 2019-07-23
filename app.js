const title = "Const/Enum pseudo types";
document.title = title;

// Node Types
class NodeTypes{
    static get Element(){
        return 1;
    }
    static get Attribute(){
        return 2;
    }
    static get TextNode(){
        return 3;
    }
    static get Comment(){
        return 4;
    }
    static get Document(){
        return 5;
    }
    static get DocumentType(){
        return 6;
    }
}

class Colors {
    static get Red(){
        return {
            name: 'red',
            hex: '#f00'
        }
    }
    static get Blue(){
        return {
            name: 'blue',
            hex: '#00f'
        }
    }
    static get Green(){
        return {
            name: 'green',
            hex: '#0f0'
        }
    }
}