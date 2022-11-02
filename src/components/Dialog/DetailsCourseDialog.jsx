import { Dialog } from "@headlessui/react";
import { Button } from "../Button";
import { useOperations } from "../../context/OperationsContext";
import { useStudentsByCourse } from "../../hooks/useStudents.jsx";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { CustomInput } from "../CustomInput";
import BaseDialog from "./BaseDialog";

export const DetailsCourseDialog = ({ isOpen, onClose, course }) => {
    const { deleteCourse, deleteStudentFromCourse } = useOperations();
    const { students } = useStudentsByCourse(course?.id);
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
    return (
      <BaseDialog isOpen={isOpen} onClose={onClose}>
        <Dialog.Panel className="flex items-start flex-col sm:w-96 gap-4  p-8  rounded-xl bg-white">
          <div className="flex flex-col gap-4">
            <CustomInput text={course?.name} courseId={course?.id} />
            <h2 className="text-lg font-bold">Estudiantes</h2>
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
                      className="w-6 h-6 "
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
              title="Cerrar"
              onClick={() => onClose()}
              className="bg-gray-200 hover:bg-gray-400 text-black"
            />
            <Button
              onClick={handleDeleteCourse}
              className="bg-red-500 w-10 h-10 hover:bg-red-600"
            />
          </div>
        </Dialog.Panel>
      </BaseDialog>
    );
  };