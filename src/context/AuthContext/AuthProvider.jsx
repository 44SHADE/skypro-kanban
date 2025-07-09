import { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  addUserToLocalStorage,
  deleteUserFromLocalStorage,
  getUserFromLocalStorage,
} from "../../utils/localStorage";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(getUserFromLocalStorage());

  const loginState = (userData) => {
    setUser(userData);
    addUserToLocalStorage(userData);
  };

  const logout = () => {
    setUser(null);
    deleteUserFromLocalStorage();
  };

  return <AuthContext.Provider value={{user, loginState, logout}}>{children}</AuthContext.Provider>;
}
