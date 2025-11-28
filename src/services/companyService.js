import api from "./api";

export const createCompany = (data) => api.post("/companys", data);
export const getCompanies = () => api.get("/companys");
export const getCompanyById = (id) => api.get(`/companys/${id}`);
export const updateCompany = (id, data) => api.put(`/companys/${id}`, data);
export const deleteCompany = (id) => api.delete(`/companys/${id}`);
