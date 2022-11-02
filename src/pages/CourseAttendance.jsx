import React from "react";
import { useParams } from "react-router-dom";
import useSingleCourse from "../hooks/useSingleCourse";
import { NavigationLayout } from "./layout/Layout";

export const CourseAttendance = () => {
  const { id } = useParams();
  const { course } = useSingleCourse(id);
  return (
    <NavigationLayout empty text={course?.name}>
      <div className="p-6 w-full h-full">
        <div className="flex flex-col gap-4">
          <span>Cantidad de alumnos: {course?.students.length}</span>
          Alumnos:
          <table className="border-2 border-gray-200">
            {course?.students.map((student) => {
              return (
                <tr className="border-b-2 border-gray-200">
                  <td className="p-2">{student.name} {student.lastname}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </NavigationLayout>
  );
};
