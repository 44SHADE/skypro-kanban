import AppRoutes from "./AppRouter";
import AuthProvider from "./context/AuthContext/AuthProvider";

function App() {
  return (
    <AuthProvider>
        <AppRoutes />
    </AuthProvider>
  );
}

export default App;
