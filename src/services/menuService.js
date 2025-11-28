// src/services/menuService.js
import api from "./api";

const menuService = {
  // Criar menu
  createMenu: async (data) => {
    const response = await api.post("/menus", data);
    return response.data;
  },

  // Listar todos os menus
  getMenus: async () => {
    const response = await api.get("/menus");
    return response.data;
  },

  // Buscar menu por empresa + menu ID
  getMenuByCompany: async (companyId, menuId) => {
    const response = await api.get(`/menus/company/${companyId}/menu/${menuId}`);
    return response.data;
  },

  // Atualizar menu
  updateMenu: async (id, data) => {
    const response = await api.put(`/menus/${id}`, data);
    return response.data;
  },

  // Deletar menu
  deleteMenu: async (id) => {
    const response = await api.delete(`/menus/${id}`);
    return response.data;
  },
};

export default menuService;
