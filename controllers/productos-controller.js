import { productoServices } from "./productos-services.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombreProducto = document.querySelector("[data-nombreproducto]").value;
    const precio = parseInt(document.querySelector("[data-precio]").value);
    const descripcion = document.querySelector("[data-descripcion]").value;

    productoServices.crearProducto(url, categoria, nombreProducto, precio, descripcion)
        .then(window.location.reload)
        .catch((er) => console.log(er));
})

productoServices.listaProductos()
    .then((res) => console.log(res));