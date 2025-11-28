import api from "./api";

// Login
export const login = async (email, password) => {
  const res = await api.post("/users/login", { email, password });

  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }

  return res.data;
};

// Registro
export const register = async (userData) => {
  const res = await api.post("/users/register", userData);
  return res.data;
};

// Dados do usuário logado
export const getMe = async () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const res = await api.get("/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

// Logout
export const logout = () => {
  localStorage.removeItem("token");
};
