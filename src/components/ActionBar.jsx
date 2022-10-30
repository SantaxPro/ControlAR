import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const ActionBar = ({ openDialog, name }) => {
  return (
    <div className="flex flex-row justify-between items-center p-4 px-10">
      <p className="flex flex-row items-center gap-2">
        <span>
          <AiOutlineSearch className="w-6 h-6" />
        </span>
        Buscar
      </p>
      <div>
        <button
          onClick={() => {
            openDialog();
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
        >
          Añadir {name}
        </button>
      </div>
    </div>
  );
};

export const CourseActionBar = ({ openDialog }) => {
  return <ActionBar openDialog={openDialog} name="Curso" />;
};
export const StudentActionBar = ({ openDialog }) => {
  return <ActionBar openDialog={openDialog} name="Estudiante" />;
};
