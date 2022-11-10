import { Dialog } from "@headlessui/react";
import { Button, IconButton } from "../Button";
import { useNavigate } from "react-router-dom";
import { useOperations } from "../../context/OperationsContext";
import { useStudentsByCourse } from "../../hooks/useStudents.jsx";
import { IoMdRemoveCircleOutline} from "react-icons/io";
import {MdPersonAddAlt1} from "react-icons/md";
import {BsFillTrashFill} from 'react-icons/bs';
import { CustomInput } from "../CustomInput";
import BaseDialog from "./BaseDialog";
import { AddStudentToCourseDialog } from "./AddStudentToCourseDialog";
import React from "react";

export const DetailsCourseDialog = ({ isOpen, onClose, course }) => {
  const navigate = useNavigate();
  const { deleteCourse, deleteStudentFromCourse } = useOperations();
  const { students } = useStudentsByCourse(course?.id);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleAddStudentToCourse = ()=>{
    setIsDialogOpen(true);
  }

  const handleDeleteCourse = async () => {
    await deleteCourse(course.id);
    onClose();
  };
  const handleRemoveStudent = async (student) => {
    await deleteStudentFromCourse(course.id, student.id, {
      name: student.name,
      lastname: student.lastname,
      course: { id: course.id },
    });
  };
  const handleOpenSheet = ()=>{
    navigate('/courses/'+course.id+'/sheet')
  }
  return (
    <BaseDialog isOpen={isOpen} onClose={onClose}>
      <Dialog.Panel className="flex items-start flex-col sm:w-96 gap-4  p-8  rounded-xl bg-white">
        <div className="flex flex-col gap-4">
          <CustomInput text={course?.name} courseId={course?.id} />
          <div className="flex flex-row gap-6 items-center">
          <h2 className="text-lg font-bold">Estudiantes</h2>
          <IconButton icon={<MdPersonAddAlt1 color="#ffffff" className="w-6 h-6"/>} className="hover:bg-blue-600 w-10 h-10 bg-blue-500 rounded-md flex items-center justify-center" 
          onClick={handleAddStudentToCourse}
          />
          </div>
          <ul
            className="p-2 flex flex-col gap-2 
              border-2 border-gray-200 rounded-md max-h-48
              overflow-auto appearance-none"
          >
            {students?.map((student) => {
              return (
                <li
                  key={student.id}
                  className="flex flex-row gap-3 items-center w-full justify-between
                    rounded-md p-4 font-medium"
                >
                  {student.name}
                  <IoMdRemoveCircleOutline
                    className="w-6 h-6 hover:scale-110 transition-transform ease-linear duration-150 cursor-pointer"
                    color="#FF4040"
                    onClick={() => handleRemoveStudent(student)}
                  />
                </li>
              );
            })}
            {students?.length === 0 && (
              <li className="text-gray-400">No hay estudiantes</li>
            )}
          </ul>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Button
            title="Planilla"
            onClick={handleOpenSheet}
            className="h-10 flex items-center bg-transparent border-2 border-blue-400 
              hover:bg-blue-500 hover:border-blue-500 transition-all ease-out duration-150"
          />
          <Button
            title="Cerrar"
            onClick={() => onClose()}
            className="bg-gray-200 hover:bg-gray-400 text-black"
          />
          <IconButton icon={<BsFillTrashFill color="#fff" className="w-5 h-5"/>} className="bg-red-500 
          hover:bg-red-600 rounded-lg w-10 h-10 flex items-center justify-center" />
        </div>
        <AddStudentToCourseDialog open={isDialogOpen} onClose={()=>{setIsDialogOpen(false)}}/>
      </Dialog.Panel>
    </BaseDialog>
  );
};
