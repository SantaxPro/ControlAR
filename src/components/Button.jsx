import React from "react";
import { motion } from "framer-motion";

export const Button = ({ title, onClick, className, blue }) => {
  const defaultBlueButtonStyles =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

  //Estilos basicos de un boton para no tener que escribirlos de nuevo al sobreescribir
  const defaultStyles = "font-bold py-2 px-4 rounded";

  if (className) {
    return (
      <motion.button
        transition={{ ease: "easeIn", duration: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className={`${
          blue == true ? defaultBlueButtonStyles : defaultStyles
        } ${className}`}
      >
        {title}
      </motion.button>
    );
  }

  return (
    <motion.button
      transition={{ ease: "easeIn", duration: 0.2 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={defaultBlueButtonStyles}
    >
      {title}
    </motion.button>
  );
};

export const IconButton = ({ onClick, className, icon }) => {
  return (
    <button onClick={onClick} className={className}>
      {icon}
    </button>
  );
};
