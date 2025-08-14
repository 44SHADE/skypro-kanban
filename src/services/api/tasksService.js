import requestError from "../../utils/error";
import axiosInstance from "./config/axiosConfig";

export const getTasks = async () => {
  try {
    return await axiosInstance.get(`/kanban`);
  } catch (error) {
    throw requestError(error);
  }
};

export const getTaskById = async (id) => {
  try {
    return await axiosInstance.get(`/kanban/${id}`);
  } catch (error) {
    throw requestError(error);
  }
};

export const createNewTask = async (body) => {
  try {
    return await axiosInstance.post(`/kanban`, JSON.stringify(body));
  } catch (error) {
    throw requestError(error);
  }
};

export const updateTask = async (id, body) => {
  try {
    return await axiosInstance.put(`/kanban/${id}`, JSON.stringify(body));
  } catch (error) {
    throw requestError(error);
  }
};

export const deleteTask = async (id) => {
  try {
    return await axiosInstance.delete(`/kanban/${id}`);
  } catch (error) {
    throw requestError(error);
  }
};
