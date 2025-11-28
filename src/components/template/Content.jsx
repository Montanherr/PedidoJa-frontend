import React from "react";
import "./Content.css";

const Content = ({ page }) => {
  return (
    <main className="content">
      {page === "home" && <h1>Bem-vindo ao PedidoJá!</h1>}
      {page === "restaurants" && <h1>Lista de Restaurantes</h1>}
      {page === "about" && <h1>Sobre Nós</h1>}
    </main>
  );
};

export default Content;
