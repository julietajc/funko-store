import React, { useState } from "react";
import "../styles/DatosUsuario.css";

function DatosUsuario({ usuario, actualizarDatos }) {
  const [formData, setFormData] = useState({
    nombre: usuario.nombre,
    email: usuario.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarDatos(formData);
  };

  return (
    <div className="datos-usuario">
      <h2 className="datos-usuario__titulo">Datos Personales</h2>
      <form onSubmit={handleSubmit} className="datos-usuario__formulario">
        <label htmlFor="nombre" className="datos-usuario__etiqueta">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="datos-usuario__campo"
        />

        <label htmlFor="email" className="datos-usuario__etiqueta">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="datos-usuario__campo"
        />

        <button type="submit" className="datos-usuario__boton">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default DatosUsuario;
