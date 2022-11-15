import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Button } from "../components/Button"; 
import imagen from "./Logo.png";


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
      <div className="flex flex-col items-center justify-center w-screen h-screen mt-auto p-24 gap-16">
          <img className="scale-150" src={imagen} alt="logo" /> 
          <Button className="text-white bg-blue-500 hover:bg-blue-600"  title="Iniciar Sesión Con Google" onClick={LoginWithGoogle}/>
      </div>
    );
  };