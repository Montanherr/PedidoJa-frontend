import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Peça dos melhores restaurantes</h1>
        <p>Entrega rápida, comida quente e muito sabor.</p>

        <div className="hero-buttons">
          <button className="btn-primary">Ver Restaurantes</button>
          <button className="btn-secondary">Criar Conta</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
