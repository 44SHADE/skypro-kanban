import requestError from "../../../utils/error";
import axiosInstance from "../config/axiosConfig";

export const register = async (body) => {
  try {
    return await axiosInstance.post("/user", JSON.stringify(body));
  } catch (error) {
    throw requestError(error);
  }
};
