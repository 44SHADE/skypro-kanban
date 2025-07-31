import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/_MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import LogOutPage from "./pages/logOutPage";
import NotFoundErrorPage from "./pages/NotFoundErrorPage";
import PopBrowse from "./components/popups/popBrowse/popBrowse";
import AddNewCardPage from "./pages/AddNewCardPage";
import ProtectedRoute from "./components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      >
        <Route path="/create-card" element={<AddNewCardPage />} />
        <Route path="/card/:id" element={<PopBrowse />} />
        <Route path="/exit" element={<LogOutPage/>} />
      </Route>
      <Route path="/register" element={<SignUpPage />} />
      <Route path="/login" element={<SignInPage />} />
      <Route path="*" element={<NotFoundErrorPage />} />
    </Routes>
  );
}
