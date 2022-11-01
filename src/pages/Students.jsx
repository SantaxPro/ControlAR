import React from "react";
import { StudentActionBar } from "../components/ActionBar";
import { AddStudentDialog } from "../components/Dialog";
import {StudentCard}  from "../components/Card";
import useStudents from "../hooks/useStudents";
import { NavigationLayout } from "./layout/Layout";
export default function Students() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { students } = useStudents();

  const handleAddStudent = () => {
    setIsOpen(true);
  };
  return (
    <NavigationLayout>
      <StudentActionBar openDialog={()=>{setIsOpen(true)}}/>
      <AddStudentDialog
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
      <div className="flex flex-col gap-4 mx-10">
        {students.map((student) => {
          return <StudentCard key={student.id} {...student} />;
        })}
      </div>
    </NavigationLayout>
  );
}
