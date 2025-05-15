let main = document.querySelector("main")
let show = false

let hamburgueza = document.querySelector(".hamburgueza")
hamburgueza.addEventListener("click", () => {
    if (!show){
        main.appendChild(sectionMenu)
        show = true
    }else{
        sectionMenu.remove()
        show = false
    }
})


//elementos del menú
let sectionMenu = document.createElement("section")
sectionMenu.className = "fondo-transparente d-flex flex-column h-100"
let verTodas = document.createElement("h1")
verTodas.className = "text-white fs-3 animacion"
verTodas.textContent = "Todas tus tareas"
let buscar = document.createElement("h1")
buscar.className = "text-white fs-3 animacion"
buscar.textContent = "Buscar una tarea"
let añadir = document.createElement("h1")
añadir.className = "text-white fs-3 animacion"
añadir.textContent = "Añadir una tarea"
sectionMenu.appendChild(verTodas)
sectionMenu.appendChild(buscar)
sectionMenu.appendChild(añadir)

//elementos del formulario para añadir tareas
let formulario = document.createElement("form")
formulario.method = "post"
let nombre = document.createElement("input")
nombre.placeholder = "Nombre de la tarea"