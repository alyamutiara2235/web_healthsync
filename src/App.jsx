import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Articles from "./pages/Articles";
import Calculator from "./pages/Calculator";
import Personalization from "./pages/Personalization";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/login" element={<Login />} />
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
