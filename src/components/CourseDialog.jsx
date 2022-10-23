import { useState } from "react";
import { Dialog } from "@headlessui/react";

function CourseDialog({ isOpen, onClose }) {
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
            className="rounded-lg bg-gray-100 p-2"
          />
          <div className="flex flex-row gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
            Añadir Curso
          </button>
          <button className="bg-gray-200 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded">
            Cancelar
          </button>
          </div>

        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default CourseDialog;
