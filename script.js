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

//Eventos de cada ícono
addDiv.addEventListener("click", () => {
    main.appendChild(formSection)
})

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
    localStorage.setItem(inputName.value ,JSON.stringify(data))
})

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
// let tareas = JSON.parse(localStorage.key)
let tareas = []
for (let i = 1; i <= localStorage.length; i++){
    tareas.push(JSON.parse(localStorage.getItem(localStorage.key(i-1))))
}