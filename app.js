const title = "DOM Selectors for Multiple Elements";
document.title = title;

const items = document.getElementsByTagName('li');
console.log(items[0]);

document.querySelectorAll('li:nth-child(odd').forEach(function(li, index){
    li.style.background = '#9faccc';
    li.style.color = '#fff'
    li.textContent = `${index} odd task`;
});


document.querySelectorAll('li:nth-child(even').forEach(function(li, index){
    li.style.background = '#ad9fcc';
    li.style.color = '#fff'
    li.textContent = `${index} even task`;
});
