import React from "react";
import CompanySearch from "../components/CompanyList/CompanySearch";
import CompanyList from "../components/CompanyList/CompanyList";
import Categories from "../components/CompanyList/CategoryCard/Category";


function HomePrivate() {
  return (
    <>
    <CompanySearch />
    <div>
      <h1>Bem-vindo à Home Privada</h1>
      <p>Somente usuários autenticados podem ver isso.</p>
    </div>
            <Categories />

        <CompanyList />
    </>
  );
}

export default HomePrivate;
