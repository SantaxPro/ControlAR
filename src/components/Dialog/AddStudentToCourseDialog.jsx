import React,{useState} from 'react'
import BaseDialog from './BaseDialog'
import { Dialog } from '@headlessui/react'

export const AddStudentToCourseDialog = ({open, setOpen}) => {
    const [studentName, setStudentName] = useState("");
    const [studentLastName, setStudentLastName] = useState("");
  return (
    <BaseDialog isOpen={open} onClose={()=>{setOpen(false)}}>
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
        </div>
     </Dialog.Panel>
    </BaseDialog>
  )
}
