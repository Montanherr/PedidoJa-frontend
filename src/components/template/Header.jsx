import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">PedidoJá</div>

      <nav className="nav">
        <ul>
          <Link to="/" >
            Home
          </Link>{" "}
          <li>
            <a href="#restaurants">Restaurantes</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
        </ul>
      </nav>

      {/* Se NÃO estiver logado → mostra LOGIN */}
      {!isLoggedIn && (
        <Link to="/login" className="login-btn">
          Login
        </Link>
      )}

      {/* Se estiver logado → mostra LOGOUT */}
      {isLoggedIn && (
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
