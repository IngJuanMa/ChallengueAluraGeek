import { conexionAPI } from "./conexionAPI.js";


export default function borrarCard(card, id) {

  const deleteButton = card.querySelector(".delete-cart");
  deleteButton.addEventListener("click", async () => {
      try {
          await conexionAPI.borrarProducto(id);
          card.remove();
          console.log(`Producto llamado ${id} eliminado`);
      } catch (error) {
          console.error(`Error al eliminar el producto llamado ${id}:`, error);
      }
  });
}

