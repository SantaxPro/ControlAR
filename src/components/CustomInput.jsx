import React from "react";
import { useOperations } from "../context/OperationsContext";

export const CustomInput = ({ text, courseId }) => {
  const { updateCourseName } = useOperations();
  const [inputValue, setInputValue] = React.useState(text);

  const handleClick = (e) => {
    e.target.readOnly = false;
    e.target.select();
  };

  const handleBlurInput = async (e) => {
    e.target.readOnly = true;
    e.target.blur();
    await updateCourseName(courseId, e.target.value);
  };

  const handleEnterKey = async (e) => {
    if (e.key === "Enter") {
      e.target.readOnly = true;
      e.target.blur();
      await updateCourseName(courseId, e.target.value);
    }
  };
  return (
    <input
      type="text"
      onClick={handleClick}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      readOnly
      onKeyDown={handleEnterKey}
      onBlur={handleBlurInput}
      className="h-8 p-2 disabled:opacity-75 appearance-none cursor-pointer 
      focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent 
      rounded-sm ease-in-out duration-75 font-bold text-lg mx-0 w-full hover:border-b-2 hover:border-blue-600"
    />
  );
};
