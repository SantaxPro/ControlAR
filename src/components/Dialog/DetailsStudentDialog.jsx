import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "../Button";
import BaseDialog from "./BaseDialog";
import { useOperations } from "../../context/OperationsContext";
import useCourses from "../../hooks/useCourses";
import useSingleCourse from "../../hooks/useSingleCourse";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { StudentCustomInput, CustomInput } from "../CustomInput";

export const DetailsStudentDialog = ({
    isOpen,
    onClose,
    studentId,
    student,
  }) => {
    const [selectedCourseId, setSelectedCourseId] = useState("");
    const { deleteStudent, deleteStudentFromCourse, addStudentToCourse } =
      useOperations();
    const { course } = useSingleCourse(student?.course?.id);
    const { courses } = useCourses();
    const handleDeleteStudent = () => {
      alert(
        "Desea eliminar al estudiante " +
          student.name +
          " " +
          student.lastname +
          "?"
      );
      deleteStudent(studentId, student);
    };
    const handleRemoveStudentFromCourse = () => {
      alert("Estas seguro de eliminar al estudiante del curso?");
      deleteStudentFromCourse(course.id, studentId, student);
      setSelectedCourseId("");
    };
    const handleCourseChange = (e) => {
      setSelectedCourseId(e.target.value);
    };
    const handleCourseChangeConfirm = () => {
      if (selectedCourseId) {
        console.log(student);
        addStudentToCourse(selectedCourseId, studentId, student);
      } else {
        alert("Seleccione un curso");
      }
    };
  
    return (
      <BaseDialog isOpen={isOpen} onClose={onClose}>
        <Dialog.Panel className="flex items-start flex-col gap-4 mx-auto max-w-sm p-8 rounded bg-white">
          <Dialog.Title className="text-lg font-bold">
            Detalles del estudiante
          </Dialog.Title>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center font-medium gap-3">
              Nombre:{" "}
              <StudentCustomInput
                text={student.name}
                studentId={studentId}
                target="name"
              />
            </div>
            <div className="flex flex-row items-center font-medium gap-3">
              Apellido:{" "}
              <StudentCustomInput
                text={student.lastname}
                studentId={studentId}
                target="lastname"
              />
            </div>
            <div className="flex flex-row items-center font-medium gap-3">
              <span>Curso: </span>
              {student.course.id ? (
                <>
                  {course?.name}
                  <IoMdRemoveCircleOutline
                    className="w-6 h-6 hover:scale-105 cursor-pointer"
                    color="#FD1619"
                    onClick={handleRemoveStudentFromCourse}
                  />
                </>
              ) : (
                <div className="flex flex-row items-center gap-5">
                  <select
                    className="bg-gray-100 rounded-lg p-2"
                    value={selectedCourseId}
                    onChange={handleCourseChange}
                  >
                    <option value="" disabled defaultChecked>
                      Seleccionar curso
                    </option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                  <AiOutlineCheckCircle
                    className="w-7 h-7 hover:scale-105 transition-all ease-in"
                    color="#070A47"
                    onClick={handleCourseChangeConfirm}
                  />
                </div>
              )}
            </div>
          </div>
          <Button
            title="Eliminar estudiante"
            onClick={handleDeleteStudent}
            className={"bg-red-500 text-white"}
          />
        </Dialog.Panel>
      </BaseDialog>
    );
  };

