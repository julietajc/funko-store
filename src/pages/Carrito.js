import React, { useState } from "react";
import ListaCarrito from "../components/ListaCarrito";
import ResumenCompra from "../components/ResumenCompra";

function Carrito() {
  const [productosCarrito, setProductosCarrito] = useState([
    {
      id: 1,
      nombre: "Funko Pop Spider-Man",
      imagen: "https://via.placeholder.com/150",
      precio: 15.0,
      cantidad: 1,
    },
    {
      id: 2,
      nombre: "Funko Pop Harry Potter",
      imagen: "https://via.placeholder.com/150",
      precio: 20.0,
      cantidad: 1,
    },
  ]);

  const eliminarProducto = (id) => {
    setProductosCarrito(
      productosCarrito.filter((producto) => producto.id !== id)
    );
  };

  const modificarCantidad = (id, cantidad) => {
    setProductosCarrito(
      productosCarrito.map((producto) =>
        producto.id === id
          ? { ...producto, cantidad: Number(cantidad) }
          : producto
      )
    );
  };

  return (
    <main>
      <ListaCarrito
        productos={productosCarrito}
        eliminarProducto={eliminarProducto}
        modificarCantidad={modificarCantidad}
      />
      <ResumenCompra productos={productosCarrito} />
    </main>
  );
}

export default Carrito;
