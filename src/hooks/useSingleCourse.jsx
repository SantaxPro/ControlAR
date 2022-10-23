import React from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../database/firebase";
const useSingleCourse = (id) => {
    const [course, setCourse] = React.useState(null);
  
    React.useEffect(() => {
      const unsub = onSnapshot(
        doc(db, "courses", id),
        (doc) => {
          setCourse({ ...doc.data(), id: doc.id });
        }
      );
      return () => {
        unsub();
      };
    }, [id]);
    return { course };
  };

  export default useSingleCourse;