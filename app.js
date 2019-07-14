// Log to console
/*
    Multi-line
    comment.
*/

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

console.log('Hello log');

var message = 'This is a console message';

console.log(message);
console.log([1,2,3,4,'array']);
console.log({a:1, b:'my string'}); // object literal.
console.table({a:1, b:'my string'});
console.error('my test error');
//console.clear();
console.warn('this is a warning');

// Run a timer on a peice of code.
console.time('Hello');
sleep(1000);
console.timeEnd('Hello');