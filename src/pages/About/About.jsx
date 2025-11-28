import React from "react";
import "./About.css";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <h2 className="about-title">Sobre o PedidoJá Social</h2>

        <p className="about-text">
          O <strong>PedidoJá Social</strong> é uma rede social criada para conectar 
          pessoas apaixonadas por comida aos melhores restaurantes da cidade.
          Aqui, você pode descobrir novos sabores, ver recomendações reais da 
          comunidade, compartilhar suas experiências e acompanhar restaurantes 
          que você gosta.
        </p>

        <p className="about-text">
          Nosso objetivo é tornar sua jornada gastronômica mais divertida,
          social e confiável. Seja para encontrar um novo lugar para jantar,
          descobrir promos ou ver o que seus amigos estão pedindo — estamos aqui
          para deixar tudo mais fácil.
        </p>

        <div className="about-highlights">

          <div className="about-card">
            <h3>🍔 Feed de Comida</h3>
            <p>Veja posts, fotos, avaliações e recomendações de outros usuários.</p>
          </div>

          <div className="about-card">
            <h3>🏆 Restaurantes em Destaque</h3>
            <p>Explore lugares populares, rankings e pratos que estão bombando.</p>
          </div>

          <div className="about-card">
            <h3>🤝 Comunidade Real</h3>
            <p>Siga amigos, descubra criadores e participe de uma comunidade apaixonada por comida.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
