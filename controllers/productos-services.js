const listaProductos = () =>
    fetch("http://localhost:3000/productos")
        .then(res => res.json());

const crearProducto = (url, categoria, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/productos",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url, categoria, nombre, precio, descripcion, id: uuid.v4()})
    })
}

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`,
    {
        method: "DELETE",
    });
}

export const productoServices = {
    listaProductos,
    crearProducto,
    eliminarProducto
};