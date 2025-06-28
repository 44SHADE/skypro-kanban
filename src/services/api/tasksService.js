import axiosInstance from "./config/axiosConfig";

export const getTasks = async () => {
  try {
    return await axiosInstance.get(`/kanban`);
  } catch (error) {
    console.error(error);
  }
};

export const getTaskById = async (id) => {
  try {
    return await axiosInstance.get(`/kanban/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const createNewTask = async (body) => {
  try {
    return await axiosInstance.post(`/kanban`, JSON.stringify(body));
  } catch (error) {
    console.error(error);
  }
};

export const updateTask = async (id, body) => {
  try {
    return await axiosInstance.put(`/kanban/${id}`, JSON.stringify(body));
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (id) => {
  try {
    return await axiosInstance.delete(`/kanban/${id}`);
  } catch (error) {
    console.error(error);
  }
};
