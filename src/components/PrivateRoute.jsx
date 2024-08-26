import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    const location = useLocation();

    useEffect(() => {
        if (!token) {
            // Redirect to sign-in page if no token is present
            window.location.href = "/signin";
        }
    }, [token]);

    if (!token) {
        return <Navigate to="/signin" replace />;
    }

    return <Outlet />;
};
