import { conexionAPI } from "./conexionAPI.js";

const Botonagregar = document.querySelector("#boton-Agregar")


async function agregarProducto(evento) {

    evento.preventDefault();

    const imagen = document.querySelector("#productImagen").value;
    const nombre = document.querySelector("#productNombre").value;
    const precio = document.querySelector("#productPrecio").value;
    const marca = document.querySelector("#productMarca").value;

    try{
        await conexionAPI.enviarProducto(imagen,nombre,precio,marca);
        alert("El producto ha sido añadido con éxito");
    }catch{
        alert("Hubo un problema al enviar el producto");
   }

}

Botonagregar.addEventListener("click",evento => agregarProducto(evento));


