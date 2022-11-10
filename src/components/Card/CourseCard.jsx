import React from "react";
import useSingleCourse from "../../hooks/useSingleCourse";
import { Button } from "../Button";
import { DetailsCourseDialog } from "../Dialog";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export const CourseCard = ({ id }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { course } = useSingleCourse(id);
  const navigate = useNavigate();
  const handleCourseDetails = (e) => {
    //stop propagation
    e.stopPropagation();
    e.preventDefault();
    setIsOpen(true);
  };
  const handleAttendanceClick = (e) => {
    //STop propagation
    navigate("/courses/" + id + "/attendance");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col justify-around 
        items-start p-4 px-8 h-40 bg-screen rounded-lg
      hover:bg-gray-200 shadow-lg cursor-pointer"
        onClick={handleCourseDetails}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-1xl font-bold">{course?.name}</h1>
        </div>
        <Button title="Asistencia" onClick={handleAttendanceClick} />
      </motion.div>
      <DetailsCourseDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        course={course}
      />
    </>
  );
};
