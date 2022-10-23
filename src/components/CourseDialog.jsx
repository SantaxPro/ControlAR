import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "./Button";
import { useOperations } from "../context/OperationsContext";

const BaseDialog = ({ isOpen, onClose, children }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
      <div className="fixed inset-0 flex items-center justify-center">
        {children}
      </div>
    </Dialog>
  );
};

export function AddCourseDialog({ isOpen, onClose }) {
  const { addCourse } = useOperations();
  const [courseName, setCourseName] = useState("");

  const handleAddCourse = () => {
    addCourse({ name: courseName });
    onClose();
  };

  return (
    <BaseDialog isOpen={isOpen} onClose={onClose}>
      <Dialog.Panel className="flex items-start flex-col gap-4 mx-auto max-w-sm p-8 rounded bg-white">
        <Dialog.Title className="text-lg font-bold">
          Añadir un curso
        </Dialog.Title>
        <input
          type="text"
          placeholder="Nombre del curso"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="rounded-lg bg-gray-100 p-2"
        />
        <div className="flex flex-row gap-4">
          <Button title="Añadir curso" onClick={handleAddCourse} />
          <Button
            title="Cancelar"
            onClick={() => onClose()}
            className="bg-gray-200 hover:bg-gray-400 text-black"
          />
        </div>
      </Dialog.Panel>
    </BaseDialog>
  );
}

export const DetailsCourseDialog = ({ isOpen, onClose, course }) => {
  return (
    <BaseDialog isOpen={isOpen} onClose={onClose}>
      <Dialog.Panel className="flex items-start flex-col sm:w-96 gap-4  p-8  rounded-xl bg-white">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{course?.name}</h1>
          <h2 className="text-lg font-bold">Estudiantes</h2>
          <ul className="p-4 flex flex-col gap-2 border-2 border-gray-200 rounded-md">
            {course?.students?.map((student) => (
              <li className='p-2 m-2' key={student.id}>{student.name}</li>
            ))}
            {course?.students?.length === 0 && (
              <li className="text-gray-400">No hay estudiantes</li>
            )}
          </ul>
        </div>
        <div className="flex flex-row gap-4">
          <Button
            title="Cerrar"
            onClick={() => onClose()}
            className="bg-gray-200 hover:bg-gray-400 text-black"
          />
        </div>
      </Dialog.Panel>
    </BaseDialog>
  );
};

