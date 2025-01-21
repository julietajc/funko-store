import React from "react";
import Hero from "../components/Hero";
import CuponesDescuento from "../components/CuponesDescuento";
import ProductosDestacados from "../components/ProductosDestacados";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <main>
      <Hero />
      <CuponesDescuento />
      <ProductosDestacados />
      <div className="home__ver-mas">
        <Link to="/productos" className="home__ver-mas-btn">
          Ver más productos
        </Link>
      </div>
    </main>
  );
}

export default Home;
