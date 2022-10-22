import React from "react";
import { Link } from "react-router-dom";
import { NavigationBar } from "../components/NavigationBar";
import { UserAuth } from "../context/AuthContext";

export default function Courses() {
  const { LogOut, user } = UserAuth();
  return (
    <div>
      <NavigationBar />
      
    </div>
  );
}
