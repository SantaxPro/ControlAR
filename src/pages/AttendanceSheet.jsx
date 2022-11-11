import React from "react";
import { useParams } from "react-router-dom";
import { RegistryCard } from "../components/Card";
import {
  useRegistriesByCourse,
  useSingleRegistry,
} from "../hooks/useRegistries";
import useSingleCourse from "../hooks/useSingleCourse";
import { EmptyNavigationLayout, NavigationLayout } from "./layout/Layout";

export const AttendanceSheet = () => {
  const [open, setOpen] = React.useState(false);
  const { id } = useParams(); //Obtiene el id del curso a traves de la url
  const { course } = useSingleCourse(id); //Obtengo los datos del curso usando el hook useSingleCourse al que le paso la id
  const { registries } = useRegistriesByCourse(id); //EStos son todos los registros de asistencia del curso
  return (
    <EmptyNavigationLayout>
      <div className="p-4">
        <h1 className="text-xl font-medium m-4">{course?.name} - Registros</h1>
        <div className="flex flex-col gap-4 m-4">
          {registries.map((registry) => {
            return (
              <RegistryCard key={registry.id} {...registry} id={registry.id} />
            );
          })}
          {registries.length === 0 && (
            <h1 className="text-xl font-medium m-4 text-gray-500">
              No hay registros de asistencia
            </h1>
          )}
        </div>
      </div>
    </EmptyNavigationLayout>
  );
};

// {/* <div className='flex flex-row gap-4 border-2 border-gray-300 overflow-x-scroll'>
//     {registries?.map((registry) => {
//         return <div className='p-4 border-b-2 border-gray-300'>
//             <h1>{registry.date.toDate().toLocaleDateString()}</h1>
//         </div>
//     })}
// </div> */}
