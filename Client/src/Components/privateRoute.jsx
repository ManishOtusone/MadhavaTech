import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const PrivateRoute = ({ children, role }) => {
    const { isLoggedIn, user, loading } = useAuth();

    if (loading) {
        return <div className="text-center mt-10">Checking authentication...</div>; // Or a spinner
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    if (role && user?.accountType !== role) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PrivateRoute;
