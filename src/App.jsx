import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Calculator from "./pages/Calculator";
import Personalization from "./pages/Personalization";

function App() {
  const [user, setUser] = useState(() => {
    const isLoggedIn = localStorage.getItem("ruangsehat_isLoggedIn") === "true";
    const savedName = localStorage.getItem("ruangsehat_userName");
    return isLoggedIn && savedName ? { name: savedName } : null;
  });

  const handleLogout = () => {
    localStorage.removeItem("ruangsehat_isLoggedIn");
    localStorage.removeItem("ruangsehat_userName");
    localStorage.removeItem("ruangsehat_namaLengkap");
    setUser(null); 
  };

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />

      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          
          <Route
            path="/calculator"
            element={
              <ProtectedRoute user={user}>
                <Calculator />
              </ProtectedRoute>
            }
          />
          <Route
            path="/personalization"
            element={
              <ProtectedRoute user={user}>
                <Personalization />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;