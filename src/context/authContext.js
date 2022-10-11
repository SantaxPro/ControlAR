import { createContext, useState, useContext } from "react";

export const authContext = createContext();

export const useAuth = () => {
    return useContext(authContext);
}

export const AuthProvider = ({children})=> {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const value = {setIsLoggedIn, isLoggedIn, user, setUser};

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )
}