import AppRoutes from "./AppRouter";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
