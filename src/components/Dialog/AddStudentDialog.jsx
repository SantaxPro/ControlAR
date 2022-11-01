import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "../Button";
import { useOperations } from "../../context/OperationsContext";
import useCourses from "../../hooks/useCourses";
import BaseDialog from "./BaseDialog";
export const AddStudentDialog = ({ isOpen, onClose }) => {
    const { addStudent } = useOperations();
    const { courses } = useCourses();
    const [studentName, setStudentName] = useState("");
    const [studentLastName, setStudentLastName] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");
    const handleAddStudent = () => {
      if (!selectedCourse || !studentName || !studentLastName) {
        alert("Por favor llene todos los campos");
        return;
      }
      addStudent({
        name: studentName,
        lastname: studentLastName,
        course: { id: selectedCourse },
      });
      clearFields();
      onClose();
    };
    const clearFields = () => {
      setStudentName("");
      setStudentLastName("");
      setSelectedCourse("");
    };
    const handleSelectCourse = (e) => {
      setSelectedCourse(e.target.value);
    };
  
    return (
      <BaseDialog isOpen={isOpen} onClose={onClose}>
        <Dialog.Panel className="flex items-start flex-col gap-4 mx-auto max-w-sm p-8 rounded bg-white">
          <Dialog.Title className="text-lg font-bold">
            Añadir un estudiante
          </Dialog.Title>
          <input
            type="text"
            placeholder="Nombre"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="rounded-lg bg-gray-100 p-2"
          />
          <input
            type="text"
            placeholder="Apellido"
            value={studentLastName}
            onChange={(e) => setStudentLastName(e.target.value)}
            className="rounded-lg bg-gray-100 p-2"
          />
          <select
            onChange={handleSelectCourse}
            className="rounded-lg bg-gray-100 p-2"
            defaultValue={"DEFAULT"}
            title="Curso"
          >
            {courses.length === 0 ? (
              <option value={"DEFAULT"} disabled>
                No hay cursos
              </option>
            ) : (
              <option value="DEFAULT" disabled>
                Seleccione un curso
              </option>
            )}
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
          <div className="flex flex-row gap-4">
            <Button title="Añadir estudiante" onClick={handleAddStudent} />
            <Button
              title="Cancelar"
              onClick={() => onClose()}
              className="bg-gray-200 hover:bg-gray-400 text-black"
            />
          </div>
        </Dialog.Panel>
      </BaseDialog>
    );
  };
  