import axiosInstance from "./config/axiosConfig";

export const getTasks = async () => {
  return await axiosInstance.get(`/kanban`);
};

export const getTaskById = async (id) => {
  return await axiosInstance.get(`/kanban/${id}`);
};

export const createNewTask = async (body) => {
  return await axiosInstance.post(`/kanban`, JSON.stringify(body));
};

export const updateTask = async (id, body) => {
  return await axiosInstance.put(`/kanban/${id}`, JSON.stringify(body));
};

export const deleteTask = async (id) => {
  return await axiosInstance.delete(`/kanban/${id}`);
};
