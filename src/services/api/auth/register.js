import axiosInstance from "../config/axiosConfig";

export const register = async (body) => {
  try {
    return await axiosInstance.post("/user", JSON.stringify(body));
  } catch (error) {
    console.error(error);
  }
};
