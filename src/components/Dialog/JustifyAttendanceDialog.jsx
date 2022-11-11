import React from "react";
import { StudentCard } from "../Card";
import BaseDialog from "./BaseDialog";

export const JustifyAttendanceDialog = ({ open, onClose }) => {
  return (
    <BaseDialog isOpen={open} onClose={onClose}>
      <div className="bg-white rounded-lg p-4">
        <h1 className="text-lg font-medium text-d-blue">
          Justificar asistencia
        </h1>
        <div className="flex flex-col gap-4 mt-4">
          <h1>{student.name}</h1>
        </div>
      </div>
    </BaseDialog>
  );
};
