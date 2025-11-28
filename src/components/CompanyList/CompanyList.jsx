import React, { useEffect, useState } from "react";
import { getCompanies } from "../../services/companyService";
import "./CompanyList.css";

export default function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies()
      .then(res => setCompanies(res.data))
      .catch(err => console.error(err));
  }, []);


  return (
    <div className="company-section">
      <h2 className="title">Os melhores restaurantes</h2>

      <div className="company-list">
      {companies.map((c) => (
  <div key={c.id} className="company-card">
    <img
      src={
        c.name === "Bar do Zanata"
          ? "https://i.postimg.cc/rwxjQQ6x/Logo-do-Bar-do-Zanata.png"
          : c.logo_url
      }
      alt={c.name}
      className="company-logo"
    />

    <div className="company-info">
      <h3>{c.name}</h3>
      <p>{c.description || "Categoria não informada"}</p>
    </div>
  </div>
))}
      </div>
    </div>
  );
}
