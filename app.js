// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres
const amigos = [];

// Referencias a los elementos del DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultadoLista = document.getElementById("resultado");

// Función para agregar amigos
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre) {
        amigos.push(nombre);
        mostrarListaAmigos();
        inputAmigo.value = ""; // Limpiar el campo de entrada
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Mostrar la lista de amigos en el DOM
function mostrarListaAmigos() {
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

// Función para mostrar un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Por favor, agrega al menos un nombre.");
        return;
    }

    // Elegir un amigo al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    mostrarResultado(amigoSorteado);
}

// Mostrar el resultado del sorteo
function mostrarResultado(amigo) {
    resultadoLista.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `¡El amigo sorteado es: ${amigo}!`;
    resultadoLista.appendChild(li);
}
