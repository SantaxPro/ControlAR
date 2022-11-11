import React from "react";
import { useOperations } from "../../context/OperationsContext";
import { Button } from "../Button";
import { StudentCard } from "../Card";
import BaseDialog from "./BaseDialog";

export const JustifyAttendanceDialog = ({
  open,
  onClose,
  student,
  state,
  registryId,
}) => {
  const [justification, setJustification] = React.useState("");
  const { updateStudentJustification } = useOperations();

  const handleJustify = () => {
    // console.log(student);
    updateStudentJustification(registryId, student, justification);
  };

  return (
    <BaseDialog isOpen={open} onClose={onClose}>
      <div className="bg-white rounded-lg p-4">
        <h1 className="text-lg font-medium text-d-blue">
          Justificar asistencia
        </h1>
        <div className="flex flex-col gap-4 mt-4">
          <h1 className="font-medium text-lg text-d-blue">{student.name}</h1>
          <label className="text-md text-d-blue font-medium">Motivo</label>
          <textarea
            className="border-2 border-gray-400 rounded-lg p-2 resize-none"
            placeholder="Motivo"
            onChange={(e) => {
              setJustification(e.target.value);
            }}
          />
          <div className="flex flex-row gap-4">
            <Button title="Justificar" onClick={handleJustify} />
            <Button
              title="Cancelar"
              className="bg-gray-300 hover:bg-gray-400"
            />
          </div>
        </div>
      </div>
    </BaseDialog>
  );
};
