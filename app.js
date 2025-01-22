//inicio haciendo la lista de amigos que vamos a utilizar
let listadoDeAmigos= [];

//ahora tengo que hacer la función que me va a permitir agregar nombres a la lista

function agregarAmigosLista(){
    let inputElemento = document.getElementById("amigo");
    let nombre = inputElemento.value.trim();

    //si el nombre que inbresamos está vacío tenemos quqe avisar que se ingrese un nombre
    if (nombre === ""){
        alert("Antes de hacer click en el botón, por favor ingrese un nombre!");
        return;
    }
    //agregamos el nombre a la lista
    listadoDeAmigos.push(nombre);
    //dejamos la caja vacía para poder ingresar mas nombres
    inputElemento.value = "";
    //actualizamos la lsita de amigos
    actualizarListaAmigos();
    //con esto limpiamos el resultado del sorteo si es que seguimos sorteando despues del primero
    limpiarResultado();
}
//ahora tenemos que actualizar la lista de amigos de forma visual
function actualizarListaAmigos(){
    let listaElemento = document.getElementById("listaAmigos");
    listaElemento.innerHTML= "";

    //lo hacemos con un bucle for, como fue pedidoxd
    for (let amigo of listadoDeAmigos){
        let li = document.createElement("li");
        li.textContent = amigo; 
        listaElemento.appendChild(li);
    }
}
//hacemos la función para sortear al amigo
function sortearAmigo(){
    //nuevamente avisamos que ingrese nombre antes de poder realizar la acción...
    if (listadoDeAmigos.length === ""){
        alert("Por favor ingrese amigos a la lista primero!")
        return;
    }
    //con esto realizamos el sorteo, agarrando una posición cualquiera de la lista
    let tocaTocaSuerteLoca = Math.floor(Math.random()* listadoDeAmigos.length);
    //con esto declaramos al ganador
    let amigoSorteado = listadoDeAmigos[tocaTocaSuerteLoca];

    let resultadoElemento = document.getElementById("resultado");
    if (!resultadoElemento){
        console.error("Elemento 'resultado' no encontrado en el DOM");
        return;
    }
    resultadoElemento.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;

    //dejamos vacía la lista despues de sortear al amigo para poder seguir jugando
    listadoDeAmigos= [];
    actualizarListaAmigos();
}

//tambien tenemos (por razones de buena practica) que limpiar la caja de resultado del amigo si seguimos jugando, sino queda feo
function limpiarResultado(){
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML ="";
}