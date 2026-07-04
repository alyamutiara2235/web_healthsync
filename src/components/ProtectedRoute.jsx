import { Navigate } from "react-router-dom";

function ProtectedRoute({ user, children }) {
  const isLoggedIn = localStorage.getItem("ruangsehat_isLoggedIn") === "true";

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
