import React from "react";
import { Link } from "react-router-dom";
export const NavLink = ({ to }) => {
  return (
    <Link to={`/${to}`} className="text-white font-mono mx-4">
        {to}
    </Link>
  );
};
