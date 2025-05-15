let main = document.querySelector("main")
let show = False

let hamburgueza = document.querySelector(".hamburgueza")
hamburgueza.addEventListener("click", () => {
    if (!show){
        main.appendChild(sectionMenu)
        show = True
    }else{
        sectionMenu.remove()
    }
})

sectionMenu = document.createElement("section")
sectionMenu.className = "fondo-transparente d-flex flex-column h-100"
verTodas = document.createElement("h1")
verTodas.className = "text-white fs-3 animacion"
verTodas.textContent = "Todas tus tareas"
buscar = document.createElement("h1")
buscar.className = "text-white fs-3 animacion"
buscar.textContent = "Buscar una tarea"
añadir = document.createElement("h1")
añadir.className = "text-white fs-3 animacion"
añadir.textContent = "Añadir una tarea"
sectionMenu.appendChild(verTodas)
sectionMenu.appendChild(buscar)
sectionMenu.appendChild(añadir)




