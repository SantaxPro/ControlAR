import React from "react";
import { CourseActionBar } from "../components/ActionBar";
import { CourseCard } from "../components/Card";
import { AddCourseDialog } from "../components/Dialog";
import useCourses from "../hooks/useCourses";
import { NavigationLayout } from "./layout/Layout";
export default function Courses() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isListView, setIsListView] = React.useState(false);
  const { courses } = useCourses();

  return (
    <NavigationLayout>
      <CourseActionBar
        isList={isListView}
        openDialog={() => {
          setIsDialogOpen(true);
        }}
        toggleView={() => {
          setIsListView(!isListView);
        }}
      />
      <div className="bg-screen">
        <AddCourseDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />

        <div className="flex flex-col gap-4 mx-10">
          {courses.map((course) => {
            if (isListView) {
              return (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  isListView={isListView}
                />
              );
            } else {
              return <CourseCard id={course.id} key={course.id} />;
            }
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
