import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useOperations } from "../context/OperationsContext";
import useSingleCourse from "../hooks/useSingleCourse";
import { useStudentsByCourse } from "../hooks/useStudents";
import { Button } from "../components/Button";
import { UserAuth } from "../context/AuthContext";

// createAttendanceRegistry(id, user.displayName, new Date()).then(
//   (registryId) => {
//     setAttendanceRegistryId(registryId);
//   }
export const AttendanceProcess = () => {
  const navigate = useNavigate();
  const { id, registryId } = useParams();
  const { user } = UserAuth();
  const { course } = useSingleCourse(id);
  const { students } = useStudentsByCourse(id);
  const {
    createAttendanceRegistry,
    isCourseAttendanceReady,
    setIsCourseAttendanceReady,
    deleteAttendanceRegistry,
  } = useOperations();

  const [isRegistryReady, setIsRegistryReady] = React.useState(false);
  //Current empieza en 1 por que 
  const [internalCount, setInternalCount] = React.useState({current: 1, total: students.length});

  const handleCancel = () => {
    navigate("/courses");
    // console.log('apretaste cancel con esta id: ' + attendanceRegistryId)
    deleteAttendanceRegistry(registryId);
  };

  React.useEffect(() => {
    //Para no poder navegar a esta pagina si no es apretando el boton de "Tomar asistencia"
    if (!isCourseAttendanceReady) {
      navigate("/courses");
    }
    setInternalCount((prev) => ({ ...prev, total: students.length }));
    return () => {
      setIsCourseAttendanceReady(false);
    }
  }, [students]);

  const handleInternalCount = () => {
    if (internalCount.current === internalCount.total) {
      setIsRegistryReady(true);
    }
    setInternalCount((prev) => ({ ...prev, current: prev.current + 1 }));
  };

  return (
    <div className="p-6 bg-screen flex flex-col">
      <span className="text-2xl font-bold">
        {course?.name} - Asistencia {new Date().toLocaleDateString()}
      </span>
      <div className="flex flex-row gap-6">
        <Button
          title="Listo"
          onClick={() => {
            navigate("/courses");
            setIsCourseAttendanceReady(false);
          }}
          
          className={`h-8 w-fit flex items-center my-3 ${
            isRegistryReady
              ? "bg-green-400"
              : "bg-transparent border-2 border-gray-600 text-d-blue cursor-default opacity-60"
          }`}
        />
        <Button
          title="Cancelar"
          onClick={handleCancel}
          className="h-8 w-fit flex items-center my-3 bg-red-400 text-white"
        />
      </div>
      <section className="flex flex-col">
        {students?.map((student) => {
          return (
            <Student
              key={student.id}
              student={student}
              course={course}
              registryId={registryId}
              updateInternalCount={ () => {
                handleInternalCount()
              }}
            />
          );
        })}
        {isRegistryReady && (
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">¡Asistencia tomada!</span>
            <span className="text-xl font-bold">
              {internalCount.current -1} de {internalCount.total} alumnos
            </span>
          </div>
        )}
      </section>
    </div>
  );
};

const Student = ({ student, course, registryId, updateInternalCount }) => {
  const [isDone, setIsDone] = React.useState(false);
  const { addStudentAttendanceEntry } = useOperations();
  const handleAttendance = (state) => {
    setIsDone(!isDone);
    addStudentAttendanceEntry(registryId, {
      student: {
        name: student.name,
        lastname: student.lastname,
        id: student.id,
      },
      state,
    });
    updateInternalCount();
  };

  return (
    <div
      className={`flex flex-col p-5 border-2 border-gray-400 rounded-lg m-4 gap-6 ${
        isDone === true ? "hidden" : ""
      }`}
    >
      <span className="text-lg font-medium">
        {student.name} {student.lastname}
      </span>
      <div className="flex flex-col gap-4">
        <Button
          title="Presente"
          onClick={() => {
            handleAttendance("present");
          }}
          className="h-8 w-fit bg-green-400 flex items-center text-d-blue"
        />
        <Button
          title="Ausente"
          onClick={() => {
            handleAttendance("non-present");
          }}
          className="h-8 bg-red-400 w-fit flex items-center text-d-blue"
        />
        <Button
          title="Tarde"
          onClick={() => {
            handleAttendance("late");
          }}
          className="h-8 bg-yellow-300 w-fit flex items-center text-d-blue"
        />
      </div>
    </div>
  );
};
