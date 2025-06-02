import { useState } from "react";

export default function Main({ children }) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000);
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {loading ? <p>Данные загружаются...</p> : children}
          </div>
        </div>
      </div>
    </main>
  );
}
