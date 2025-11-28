import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePublic from "../pages/Home";
import HomePrivate from "../pages/HomePrivate";
import Login from "../pages/Login/Login";
import MenuPage from "../components/Menu/Menu";
import Product from "../components/Product/Product";
import { useAuth } from "../context/AuthContext";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth(); // 🔥 Agora usando o contexto

  return (
    <Routes>
      {/* Página inicial pública */}
      <Route path="/" element={<HomePublic />} />

      {/* Página de Menu */}
      <Route path="/menu/:id" element={<MenuPage />} />

<Route path="/products/menu/:id" element={<Product />} />


      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Home privada (somente logado) */}
      <Route
        path="/home"
        element={
          isAuthenticated ? <HomePrivate /> : <Navigate to="/login" replace />
        }
      />

      {/* Qualquer rota inválida → Home pública */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
