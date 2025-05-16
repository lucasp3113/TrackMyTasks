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

// Elementos del formulario para añadir tareas
let formSection = document.createElement("section");
formSection.className = "d-flex justify-content-center align-items-center w-100";
let formTask = document.createElement("form");
formTask.method = "post";
formTask.className = "formTask d-flex justify-content-start align-items-center flex-column mx-auto";
let nombre = document.createElement("input");
nombre.placeholder = "Nombre de la tarea";
nombre.type = "text";
nombre.className = "m-3 form-control";
let fecha = document.createElement("input");
fecha.placeholder = "Fecha";
fecha.type = "date";
fecha.className = "m-3 form-control";
let submit = document.createElement("button");
submit.type = "submit";
submit.className = "btn btn-primary";
submit.textContent = "Añadir";
formTask.appendChild(nombre);
formTask.appendChild(fecha);
formTask.appendChild(submit);
formSection.appendChild(formTask);