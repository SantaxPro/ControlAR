import React from 'react'

export const ActionBar = ({openDialog}) => {
  return (
    <div className="flex flex-row justify-center items-center p-4">
        <div>Busque un curso...</div>
        <div>
            <button onClick={()=>{openDialog()}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                Añadir Curso
            </button>
        </div>
    </div>
  )
}
