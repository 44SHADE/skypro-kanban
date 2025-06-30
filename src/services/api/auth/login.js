import requestError from "../../../utils/error";
import axiosInstance from "../config/axiosConfig";

export const login = async (body) => {
  try {
    return await axiosInstance.post("/user/login", JSON.stringify(body));
  } catch (error) {
    throw requestError(error);
  }
};
