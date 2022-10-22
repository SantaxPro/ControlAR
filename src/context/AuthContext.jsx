import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithRedirect,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../database/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const GoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const LogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("The user is:", currentUser);
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ GoogleSignIn, LogOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
