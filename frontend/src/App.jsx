import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Status from "./pages/Status";

export default function App() {
  const [backendStatus, setBackendStatus] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const API_BASE = getApiBase();

    // בדיקת סטטוס backend
    fetch(`${API_BASE}/health`)
      .then(res => res.json())
      .then(data => setBackendStatus(data.status))
      .catch(() => setBackendStatus("offline"));

    // בקשה לדוגמא לשליפת items מה-backend
    fetch(`${API_BASE}/items`)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(() => setItems([]));
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <Status backendStatus={backendStatus} />
      
      <div style={{ padding: "20px" }}>
        <h3>Items from Backend:</h3>
        {items.length > 0 ? (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name}: {item.value}
              </li>
            ))}
          </ul>
        ) : (
          <p>No items available</p>
        )}
      </div>
    </div>
  );
}

// 🌟 Runtime detection: בודק אם אנחנו ב-local או ב-Docker
function getApiBase() {
  if (window.location.hostname === "localhost") {
    return "http://localhost:4000/api"; // dev server local
  } else {
    return "http://backend:4000/api"; // Docker Compose / production
  }
}
