import { doc, onSnapshot } from "firebase/firestore";
import React from "react";
import { db } from "../database/firebase";
const useSingleCourse = (id) => {
  const [course, setCourse] = React.useState(null);
  React.useEffect(() => {
    if (!id) {
      return;
    }
    const unsub = onSnapshot(doc(db, "courses", id), (doc) => {
      setCourse({ ...doc.data(), id: doc.id });
    });
    return () => {
      unsub();
    };
  }, [id]);
  return { course };
};

export default useSingleCourse;
