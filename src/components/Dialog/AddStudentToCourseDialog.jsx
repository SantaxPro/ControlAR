import React,{useState} from 'react'
import BaseDialog from './BaseDialog'
import { Dialog } from '@headlessui/react'
import {Button} from "../Button";
import { useOperations } from '../../context/OperationsContext';

export const AddStudentToCourseDialog = ({courseId, open, onClose}) => {
    const [studentName, setStudentName] = useState("");
    const [studentLastName, setStudentLastName] = useState("");
    const {StudentToCourse}=useOperations();
const HandleAddStudentToCourse = async () => {
    await StudentToCourse(courseId, {name:studentName, lastname:studentLastName} );
    onClose();
    setStudentName("");
    setStudentLastName("");
}

  return (
    <BaseDialog isOpen={open} onClose={onClose}>
     <Dialog.Panel className="w-fit h-fit p-8 bg-white rounded-lg flex-col flex items-center justify-center gap-6">
        <Dialog.Title className="text-xl font-medium"> Agregar Alumno </Dialog.Title>
        <div className="flex flex-col gap-6 p-4">
        <input
            type="text"
            placeholder="Nombre"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="rounded-lg bg-gray-100 p-2"
          />
          <input
            type="text"
            placeholder="Apellido"
            value={studentLastName}
            onChange={(e) => setStudentLastName(e.target.value)}
            className="rounded-lg bg-gray-100 p-2"
          />
          <div className='flex flex-row gap-4'>
           <Button title="Añadir" onClick={HandleAddStudentToCourse}/>
           <Button className="bg-gray-300" title="Cerrar" onClick={()=>{onClose()}}/>
          </div>
        </div>
     </Dialog.Panel>
    </BaseDialog>
  )
}
