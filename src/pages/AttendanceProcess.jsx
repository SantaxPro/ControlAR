import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useOperations } from "../context/OperationsContext";
import useSingleCourse from "../hooks/useSingleCourse";
import { useStudentsByCourse } from "../hooks/useStudents";
import { Button } from "../components/Button";
import { UserAuth } from "../context/AuthContext";

export const AttendanceProcess = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = UserAuth();
  const { course } = useSingleCourse(id);
  const { students } = useStudentsByCourse(id);

  //Viene del contexto
  const {
    createAttendanceRegistry,
    deleteAttendanceRegistry,
    isCourseAttendanceReady,
    setIsCourseAttendanceReady,
  } = useOperations();

  const [attendanceRegistryId, setAttendanceRegistryId] = React.useState(null);

  React.useEffect(() => {
    //Para no poder navegar a esta pagina si no es apretando el boton de "Tomar asistencia"
    if (!isCourseAttendanceReady) {
      navigate("/courses");
    }

    createAttendanceRegistry(id, user.displayName, new Date()).then(
      (registryId) => {
        setAttendanceRegistryId(registryId);
      }
    );
  }, []);

  const handleCancel = () => {
    navigate("/courses");
    // console.log('apretaste cancel con esta id: ' + attendanceRegistryId)
    deleteAttendanceRegistry(attendanceRegistryId);
  };

  return (
    <div className="p-6 bg-screen flex flex-col">
      <span className="text-1xl font-bold">
        {course?.name} - Asistencia {new Date().toLocaleDateString()}
      </span>
      <Button
        title="Finalizar"
        onClick={handleCancel}
        className="h-8 w-fit flex items-center my-3 bg-red-400 text-white"
      />
      <section className="flex flex-col">
        {students?.map((student) => {
          return <Student key={student.id} student={student} course={course} />;
        })}
      </section>
    </div>
  );
};

const Student = ({ student, course }) => {
  const [isDone, setIsDone] = React.useState(false);
  const { addAttendanceEntry } = useOperations();
  const handleAttendance = (state) => {
    setIsDone(!isDone);
    addAttendanceEntry({
      student: {
        id: student.id,
        name: student.name,
        lastname: student.lastname,
      },
      course: { id: course.id, name: course.name },
      date: new Date(),
      state: state,
    });
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
