let main = document.querySelector("main")
let show = false

let hamburgueza = document.querySelector(".hamburgueza")
hamburgueza.addEventListener("click", () => {
    if (!show){
        main.appendChild(menuSection)
        show = true
    }else{
        sectionMenu.remove()
        show = false
    }
})


//elementos del menú
let menuSection = document.createElement("section")
menuSection.className = "fondo-transparente d-flex flex-column h-100"
let showAll = document.createElement("h1")
showAll.className = "text-white fs-3 animacion"
showAll.textContent = "Todas tus tareas"
let search = document.createElement("h1")
search.className = "text-white fs-3 animacion"
search.textContent = "Buscar una tarea"
let add = document.createElement("h1")
add.className = "text-white fs-3 animacion"
add.textContent = "Añadir una tarea"
add.addEventListener("click", () => {
    main.appendChild(formSection)
})
menuSection.appendChild(showAll)
menuSection.appendChild(search)
menuSection.appendChild(add)

//elementos del formulario para añadir tareas
let formSection document.createElement("section")
let formTask = document.createElement("form")
formTask.method = "post"
let nombre = document.createElement("input")
nombre.placeholder = "Nombre de la tarea"
nombre.type = "text"
let fecha = document.createElement("input")
fecha.placeholder = "Fecha"
fecha.type = "date"
formTask.appendChild(nombre)
formTask.appendChild(fecha)
formSection.appendChild(formTask)