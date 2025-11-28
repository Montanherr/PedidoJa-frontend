import React, { useState } from "react";
import { login as loginRequest } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();  // <<=== AQUI! pega o login do context

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginRequest(email, password);

      // Supondo que sua API retorna { token, user }
      login(res.token, res.user); // <<=== SALVA NO CONTEXTO!

      navigate("/home");
    } catch (err) {
      setError("Credenciais inválidas.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Entrar</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
