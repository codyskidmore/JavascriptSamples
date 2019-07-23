const title = "Traversing the DOM";
document.title = title;

const ul = document.querySelector('ul');

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

////  Children

// ul.ChildNodes returns all nodes including line breaks (i.e. NodeTypes.TextNode)
console.log(ul.childNodes);
console.log(ul.childNodes[0].nodeType === NodeTypes.TextNode); // true

// ul.children returns only the actual children of an element [i.e the nested li elements (NodeType.Element)]
console.log(ul.children);
console.log(ul.children[0].nodeType == NodeTypes.Element); // true

// Navigate down
const li = ul.children[0];
li.id = 'test-link';
console.log(li);
console.log(li.childNodes);
console.log(li.children);

console.log(ul.firstChild) ;// returns 1st childNode. Same for last child.
console.log(ul.firstElementChild); // you guested it..
console.log(ul.lastElementChild);
console.log(ul.childElementCount);

/////////// Parents
console.log(li.parentNode); // ul collection
console.log(li.parentElement); // In this case returns the same value.
console.log(li.parentElement.parentElement); // card-action

// Navigate to next.
console.log(li.nextSibling); // text
console.log(li.nextElementSibling); // next li
console.log(li.previousSibling); // text
console.log(li.previousElementSibling); // null because li is the 1st in list.


