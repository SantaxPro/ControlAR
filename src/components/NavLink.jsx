import React from "react";
import { Link } from "react-router-dom";
export const NavLink = ({ to }) => {
  
  return (
    <Link to={`/${to}`} className="text-d-blue mx-4 font-medium  text-lg">
      {/*Para Capitalizar el primer caracter */}
        {to.charAt(0).toUpperCase() + to.slice(1)}
    </Link>
  );
};
