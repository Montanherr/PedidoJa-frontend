import React from "react";
import CompanyList from "../CompanyList/CompanyList";
import "./PopularRestaurants.css";

const PopularRestaurants = () => {
  return (
    <section className="popular-restaurants">
      <h2>Restaurantes Populares</h2>
      <p>Os mais pedidos da galera</p>

      <CompanyList />
    </section>
  );
};

export default PopularRestaurants;
