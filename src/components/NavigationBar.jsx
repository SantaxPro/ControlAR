import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import NavigationBarContainer from "./NavigationBarContainer";
import { NavLink } from "./NavLink";

export const NavigationBar = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const redirection = () => {
    navigate("/profile");
  };
  return (
    <NavigationBarContainer>
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
    </NavigationBarContainer>
  );
};

export const EmptyNavigationBar = ({ text }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <NavigationBarContainer>
      <AiOutlineArrowLeft className="mr-auto w-6 h-7 ml-2" onClick={goBack} />
      {text && <BarTitle text={text} />}
    </NavigationBarContainer>
  );
};

const BarTitle = ({ text }) => {
  return (
    <span className="mr-auto font-medium text-1xl flex flex-col items-center">
      {text}
    </span>
  );
};
