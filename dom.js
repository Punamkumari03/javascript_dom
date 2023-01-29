// console.dir(document);
// examine document object
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all[10]);
// // document.all[10].textContent='Hello';
// console.log(document.forms);
// console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
var cardTitle=document.getElementById('item');
// console.log(headerTitle);
// headerTitle.textContent='Hello';
header.style.borderBottom='solid 3px #000';
cardTitle.style.color='green'
cardTitle.style.fontweight='bold';


// console.log(cardTitle);
//getelement by classname
var items=document.getElementsByClassName('list-group-item');
console.log(items)
console.log(items[1]);
items[1].textContent='Hello 2';
items[1].style.fontweight='bold';
items[1].style.backgroundColor='yellow';

// give error
// items.style.backgroundColor='red';
for(var i=0; i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4'
}
items[2].style.backgroundColor='green';
for(var i=0; i<items.length;i++){
    items[i].style.fontweight='bold';
}
