let main = document.querySelector("main");
let menuSection = document.querySelector(".menuSection");
let showDiv = menuSection.querySelector(".show");
let searchDiv = menuSection.querySelector(".search");
let addDiv = menuSection.querySelector(".add");
let show = false;
let desplegar = document.querySelector(".desplegar");

// Elementos del menu que se añadirán dinámicamente
let showAll = document.createElement("p");
showAll.className = "text-white fs-5 animacion menu-text";
showAll.textContent = "Todas tus tareas";

let search = document.createElement("p");
search.className = "text-white fs-5 animacion menu-text";
search.textContent = "Buscar una tarea";

let add = document.createElement("p");
add.className = "text-white fs-5 animacion menu-text";
add.textContent = "Añadir una tarea";

// Evento para desplegar/contraer el menu
desplegar.addEventListener("click", () => {
    if (!show) {
        showDiv.appendChild(showAll);
        searchDiv.appendChild(search);
        addDiv.appendChild(add);
        show = true;
        desplegar.querySelector("i").classList.replace("bi-arrow-bar-right", "bi-arrow-bar-left");
    } else {
        showAll.remove();
        search.remove();
        add.remove();
        desplegar.querySelector("i").classList.replace("bi-arrow-bar-left", "bi-arrow-bar-right");
        show = false;
    }
});
function ocultarTodo() {
    if (main.contains(formSection)) main.removeChild(formSection);
    if (main.contains(divTareas)) main.removeChild(divTareas);
}

addDiv.addEventListener("click", () => {
    ocultarTodo(); // Oculta lista de tareas
    main.appendChild(formSection); // Muestra el formulario
});

showDiv.addEventListener("click", () => {
    ocultarTodo(); // Oculta formulario
    actualizarListaTareas(); // Actualiza lista por si hay nuevas tareas

    // Mostrar mensaje si no hay tareas
    if (divTareas.innerHTML === "") {
        divTareas.appendChild(msgNull);
    }

    main.appendChild(divTareas); // Muestra lista
});

// Elementos del formulario para añadir tareas
let formSection = document.createElement("section");
formSection.className = "d-flex justify-content-center align-items-center w-100";

let formTask = document.createElement("form");
formTask.className = "formTask d-flex justify-content-start align-items-center flex-column mx-auto";


let inputName = document.createElement("input");
inputName.placeholder = "Nombre de la tarea";
inputName.type = "text";
inputName.className = "m-3 form-control";

let inputDate = document.createElement("input");
inputDate.placeholder = "Fecha";
inputDate.type = "date";
inputDate.className = "m-3 form-control";

let inputDescription = document.createElement("textarea")
inputDescription.placeholder = "Descripción"
inputDescription.className = "m-3 form-control"



formTask.addEventListener("submit", (e) => {
    e.preventDefault()
    data = {
        'name': inputName.value,
        'date': inputDate.value,
        'desctiption': inputDescription.value
    }
    localStorage.setItem(inputName.value ,JSON.stringify(data));

    inputName.value = "";
    inputDescription.value = "";
    inputDate.value = "";

    actualizarListaTareas();
    main.appendChild(divTareas);

    if (main.contains(formSection)) {
    main.removeChild(formSection);
}

})

function actualizarListaTareas() {
    divTareas.innerHTML = ""; // Limpiar la lista

    if (localStorage.length === 0) {
        divTareas.appendChild(msgNull);
        return;
    }

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let objectTask = JSON.parse(localStorage.getItem(key));

        let task = document.createElement("div");
        task.className = "d-flex";

        let pName = document.createElement("p");
        pName.className = "fs-3 text-white me-3";
        pName.textContent = objectTask.name;

        let pDate = document.createElement("p");
        pDate.className = "fs-3 text-white me-3";
        pDate.textContent = objectTask.date;

        let pDescription = document.createElement("p");
        pDescription.className = "fs-3 text-white me-3";
        pDescription.textContent = objectTask.desctiption;

        task.appendChild(pName);
        task.appendChild(pDate);
        task.appendChild(pDescription);

        let subDiv = document.createElement("div");
        subDiv.className = "d-flex w-100 justify-content-between";

        let iconTrash = document.createElement("i");
        iconTrash.className = "bi bi-trash fs-3 text-danger animacionDos";

        iconTrash.addEventListener("click", () => {
            localStorage.removeItem(objectTask.name);
            actualizarListaTareas(); // Vuelve a renderizar tras eliminar
        });

        subDiv.appendChild(task);
        subDiv.appendChild(iconTrash);
        divTareas.appendChild(subDiv);
    }
}


let submit = document.createElement("button");
submit.type = "submit";
submit.className = "btn btn-primary";
submit.textContent = "Añadir";
formTask.appendChild(inputName);
formTask.appendChild(inputDate);
formTask.appendChild(inputDescription)
formTask.appendChild(submit);
formSection.appendChild(formTask);


//Elementos para ver todas las tareas
let divTareas = document.createElement("div")
let msgNull = document.createElement("p")
msgNull.className = "fs-3 text-white"
msgNull.textContent = "No hay tareas pendientes"
divTareas.className = "m-auto background-transparent"
for (let i = 1; i <= localStorage.length; i++){
    let task = document.createElement("div")
    task.className = "d-flex"
    let pName = document.createElement("p")
    pName.className = "fs-3 text-white me-3"
    let pDate = document.createElement("p")
    pDate.className = "fs-3 text-white me-3"
    let pDescription = document.createElement("p")
    pDescription.className = "fs-3 text-white me-3"
    let objectTask = (JSON.parse(localStorage.getItem(localStorage.key(i-1))))
    pName.textContent = objectTask.name
    pDate.textContent = objectTask.date
    pDescription.textContent = objectTask.desctiption
    task.appendChild(pName)
    task.appendChild(pDate)
    task.appendChild(pDescription)
    let subDiv = document.createElement("div")
    subDiv.className = "d-flex w-100 justify-content-between"
    let iconTrash = document.createElement("i")
    iconTrash.className = "bi bi-trash fs-3 text-danger animacionDos"
    iconTrash.addEventListener("click", () => {
        localStorage.removeItem(objectTask.name)
        subDiv.remove()
    })
    subDiv.appendChild(task)
    subDiv.appendChild(iconTrash)
    divTareas.appendChild(subDiv)
}
