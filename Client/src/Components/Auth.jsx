import { createContext, useContext, useState, useEffect } from "react";
const API_BASE_URL = import.meta.env.VITE_API_URL;


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkAuth = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/admin/queries`, {
                method: "GET",
                credentials: "include",
            });
            setIsLoggedIn(res.ok);
        } catch {
            setIsLoggedIn(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
