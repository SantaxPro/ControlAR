import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function Login() {
  const { GoogleSignIn, LogOut, user } = UserAuth();
  const navigate = useNavigate();

  const LoginWithGoogle = async () => {
    try {
      await GoogleSignIn()
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user) {
      navigate('/courses')
    }
  }, [user])

  return (
      <div>
        Login
        
        {user?.displayName ? <button onClick={LogOut}>logout</button> : <button onClick={LoginWithGoogle}>Login</button>} 
      </div>
    );
  };

