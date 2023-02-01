// // console.dir(document);
// // examine document object
// // console.log(document.domain);
// // console.log(document.URL);
// // console.log(document.title);
// // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.all[10]);
// // // document.all[10].textContent='Hello';
// // console.log(document.forms);
// // console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// var cardTitle=document.getElementById('item');
// // console.log(headerTitle);
// // headerTitle.textContent='Hello';
// header.style.borderBottom='solid 3px #000';
// cardTitle.style.color='green'
// cardTitle.style.fontweight='bold';


// // console.log(cardTitle);
// //getelement by classname
// var items=document.getElementsByClassName('list-group-item');
// console.log(items)
// console.log(items[1]);
// items[1].textContent='Hello 2';
// items[1].style.fontweight='bold';
// items[1].style.backgroundColor='yellow';

// // give error
// // items.style.backgroundColor='red';
// for(var i=0; i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4'
// }
// items[2].style.backgroundColor='green';
// for(var i=0; i<items.length;i++){
//     items[i].style.fontweight='bold';
// }
// //getelementbytagname
// var li=document.getElementsByTagName('li');
// console.log(li)
// console.log(li[1]);
// li[1].textContent='Hello 3';
// li[1].style.fontweight='bold';
// li[1].style.backgroundColor='yellow';
// for(var i=0; i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4'
// }

// //queryselector
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc'
// var input = document.querySelector('input');
// input.value='Hell world'
// var submit = document.querySelector('input[type="submit"]');
// submit.value='SEND';
// var item = document.querySelector('.list-group-item');
// item.style.color='red'
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue'
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='orange'

// //queryselectrall
// var titles=document.querySelectorAll('.title')
// console.log(titles)
// titles[0].textContent='hello'
// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<odd.length;i++){
//    odd[i].style.backgroundColor='green';
//    even[i].style.backgroundColor='#f4f6';
// }
// //TRAVERSING THE DOM
// var itemList=document.querySelector('#items');
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor='#f4f4f4';
// // console.log(itemList.parentNode.parentNode.parentNode);
// // parentelement--------------------------------------------------------------------------
// // console.log(itemList.parentElement);
// // itemList.parentElement.style.backgroundColor='#f4f4f4';
// // console.log(itemList.parentElement.parentElement.parentElement);

// // Childnode-----------------------------------------------------------
// // console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow'

// // firstchild--------------------------------------------------------------------
// console.log(itemList.firstChild)
// //firstelementchild---------------------------------------------------------------------------
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Punam';

// // lastchild--------------------------------------------------------------------
// console.log(itemList.lastChild)
// //lastelementchild---------------------------------------------------------------------------
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Raja';

// //nextSibling----------------------------------------------------------------------------------
// console.log(itemList.nextSibling);
// //nextElementSibling----------------------------------------------------------------------------------
// console.log(itemList.nextElementSibling);
// //previousSibling----------------------------------------------------------------------------------
// console.log(itemList.previousSibling);
// //previousElementSibling----------------------------------------------------------------------------------
// console.log(itemList.previousElementSibling);

// // createelement---------------------------------------------------------------------------------------
// //create a div
// var newDiv=document.createElement('div');
// //Add class
// newDiv.className='hello';
// //Add id
// newDiv.id='hello1';
// //add attr
// newDiv.setAttribute('title','hello Div');
// //create text node
// var newdivText=document.createTextNode('hello world');

// //add text to div
// newDiv.appendChild(newdivText);

// var container=document.querySelector('header.container');
// var h1=document.querySelector('header h1');

// console.log(newDiv)
// container.insertBefore(newDiv,h1);


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}