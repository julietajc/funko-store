import { useState, useEffect } from "react";

function useFiltrarProductos(productosIniciales) {
  const [productos, setProductos] = useState(productosIniciales);
  const [productosFiltrados, setProductosFiltrados] =
    useState(productosIniciales);

  useEffect(() => {
    setProductosFiltrados(productos);
  }, [productos]);

  const manejarBusqueda = (busqueda) => {
    const filtro = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setProductosFiltrados(filtro);
  };

  return [productosFiltrados, manejarBusqueda, setProductos];
}

export default useFiltrarProductos;
