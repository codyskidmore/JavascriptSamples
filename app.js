const title = "Function Declarations & Expressions";
document.title = title;
document.querySelector("h1").innerHTML = title;

// Function Declaration

function greet(fullName = 'John Doe')
{
    return `Hello ${fullName}.`;
}

console.log(greet('Bob Jones'));
console.log(greet());

// Function Expression
const square = function(x = 1){
    return x*x;
};

console.log(square(4));

const iifeParam = 'test';
// Immediately invokable function expressions => IIFEs
(function(testParam){
    console.log(`IIFE ran with value ${testParam}`);
})(iifeParam); // Trailing parenthesis required to execute the IIFE. Param is optional.

// Property Method
const todo = {
    add: function(){
        console.log('do work');
    }
}
todo.add();

todo.delete = function(){
    console.log('deleted work');
}

todo.delete();