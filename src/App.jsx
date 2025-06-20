import { useState } from "react";
import AppRoutes from "./AppRouter";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return <AppRoutes user={isAuth} authHandle={setIsAuth}/>;
}

export default App;
