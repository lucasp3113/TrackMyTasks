let main = document.querySelector("main")

let hamburgueza = document.querySelector(".hamburgueza")
hamburgueza.addEventListener("click", () => {
    main.appendChild(sectionMenu)
})

sectionMenu = document.createElement("section")
sectionMenu.className = "fondo-transparente d-flex flex-column h-100"
verTodas = document.createElement("h1")
verTodas.className = "text-white fs-3"
verTodas.textContent = "Ver todas tus tareas"
buscar = document.createElement("h1")
buscar.className = "text-white fs-3"
buscar.textContent = "Buscar una tarea"
añadir = document.createElement("h1")
añadir.className = "text-white fs-3"
añadir.textContent = "Añadir una tarea"
sectionMenu.appendChild(verTodas)
sectionMenu.appendChild(buscar)
sectionMenu.appendChild(añadir)




