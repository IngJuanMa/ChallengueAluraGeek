import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarCard.js";

async function filtrarProducto(evento){

    evento.preventDefault();

    const DatoBusqueda = document.querySelector("#searchInput").value;
    const busqueda = await conexionAPI.buscarProducto(DatoBusqueda);

    const listaProducto = document.querySelector("#productContainer");

    while(listaProducto.firstChild){
        listaProducto.removeChild(listaProducto.firstChild);
    }

    busqueda.forEach(card =>listaProducto.appendChild(crearCard(card.imagen,card.nombre,card.marca,card.precio)));

    if(busqueda.length == 0){
        listaProducto.innerHTML=`<h2 class=".titulo-no-contenido"> No se encontró a ${DatoBusqueda} en los productos </h2>`
    }
}

const botonBuscar = document.querySelector("#searchButton");
botonBuscar.addEventListener("click",evento=>filtrarProducto(evento));