import React, { useState, useEffect } from "react";
import "../styles/CuponesDescuento.css";
import descuentos from "../assets/data/descuentos.json";

const CuponesDescuento = () => {
  const cupones = descuentos

  const [indiceActual, setIndiceActual] = useState(0);

  // Función para pasar al siguiente cupón
  const siguiente = () => {
    setIndiceActual((prev) => (prev + 1) % cupones.length);
  };

  // Función para pasar al cupón anterior
  const anterior = () => {
    setIndiceActual((prev) => (prev - 1 + cupones.length) % cupones.length);
  };

  // Configurar el giro automático
  useEffect(() => {
    const intervalo = setInterval(() => {
      siguiente(); // Llama a la función para avanzar al siguiente cupón
    }, 3000); // Cambia cada 3 segundos

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar

  return (
    <section className="cupones-descuento">
      <h2 className="cupones-descuento__title">¡Aprovecha nuestras ofertas!</h2>
      <div className="cupones-descuento__carousel">
        <button className="cupones-descuento__btn" onClick={anterior}>
          ◀
        </button>
        <div className="cupones-descuento__item">
          <h3>{cupones[indiceActual].titulo}</h3>
          <p>Código: {cupones[indiceActual].codigo}</p>
          <p>Válido hasta: {cupones[indiceActual].expiracion}</p>
        </div>
        <button className="cupones-descuento__btn" onClick={siguiente}>
          ▶
        </button>
      </div>
    </section>
  );
};

export default CuponesDescuento;
