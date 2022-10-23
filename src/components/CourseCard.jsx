import React from "react";
import useSingleCourse from "../hooks/useSingleCourse";
import { DetailsCourseDialog } from "./CourseDialog";

export const CourseCard = ({id}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const {course} = useSingleCourse(id);
  
  const handleCourseDetails = () => {
    setIsOpen(true)
  };

  return (
    <>
    <div key={id} className="flex flex-col justify-center items-center p-12 bg-gray-300 rounded-lg hover:bg-gray-400" onClick={handleCourseDetails}>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">{course?.name}</h1>
      </div>
    </div>
    <DetailsCourseDialog  isOpen={isOpen} onClose={()=>setIsOpen(false)} course={course} />
    </>
  );
};
