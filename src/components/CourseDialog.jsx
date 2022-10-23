import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "./Button";
import { useOperations } from "../context/OperationsContext";

function CourseDialog({ isOpen, onClose }) {
  const {addCourse} = useOperations()
  const [courseName, setCourseName] = useState("");

  const handleAddCourse = () => {
    addCourse({ name: courseName });
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={() => onClose()}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
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
            <Button
              title="Añadir curso"
              onClick={handleAddCourse}
            />
            <Button
              title="Cancelar"
              onClick={() => onClose()}
              className="bg-gray-200 hover:bg-gray-400 text-black"
            />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default CourseDialog;
