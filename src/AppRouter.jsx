import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import MainPage from "./pages/_MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import LogOutPage from "./pages/logOutPage";
import NotFoundErrorPage from "./pages/NotFoundErrorPage";
import PopBrowse from "./components/popups/popBrowse";
import AddNewCardPage from "./pages/AddNewCardPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { getUserFromLocalStorage } from "./utils/localStorage";

export default function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (user) setIsAuth(true);
    setDelay(false);
  }, []);

  if(delay) return setTimeout(100);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <MainPage />
          </ProtectedRoute>
        }
      >
        <Route path="/create-card" element={<AddNewCardPage />} />
        <Route path="/card/:id" element={<PopBrowse />} />
        <Route path="/exit" element={<LogOutPage setIsAuth={setIsAuth} />} />
      </Route>
      <Route path="/register" element={<SignUpPage />} />
      <Route path="/login" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="*" element={<NotFoundErrorPage />} />
    </Routes>
  );
}
