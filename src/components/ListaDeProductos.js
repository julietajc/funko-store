import React, { useEffect } from "react";
import TarjetaProducto from "./TarjetaProducto";
import Buscador from "./Buscador";
import "../styles/ListaDeProductos.css";
import productosData from "../assets/data/productos.json";
import useFiltrarProductos from "../hooks/useFiltrarProductos";

function ListaDeProductos() {
  const [productosFiltrados, manejarBusqueda, setProductos] =
    useFiltrarProductos([]);

  useEffect(() => {
    setProductos(productosData);
  }, [setProductos]);

  return (
    <section className="lista-productos">
      <h2 className="lista-productos__title">Todos los Productos</h2>
      <Buscador onBuscar={manejarBusqueda} />
      <div className="lista-productos__grid">
        {productosFiltrados.map((producto) => (
          <TarjetaProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
}

export default ListaDeProductos;
