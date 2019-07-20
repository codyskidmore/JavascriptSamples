const title = "Block Scope With let & const";
document.title = title;
document.querySelector("h1").innerHTML = title;

// Global scope
var a = 1; 
let b  = 2;
const c = 3;

for(let a = 0; a < 10; a++){
    console.log(`Loop scope of a: ${a}`);
}
// var a unaffected because loop declared 'a' using 'let' in inner scope.
// declaring for(var a...) would change the globally scoped var a. 
console.log('Global Scope', a, b, c); 

function test(){
    var a = 4; 
    let b  = 5;
    const c = 6;
    console.log('Function Scope', a, b, c);
}

test();

console.log('Global Scope', a, b, c); // var a unaffected.

if (true){
    // block scope
    var a = 4;  // collision
    let b  = 5;
    const c = 6;
    console.log('Block Scope', a, b, c);
}

console.log('Global Scope', a, b, c);  // var a was changed by block scope.
