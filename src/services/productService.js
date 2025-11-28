import api from "./api";

const productService = {
  createProduct: (data) => api.post("/products", data),
  getProducts: () => api.get("/products"),
  getProductById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data; // <--- importante!
  },
   getProductsByMenu: async (menuId) => {
    const response = await api.get(`/products/menu/${menuId}`);
    return response.data;
  },
  updateProduct: (id, data) => api.put(`/products/${id}`, data),
  deleteProduct: (id) => api.delete(`/products/${id}`),
};

export default productService;
