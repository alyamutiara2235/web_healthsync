import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Articles from "./pages/Articles";
import Calculator from "./pages/Calculator";
import Personalization from "./pages/Personalization";

function App() {
  const [user, setUser] = useState(() => {
    const isLoggedIn = localStorage.getItem("healthsync_isLoggedIn") === "true";
    const savedName = localStorage.getItem("healthsync_userName");
    return isLoggedIn && savedName ? { name: savedName } : null;
  });

  const handleLogout = () => {
    localStorage.removeItem("healthsync_isLoggedIn");
    localStorage.removeItem("healthsync_userName");
    setUser(null); 
  };

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />

      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          
          <Route
            path="/calculator"
            element={
              <ProtectedRoute>
                <Calculator />
              </ProtectedRoute>
            }
          />
          <Route
            path="/personalization"
            element={
              <ProtectedRoute>
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