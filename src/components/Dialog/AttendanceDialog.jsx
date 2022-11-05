import { Dialog } from '@headlessui/react'
import React from 'react'
import { Button } from '../Button'
import BaseDialog from './BaseDialog'

export const AttendanceDialog = ({open, setOpen, course, requestAttendanceRegistry}) => {
   
  return (
    <BaseDialog isOpen={open} onClose={()=>{setOpen(false)}}  >
    <Dialog.Panel className="flex items-start flex-col sm:w-96 gap-4  p-8  rounded-xl bg-white">
      <Dialog.Title className="text-2xl font-medium">
        Asistencia
      </Dialog.Title>
      <div className='flex flex-col gap-2'>
        <p className='mb-2 text-lg'>¿Desea crear el siguiente registro?</p>

        <section>
          <p className='font-medium'>Nombre del curso: {course?.name}</p>
          <p className='font-medium'>Fecha {new Date().toLocaleString()}</p>
          <p className='font-medium'>Ultimo registro: </p>
          <span>{/*Aca iria la fecha del ultimo registro de asistencia de el curso*/}</span>
        </section>
        <div className='flex flex-row justify-around my-2'>
        <Button title='Crear' onClick={()=>{requestAttendanceRegistry()}}/>
        <Button title='Cancelar' className='bg-gray-200 hover:bg-gray-300' onClick={()=>{setOpen(false)}}/>
        </div>
      </div>
    </Dialog.Panel>
    </BaseDialog>
  )
}
