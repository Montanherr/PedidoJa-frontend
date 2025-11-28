import React, { useState } from "react";
import { getCompanies } from "../../services/companyService";
import { MapPin } from "lucide-react";
import "./CompanySearch.css";

export default function CompanySearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);

      const res = await getCompanies();

      // Filtra pelo nome (opcional)
      const filtered = res.data.filter((company) =>
        company.name.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filtered);
    } catch (err) {
      console.error("Erro ao buscar empresas:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="company-search-container">
      <h2 className="title">Encontre empresas perto de você</h2>

      <div className="search-box">
        <MapPin size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Digite o nome da empresa"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button onClick={handleSearch}>Buscar</button>
      </div>

      {loading && <p className="loading">Carregando...</p>}

      <div className="results">
        {results.map((c) => (
          <div key={c.id} className="company-card">
            <h3>{c.name}</h3>
            <p>{c.address}</p>
            <span className="category">{c.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
