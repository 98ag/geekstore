import { productoServices } from "./productos-services.js";

const crearProducto = (url, nombre, precio, id) => {
    const producto = document.createElement("div");
    producto.classList.add("productos__item");
    const contenido = 
    `<div class="container">
        <img src="${url}" alt="Item" class="grid__imagen">
        <div class="container-botones">
            <a 
                href="./editarproducto.html?id=${id}"
                class="item-boton-editar">
                <i class="fa-solid fa-pencil"></i>
            </a>
            <button 
                class="item-boton-borrar" 
                type="button"
                id="${id}">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    </div>
    <h2 class="grid__texto grid__nombre">${nombre}</h2>
    <p class="grid__texto grid__precio">$${precio}</p>`
    producto.innerHTML = contenido;

    const boton = producto.querySelector("button");
    boton.addEventListener("click", () => {
        const id = boton.id;
        productoServices.eliminarProducto(id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    })
    return producto;
}

const productos = document.querySelector("[data-productos]");

productoServices.listaProductos()
    .then((res) => {
        res.forEach(({url, nombre, precio, id}) => {
            const nuevoProducto = crearProducto(url, nombre, precio, id);
            productos.appendChild(nuevoProducto);
        });
    })
    .catch((err) => console.log("Error: " + err));