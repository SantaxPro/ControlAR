import React from "react";

export const Button = ({ title, onClick, className }) => {
  
  const defaultBlueButtonStyles =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  
    //Estilos basicos de un boton para no tener que escribirlos de nuevo al sobreescribir
  const defaultStyles = "font-bold py-2 px-4 rounded";

  if (className) {
    return (
      <button onClick={onClick} className={`${defaultStyles} ${className}`}>
        {title}
      </button>
    );
  }

  return (
    <button onClick={onClick} className={defaultBlueButtonStyles}>
      {title}
    </button>
  );
};
