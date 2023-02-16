import { productoServices } from "./productos-services.js";

const form = document.querySelector("[data-form]");

const titulo = document.querySelector("[data-titulo]");
const url = document.querySelector("[data-url]");
const categoria = document.querySelector("[data-categoria]");
const nombreProducto = document.querySelector("[data-nombreproducto]");
const precio = document.querySelector("[data-precio]");
const descripcion = document.querySelector("[data-descripcion]");

const id = new URL(window.location).searchParams.get("id");

const getInformacion = async () => {
    try{
        const datos = await productoServices.fetchProducto(id);

        titulo.innerHTML = titulo.innerHTML + datos.nombre;

        url.value = datos.url;
        categoria.value = datos.categoria;
        nombreProducto.value = datos.nombre;
        precio.value = datos.precio;
        descripcion.value = datos.descripcion;
    }
    catch{
        throw new Error();
    }
}

getInformacion();

form.addEventListener("submit", (e) => {
    e.preventDefault();

    productoServices.actualizarProducto(
        url.value, 
        categoria.value, 
        nombreProducto.value,
        precio.value, 
        descripcion.value,
        id)
        .then(window.location.href = "../screens/productos.html")
        .catch((er) => console.log(er));
})
