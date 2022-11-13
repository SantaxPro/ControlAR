import { motion } from "framer-motion";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsListUl } from "react-icons/bs";
import { Button, IconButton } from "./Button";

export const ActionBar = ({
  openDialog,
  name,
  isList,
  toggleView,
  student,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-row justify-between items-center p-4 px-10"
    >
      <Button
        title={`Añadir ${name}`}
        onClick={() => {
          openDialog();
        }}
        className="h-10 bg-transparent
        text-blue-500
        border-blue-500 hover:bg-blue-500 hover:text-white border-2 transition-all ease-in-out duration-200"
      />
      {!student && (
        <span>
          <IconButton
            onClick={toggleView}
            icon={<BsListUl className="h-5 w-5" />}
            className="w-10 h-10 bg-gray-300 hover:bg-gray-400 transition-color duration-150 ease-in-out rounded-lg border-1 border-gray-50 flex items-center justify-center"
          />
        </span>
      )}
    </motion.div>
  );
};

export const CourseActionBar = ({ openDialog, isList, toggleView }) => {
  return (
    <ActionBar
      openDialog={openDialog}
      name="Curso"
      isList={isList}
      toggleView={toggleView}
    />
  );
};
export const StudentActionBar = ({ openDialog }) => {
  return <ActionBar openDialog={openDialog} name="Estudiante" student />;
};
