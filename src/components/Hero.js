import React from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">¡Explora el universo de los Funkos!</h1>
        <Link to="/productos" className="hero__button">
          Ver Catálogo
        </Link>
      </div>
    </section>
  );
}

export default Hero;
