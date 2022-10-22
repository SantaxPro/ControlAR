import React from "react";
import { db } from "../database/firebase";
import { onSnapshot, query, collection, where } from "firebase/firestore";

const useCourses = (user) => {
  const [courses, setCourses] = React.useState([]);

  


  React.useEffect(() => {
    if (user) {
      const unsub = onSnapshot(
        query(collection(db, "courses"), where("uid", "==", user.uid)),
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
    }
  }, [user]);
  return { courses };
};

export default useCourses;
