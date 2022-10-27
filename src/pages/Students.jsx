import React from 'react'
import { AddStudentDialog } from '../components/CourseDialog';
import { NavigationBar } from '../components/NavigationBar'
import useStudents from '../hooks/useStudents'
export default function Students() {
  const [isOpen, setIsOpen] = React.useState(false)
  const {students} = useStudents();

  const handleAddStudent = () => {
    setIsOpen(true)
  }
  return (
    <div>
      <NavigationBar />
      <button onClick={handleAddStudent}>
        Add Student
      </button>
      <AddStudentDialog isOpen={isOpen} onClose={()=>{setIsOpen(false)}} />
      <div className='flex flex-col gap-4 mx-10' >
      {students.map((student) => {
        return <h2 key={student.id}>{student.name}</h2>;
      })}
      </div>

    </div>
  )
}
