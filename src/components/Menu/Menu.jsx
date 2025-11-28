import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import menuService from "../../services/menuService";
import "./Menu.css";

export default function MenuVirtual() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [menuName, setMenuName] = useState("");
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await menuService.getMenuById(id);

        if (!res || (!res.data && !res.name)) {
          setNotFound(true);
        } else {
          const menuData = res.data || res;
          setMenuName(menuData.name);
        }
      } catch (err) {
        console.error("Erro ao carregar menu", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) return <p className="loading-text">Carregando menu...</p>;

  if (notFound)
    return (
      <div className="menu-virtual-container">
        <div className="menu-empty-card">
          <h2>Menu não encontrado</h2>
          <p>Este estabelecimento ainda não possui cardápio cadastrado.</p>
        </div>
      </div>
    );

  return (
    <div className="menu-virtual-container">
      <div
        className="menu-header-card"
        onClick={() => navigate(`/products/menu/${id}`)}
      >
        <h1 className="menu-title">{menuName}</h1>
      </div>
    </div>
  );
}
