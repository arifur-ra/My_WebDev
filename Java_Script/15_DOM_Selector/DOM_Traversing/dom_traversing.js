let val;
const list = document.querySelector("ul.collection");
//console.log(list);
const firstListItem = document.querySelector("li.collection-item:first-child");

val = list;
val = firstListItem;
//........................Children.......................

// Get childNodes :its count  space between list  as a text
val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
/**
 * Node Type Return Value means
 * (1)-Element
 * (2)-Attribute
 * (3)-Text Node
 * (8)-comment
 * (9)-document it self
 * (10)-Doctype
 */

// Get Children: brings the element list

val = list.children;
val = list.children[1];
val = list.children[1].textContent;
val = list.children[1].textContent = "Hello";

list.children[0].children[0].id = "list-link";
val = list.children[0].children[0];

// First Child-firstElement child

val = list.firstChild; // its brings node child it could be #text node
val = list.firstElementChild; // its bring only htmlElement

// last Child-firstElement child

val = list.lastChild; // its brings node child it code be #text node
val = list.lastElementChild; // its bring only htmlElement

// Count children
val = list.children.length;
val = list.childElementCount;
console.log("Children Element", val);

// ..........................Parent................................

val = firstListItem.parentElement;
console.log("Parent Element", val);

// .............................Siblings............................

val = firstListItem.previousElementSibling;
console.log(" Previous Siblings Element", val); // accepted result null

val = list.lastChild.previousElementSibling;
console.log("last child Siblings Element", val);

val = firstListItem.nextElementSibling;
console.log(" Next Siblings Element", val);
val = firstListItem.nextElementSibling.nextElementSibling;
console.log(" next next Siblings Element", val);
