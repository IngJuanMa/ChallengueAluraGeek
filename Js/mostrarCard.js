
import { conexionAPI } from "./conexionAPI.js";
import borrarCard from "./eliminarCard.js";

const listaCards = document.querySelector("#productContainer");

export default function crearCard(imagen,nombre,marca,precio,id) {
    const card = document.createElement("li");
    card.className="card"
    card.innerHTML= `<img src="${imagen}" alt="Producto 1">
    <div id="card-pequeño">
        <h3>${nombre}</h3>
        <p>${marca}</p>
        <p class="precio-articulo">$${precio}</p>
         <button class="delete-cart"> <img src="./Assets/delete-2-svgrepo-com.png" alt="boton-borrar" data-id="${id}"></button>                           </button>
    </div>`

    borrarCard(card,nombre);

    return card;
}


   async function ListaProdutos(){

 const listaAPI = await conexionAPI.ListaProdutos();

 listaAPI.forEach(card =>listaCards.appendChild(crearCard(card.imagen,card.nombre,card.marca,card.precio)));
 }
ListaProdutos();

// Renderiza los productos en el DOM
// const renderProducts = async () => {
//     try {
//         const listProducts = await conexionAPI.ListaProdutos();
//         listProducts.forEach((product) => {
//             const productCard = crearCard(product);
//             listaCards.appendChild(productCard);
//         });
//     } catch (err) {
//         console.error("Error al renderizar productos:", err);
//     }
// };

// renderProducts();