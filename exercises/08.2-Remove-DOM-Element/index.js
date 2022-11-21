let list = document.querySelector('#parentLi')
console.log(list.childNodes);
let childs = list.childNodes[3];
list.removeChild(childs);