import API from "./bookingApi";

export const getAllChadhava = () =>
  API.get("/chadhava");

export const getChadhavaById = (id) =>
  API.get(`/chadhava/${id}`);

export const createChadhava = (data) =>
  API.post("/chadhava", data);

export const updateChadhava = (id, data) =>
  API.put(`/chadhava/${id}`, data);

export const deleteChadhava = (id) =>
  API.delete(`/chadhava/${id}`);