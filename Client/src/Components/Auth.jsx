import { createContext, useContext, useState, useEffect } from "react";
const API_BASE_URL = import.meta.env.VITE_API_URL;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // ✅ add loading state

    const checkAuth = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/admin/me`, {
                method: "GET",
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
                setIsLoggedIn(true);
                setUser(data.user);
            } else {
                setIsLoggedIn(false);
                setUser(null);
            }
        } catch (error) {
            setIsLoggedIn(false);
            setUser(null);
        } finally {
            setLoading(false); // ✅ end loading regardless of result
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, setIsLoggedIn, user, setUser, loading }} // ✅ expose loading
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
