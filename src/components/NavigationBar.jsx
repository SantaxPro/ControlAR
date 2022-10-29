import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { NavLink } from "./NavLink";
import {AiOutlineArrowLeft} from "react-icons/ai";

export const NavigationBar = () => {
  const { user } = UserAuth();
  const navigate  = useNavigate();
  const redirection = () =>{
    navigate("/profile");

  };
  return (
    <nav className="flex rounded-b-md  container  mx-auto bg-gray-400 h-16 p-2 items-center justify-end">
      <span className="mr-auto w-10 h-10 bg-gray-700 rounded-full">
        <img
          onClick={redirection}
          src={user?.photoURL}
          alt="pfp"
          className="w-full h-full bg-cover rounded-full"
        />
      </span>
      <NavLink to="courses" />
      <NavLink to="students" />
    </nav>
  );
};
export const EmptyNavigationBar = () => {
  const navigate  = useNavigate();
  const goBack = () =>{
    navigate(-1);
  };
  return (
    <nav className="flex rounded-b-md  container  mx-auto bg-gray-400 h-16 p-2 items-center justify-end">
      <AiOutlineArrowLeft className="mr-auto w-8 h-8 ml-4" onClick={goBack}/>
    </nav>
  );
}
