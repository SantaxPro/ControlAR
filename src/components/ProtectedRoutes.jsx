import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
export const ProtectedRoutes = ({ children }) => {
    const {user} = UserAuth();
    if (user) {
        return children;
    }
    return <Navigate to='/login' />;
};
