// Your code here
let list = document.querySelector("ul");
let element = document.querySelector("#addToDo");

// funcion para crear el Listener para todos los trash
function createListenerToTrash () {
    let trash = document.querySelectorAll("span");
    trash.forEach(element => {
        // crea un evento para eliminar el li completo de cada span
        element.addEventListener("click", function() {
            elementLi = element.parentNode;
            elementLi.remove();
        })
    });
}

// agrega una tarea
element.addEventListener("change", function() {
	//your code here
    let elem = document.createElement("li");
    elem.innerHTML = '<span><i class="fa fa-trash"></i></span> ' + element.value + ' ';
    list.appendChild(elem);
    element.value = null;
    createListenerToTrash();
});

// ejecuto la función que creará todos los Listener de los trash
createListenerToTrash();