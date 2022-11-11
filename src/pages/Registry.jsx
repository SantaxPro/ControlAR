import React from "react";
import { useParams } from "react-router-dom";
import { JustifyAttendanceDialog } from "../components/Dialog/JustifyAttendanceDialog";
import { useSingleRegistry } from "../hooks/useRegistries";
import useSingleCourse from "../hooks/useSingleCourse";
import { NavigationLayout } from "./layout/Layout";

export const Registry = () => {
  const { id, registryId } = useParams();

  const { course } = useSingleCourse(id);
  const { registry } = useSingleRegistry(registryId);
  return (
    <NavigationLayout empty>
      <div className="p-4">
        <h1 className="text-xl font-bold m-4 text-d-blue">
          {course?.name} - Registro{" "}
          {registry?.date.toDate().toLocaleDateString()}
        </h1>

        <h2 className="text-xl font-medium m-4 text-d-blue">Alumnos</h2>
        <div className="flex flex-col gap-4 m-4">
          {registry?.studentEntrys.map((studentEntry) => {
            return (
              <StudentEntryCard
                key={studentEntry.student.id}
                student={studentEntry.student}
                state={studentEntry.state}
                isJustified={studentEntry.isJustified}
              />
            );
          })}
        </div>
      </div>
    </NavigationLayout>
  );
};

const StudentEntryCard = ({
  student,
  state,
  isJustified,
  openJustifyDialog,
}) => {
  const [open, setOpen] = React.useState(false);
  const stateColor =
    state === "present"
      ? "bg-green-500"
      : state === "late"
      ? "bg-yellow-500"
      : "bg-red-500";

  const handleJustify = () => {
    setOpen(true);
  };
  return (
    <div className="p-2 border-b-2 border-gray-300 flex flex-col gap-4 items-center justify-start">
      <h1 className="text-lg font-medium text-d-blue">
        {student.name} {student.lastname}
      </h1>

      <div className="flex flex-col gap-2 items-center">
        {isJustified === false ? (
          <div>
            {state === "non-present" && (
              <h1
                onClick={handleJustify}
                className="text-sm text-blue-600 font-medium hover:text-blue-800 cursor-pointer"
              >
                Justificar
              </h1>
            )}
          </div>
        ) : (
          <h1 className="text-sm text-green-500 font-medium">Justificado</h1>
        )}

        <h1 className={`p-2 rounded-md text-white ${stateColor}`}>{state}</h1>
      </div>
      <JustifyAttendanceDialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};
