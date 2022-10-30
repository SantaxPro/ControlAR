import React from "react";
import { CourseActionBar } from "../components/ActionBar";
import { CourseCard } from "../components/CourseCard";
import { AddCourseDialog } from "../components/Dialog";
import { NavigationLayout } from "./layout/Layout";
import useCourses from "../hooks/useCourses";
export default function Courses() {

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const { courses } = useCourses();

  return (
    <NavigationLayout>
      <CourseActionBar openDialog={()=>{setIsDialogOpen(true)}} />
      <div className="bg-screen">

      <AddCourseDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        />

      <div className="flex flex-col gap-4 mx-10">
        {courses.map((course) => {
          return <CourseCard id={course.id} key={course.id} />;
        })}
      </div>

      {courses.length === 0 && (
        <h1 className="text-center text-2xl">No Courses</h1>
        )}
      </div>
    </NavigationLayout>
  );
}

{
  /* <div>
<NavigationBar />
<ActionBar
  openDialog={() => {
    setIsDialogOpen(true);
  }}
/>

<AddCourseDialog isOpen={isDialogOpen} onClose={()=>setIsDialogOpen(false)} />

<div className='flex flex-col gap-4 mx-10' >
{courses.map((course) => {
    return <CourseCard id={course.id} key={course.id}/>;
})}
</div>

{courses.length === 0 && (
  <h1 className="text-center text-2xl">No Courses</h1>
)}
</div> */
}
