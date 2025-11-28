import React, { useEffect, useState } from "react";
import "./PromoStores.css";
import { getCompanies } from "../../services/companyService";
import { useAuth } from "../../context/AuthContext";

const PromoStores = () => {
  const { isAuthenticated } = useAuth(); // 🔥 AGORA É GLOBAL!

  const [stores, setStores] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);

  // Mapeamento de logos individuais
  const customLogos = {
    "Bar do Zanata": "https://i.postimg.cc/rwxjQQ6x/Logo-do-Bar-do-Zanata.png",
    "Pizza Max": "https://imgur.com/xxxx.png",
    "Churrascaria Fogo Alto": "https://imgur.com/xxxx.png",
    // adicione quantas quiser
  };

  // ==== CARREGAR DA API ====
  useEffect(() => {
    const load = async () => {
      try {
        const res = await getCompanies();

        const list = Array.isArray(res.data) ? res.data : [];

        setStores(list);
        setFiltered(list);
      } catch (err) {
        console.error("Erro ao buscar empresas:", err);
      }
    };
    load();
  }, []);

  // ==== CALCULA HORÁRIO ====
  const getStatus = (opening_hours) => {
    if (!opening_hours) return { status: "unknown", text: "Sem horário" };

    const clean = opening_hours.replace(/\s+/g, "");
    const [start, end] = clean.split("-");

    const now = new Date();
    const current = now.getHours() * 60 + now.getMinutes();

    const startM =
      Number(start.split(":")[0]) * 60 + Number(start.split(":")[1]);
    const endM = Number(end.split(":")[0]) * 60 + Number(end.split(":")[1]);

    if (current >= startM && current <= endM) {
      const minutesLeft = endM - current;
      const h = Math.floor(minutesLeft / 60);
      const m = minutesLeft % 60;

      const text =
        minutesLeft < 60 ? `Fecha em ${m} min` : `Fecha em ${h}h ${m}min`;

      return { status: "open", text };
    }

    if (current < startM) {
      const minutesToOpen = startM - current;
      const h = Math.floor(minutesToOpen / 60);
      const m = minutesToOpen % 60;

      const text =
        minutesToOpen < 60 ? `Abre em ${m} min` : `Abre em ${h}h ${m}min`;

      return { status: "closed", text };
    }

    return { status: "closed", text: "Fechado" };
  };

  // ==== FILTRO ====
  const applyFilter = (type) => {
    setFilter(type);

    if (type === "all") return setFiltered(stores);
    if (type === "promo")
      return setFiltered(stores.filter((s) => s.has_promotion));
    if (type === "open")
      return setFiltered(
        stores.filter((s) => getStatus(s.opening_hours).status === "open")
      );
  };

  // ==== ABRIR LOJA ====
  const handleCheckMenu = (id) => {
    if (!isAuthenticated) {
      setShowModal(true);
      return;
    }

    window.location.href = `/menu/${id}`;
  };

  return (
    <>
      <section className="promo-section" id="promos">
        <h2 className="promo-title">🔥 Promoções do Dia</h2>

        {/* === FILTROS === */}
        <div className="promo-filters">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => applyFilter("all")}
          >
            Todas
          </button>

          <button
            className={filter === "open" ? "active" : ""}
            onClick={() => applyFilter("open")}
          >
            🟢 Abertas
          </button>

          <button
            className={filter === "promo" ? "active" : ""}
            onClick={() => applyFilter("promo")}
          >
            🔥 Promoções
          </button>
        </div>

        {/* === SLIDER === */}
        <div className="promo-slider">
          {filtered.map((store) => {
            const status = getStatus(store.opening_hours);

            return (
              <div className="promo-card" key={store.id}>
                <div className="promo-img-wrapper">
                  <img
                    src={
                      customLogos[store.name] || "/assets/pizza_do_bairro.jpg"
                    }
                    alt={store.name}
                    className="promo-img"
                  />{" "}
                  {store.has_promotion && (
                    <span className="promo-badge">Promoção</span>
                  )}
                </div>

                <div className="promo-info">
                  <h3>{store.name}</h3>

                  <p
                    className={`store-status ${
                      status.status === "open" ? "open" : "closed"
                    }`}
                  >
                    {status.text}
                  </p>

                  <button
                    className="promo-btn"
                    onClick={() => handleCheckMenu(store.id)}
                  >
                    Conferir Cardápio
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* === MODAL LOGIN === */}
      {showModal && (
        <div
          className="promo-modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div className="promo-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Acesse sua conta</h2>
            <p>Para ver o cardápio, faça login ou crie uma conta.</p>

            <div className="modal-buttons">
              <button
                className="btn-login"
                onClick={() => (window.location.href = "/login")}
              >
                Entrar
              </button>
              <button
                className="btn-create"
                onClick={() => (window.location.href = "/register")}
              >
                Criar Conta
              </button>
            </div>

            <button className="modal-close" onClick={() => setShowModal(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PromoStores;
