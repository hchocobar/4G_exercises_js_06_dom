let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let list = document.querySelector("#myList");
	console.log("list: ", list)
	let element = document.createElement("li");
	element.innerHTML = "New Element in list";
	console.log("element: ", element)
	list.appendChild(element);
});
