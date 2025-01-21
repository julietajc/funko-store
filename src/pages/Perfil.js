import React, { useState } from "react";
import HistorialCompras from "../components/HistorialCompras";
import DatosUsuario from "../components/DatosUsuario";

function Perfil() {
  const [usuario, setUsuario] = useState({
    nombre: "Julieta",
    email: "julieta@ejemplo.com",
  });

  const [compras, setCompras] = useState([
    {
      id: 1,
      productos: [
        { nombre: "Funko Pop Spider-Man", precio: 15.0, cantidad: 1 },
        { nombre: "Funko Pop Harry Potter", precio: 20.0, cantidad: 2 },
      ],
    },
  ]);

  const actualizarDatos = (nuevosDatos) => {
    setUsuario(nuevosDatos);
  };

  const gestionarDevolucion = (idCompra) => {
    console.log(`Gestionar devolución para la compra ${idCompra}`);
  };

  return (
    <div>
      <DatosUsuario usuario={usuario} actualizarDatos={actualizarDatos} />
      <HistorialCompras
        compras={compras}
        gestionarDevolucion={gestionarDevolucion}
      />
    </div>
  );
}

export default Perfil;
