let main = document.querySelector("main")

let hamburgueza = document.querySelector(".hamburgueza")
hamburgueza.addEventListener("click", () => {
    main.appendChild(sectionMenu)
})

sectionMenu = document.createElement("section")
sectionMenu.className = "fondo-transparente d-flex flex-column h-100"
verTareas = document.createElement("h1")
verTareas.className = "text-white fs-3"
verTareas = document.createElement("h1")
verTareas.className = "text-white fs-3"
verTareas = document.createElement("h1")
verTareas.className = "text-white fs-3"




