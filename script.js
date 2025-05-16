let main = document.querySelector("main")
let menuSection = document.querySelector(".menuSection")
let show = false

let desplegar = document.querySelector(".desplegar")
desplegar.addEventListener("click", () => {
    if (!show){
        showDiv.appendChild(showAll)
        searchDiv.appendChild(search)
        addDiv.appendChild(add)
        show = true
        desplegar.innerHTML = "<i class='bi bi-arrow-bar-left text-white fs-3 ms-5'></i>"
    }else{
        showAll.remove()
        search.remove()
        add.remove()
        desplegar.innerHTML = "<i class='bi bi-arrow-bar-right text-white fs-3 desplegar'></i>"
        show = false
    }
})


//elementos del menú
let showDiv = menuSection.querySelector(".show")
let searchDiv = menuSection.querySelector(".search")
let addDiv = menuSection.querySelector(".add")
let showAll = document.createElement("h1")
showAll.className = "text-white fs-5 animacion m-0"
showAll.textContent = "Todas tus tareas"
let search = document.createElement("h1")
search.className = "text-white fs-5 animacion m-0"
search.textContent = "Buscar una tarea"
let add = document.createElement("h1")
add.className = "text-white fs-5 animacion m-0"
add.textContent = "Añadir una tarea"
// add.addEventListener("click", () => {
//     main.appendChild(formSection)
// })


//elementos del formulario para añadir tareas
let formSection = document.createElement("section")
formSection.className = "d-flex justify-content-center align-items-center w-100"
let formTask = document.createElement("form")
formTask.method = "post"
formTask.className = "formTask d-flex justify-content-start align-items-center flex-column mx-auto"
let nombre = document.createElement("input")
nombre.placeholder = "Nombre de la tarea"
nombre.type = "text"
nombre.className = "m-3 form-control"
let fecha = document.createElement("input")
fecha.placeholder = "Fecha"
fecha.type = "date"
fecha.className = "m-3 form-control"
let submit = document.createElement("button")
submit.type = "submit"
submit.className = "btn btn-primary "
submit.textContent = "Añadir"
formTask.appendChild(nombre)
formTask.appendChild(fecha)
formTask.appendChild(submit)
formSection.appendChild(formTask)


// is-valid y is-invalid boostrap para input