// src/components/Product/ProductList.jsx

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productService from "../../services/productService";
import "./Product.css";

export default function ProductList() {
  const { id } = useParams(); // menu_id
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddToCart = (product) => {
    console.log("Adicionado ao carrinho:", product);
    // Aqui futuramente você conecta com contexto do carrinho
  };

  useEffect(() => {
    const load = async () => {
      try {
        const data = await productService.getProductsByMenu(id);
        setProducts(data);
      } catch (err) {
        console.error("Erro ao carregar produtos", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) return <p className="loading-text">Carregando produtos...</p>;

  if (products.length === 0)
    return (
      <div className="empty-container">
        <button className="btn-back" onClick={() => navigate(-1)}>
          ← Voltar
        </button>
        <p>Nenhum produto encontrado para este menu.</p>
      </div>
    );

  return (
    <div className="product-list-container">
      <button className="btn-back" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <h1 className="product-title">Produtos</h1>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">

            <div
              className="product-img-wrapper"
              onClick={() => navigate(`/product/${p.id}`)}
            >
              <img
                src={p.image_url || "/assets/default_food.jpg"}
                alt={p.name}
                className="product-img"
              />
            </div>

            <div className="product-info">
              <h3>{p.name}</h3>
              <p>{p.description}</p>

              <div className="product-bottom">
                <span className="price">R$ {p.price.toFixed(2)}</span>

                <button
                  className="btn-add"
                  onClick={() => handleAddToCart(p)}
                >
                  + Carrinho
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
