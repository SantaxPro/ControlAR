import React from "react";
import useSingleCourse from "../../hooks/useSingleCourse";
import { Button } from "../Button";
import { DetailsCourseDialog } from "../Dialog";

export const CourseCard = ({ id }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { course } = useSingleCourse(id);

  const handleCourseDetails = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div
        className="flex flex-col justify-center
        items-start p-12 bg-gray-100 rounded-lg
      hover:bg-gray-200 transition-all ease-in duration-100
      shadow-lg cursor-pointer"
        onClick={handleCourseDetails}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-1xl font-bold">{course?.name}</h1>
        </div>
        <Button title='Asistencia'/>
      </div>
      <DetailsCourseDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        course={course}
      />
    </>
  );
};
