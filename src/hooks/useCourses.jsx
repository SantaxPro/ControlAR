import React from "react";
import { db } from "../database/firebase";
import { onSnapshot, query, collection, where } from "firebase/firestore";

const useCourses = () => {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    
      const unsub = onSnapshot(
       collection(db, "courses"),
        (querySnapshot) => {
          const courses = [];
          querySnapshot.forEach((doc) => {
            courses.push({ ...doc.data(), id: doc.id });
          });
          setCourses(courses);
        }
      );
      return () => {
        unsub();
      };
    
  }, []);
  return { courses };
};

export default useCourses;
