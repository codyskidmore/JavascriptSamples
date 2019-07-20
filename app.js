const title = "The Window Object";
document.title = title;
document.querySelector("h1").innerHTML = title;

// Window methods, objects, & properties. Window is implied infront of it.
// console.log(123); // window.console.log(123);

// Dialog Windows
// alert('hello');
// alert(prompt());

// if(confirm('Are you sure?')){
//     alert('ok');
// }
// else{
//     alert('canceled');
// }

// Window Properties
console.log(window.outerHeight); // edge of the window
console.log(window.outerWidth);
console.log(window.innerHeight);
console.log(innerHeight); // Remember, window is implied.

// Scroll points
console.log(window.scrollX);
console.log(window.scrollY);

// Location object

console.log(location);
console.log(location.host); // 127.0.0.1:5500
console.log(location.hostname); // 127.0.0.1 => localhost IP address for demo but domain name when one exists.
console.log(location.port); // 5500
console.log(location.href); // http://127.0.0.1:5500/index.html
console.log(location.search); // Change to http://127.0.0.1:5500/?id=1&name=Joe&member=standard in the browser address bar => ?id=1&name=Joe&member=standard
// redirect to google.com
//location.href = 'https://google.com';

// Reload page
//window.location.reload(); causes the page to infinitely reload if done wrong.

// History
//window.history.go(-1); // go back a page.
//window.history.go(1); // go back a page.
console.log(window.history.length);

// Navigator Object
// Trivia: Called 'navigator because its origin is from Netscape Navigator
// Navigator is the actual browser object used inside the window object.
console.log(window.navigator);
console.log(window.navigator.appCodeName); // Mozilla
console.log(window.navigator.appName); // Netscape
console.log(window.navigator.appVersion); // ID the actual browser
//5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36
// 5th generation browser, Chrome version, etc. 
console.log(window.navigator.userAgent);
//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36
console.log(window.navigator.platform); // Win32
console.log(window.navigator.vendor); // Google Inc.
console.log(window.navigator.language); // en-US


