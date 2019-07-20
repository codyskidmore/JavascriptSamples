const title = "";
document.title = title;
//document.querySelector("h1").innerHTML = title;

console.log(document.bgColor);
console.log(document.all);
console.log(document.all[0]);
console.log(document.all[1]);
console.log(document.all[2]);
console.log(document.all.length);
console.log(document.head);
console.log(document.body);
console.log(document.doctype);
console.log(document.URL);
console.log(document.baseURI);
console.log(document.documentURI);
console.log(document.forms);
const form = document.forms[0];
console.log(form.id);
console.log(form.method);
console.log(form.innerHTML);
console.log(document.links);
console.log(document.links[0].className);
console.log(document.scripts[2].getAttribute('src'));

Array.from(document.scripts).forEach(function(script){
    console.log(script);
});