// Seleccionar los elementos HTML que necesitamos

var input = document.getElementById("tarea");
var boton = document.getElementById("boton");
var tareas = document.querySelector("ul");

// Cuando se haga click en el boton

boton.addEventListener("click", function(){
    // Obtener lo que hay escrito en el <input>
    var tarea = input.value;

    // Añadir como un nuevo elemnto <li>
    var li = document.createElement("li");
    li.textContent = tarea;
    tareas.appendChild(li);
})



