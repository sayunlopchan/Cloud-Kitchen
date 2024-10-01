import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
const ProtectedRoute = ({ children, redirectPath = "/login" }) => {
  const { user, isAdmin } = useAuth();

  // You can modify the logic based on what you want to protect
  if (!user || !isAdmin) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
