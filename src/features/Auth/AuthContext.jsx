import { createContext, useContext, useState, useEffect } from "react";

// Create the AuthContext
const AuthContext = createContext();

// Custom hook for accessing the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap your app
export const AuthProvider = ({ children }) => {
  // Initialize user state from local storage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Store user data in local storage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Clear user data from local storage
  };

  const isAdmin = user?.isAdmin;

  // Optional: Clear user state on page refresh (if needed)
  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
