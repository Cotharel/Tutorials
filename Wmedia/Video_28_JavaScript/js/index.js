const firstH = document.getElementById("h2");
const secondH = document.getElementById("h1");
const answer = document.getElementById("boton");

answer.addEventListener("click", preguntarNombre);

function preguntarNombre() {
    const answerUser = prompt("Escribe tu nombre"); 
    mostrarNombre(answerUser)
}

function mostrarNombre(nombre) { 
    firstH.textContent = "Hola!! 👋";
    secondH.textContent = nombre;
}