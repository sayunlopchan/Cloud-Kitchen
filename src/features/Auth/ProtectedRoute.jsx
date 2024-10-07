import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { LOGIN_PAGE } from "../../Routes/Path";



const ProtectedRoute = ({ children, redirectPath = LOGIN_PAGE }) => {
  const { user, isAdmin } = useAuth();

  // You can modify the logic based on what you want to protect
  if (!user || !isAdmin) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
