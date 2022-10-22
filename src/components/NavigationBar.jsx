import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { NavLink } from "./NavLink";
export const NavigationBar = () => {
  const { user } = UserAuth();
  return (
    <nav className="flex rounded-b-md  container  mx-auto bg-gray-400 h-16 p-2 items-center justify-end">
      <img
        src={user?.photoURL}
        alt="profile picture"
        className="w-10 h-10 rounded-full mr-auto"
      />
        <NavLink to="courses" />
        <NavLink to="students" />
    </nav>
  );
};
