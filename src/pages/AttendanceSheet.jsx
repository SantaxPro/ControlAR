import React from 'react'
import { useParams } from 'react-router-dom'
import useSingleCourse from '../hooks/useSingleCourse';
import { useSingleRegistry, useRegistriesByCourse } from '../hooks/useRegistries';
import { NavigationLayout, EmptyNavigationLayout } from './layout/Layout';

export const AttendanceSheet = () => {
    const {id} = useParams(); //Obtiene el id del curso a traves de la url
    const {course} = useSingleCourse(id) //Obtengo los datos del curso usando el hook useSingleCourse al que le paso la id
    const {registries} = useRegistriesByCourse(id) //EStos son todos los registros de asistencia del curso
    console.log(registries)
    return (
    <EmptyNavigationLayout>
        <div className='p-4'>
            <h1 className='text-xl font-medium'>{course?.name} - Planilla</h1>
            {/*Aca deberia ir la planilla que muestra los registros de asistencia de este curso */}
            {/*Y tambien los datos de ese registro como la fecha y el preceptor que tomo esa asistencia*/}
            {/*En el campo studentEntrys del registro hay un array con los alumnos de ese curso y su estado*/}
            {/*Ese array se puede recorrer y mostrar los datos de cada alumno*/}
        </div>
    </EmptyNavigationLayout>
  )
}

