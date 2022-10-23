import React from "react";

export const CourseCard = (props) => {
  const { name, id } = props;
  return (
    <div key={id} className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">{name}</h1>
      </div>
    </div>
  );
};
