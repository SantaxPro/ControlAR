import React from "react";
import { db } from "../database/firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

const operationsContext = React.createContext();

const useOperations = () => {
  return React.useContext(operationsContext);
};

const useCourses = () => {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "courses")),
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
  return {courses};
};

const OperationsProvider = ({ children }) => {

  const createCourse = async (uid, name, students, entrys, isFavorite) => {
    const courseRef = collection(db, "courses");
    const course = {
      uid,
      name,
      students,
      entrys,
      isFavorite,
    };
    await addDoc(courseRef, course);
  };

  const createStudent = async (uid, name, lastname, course) => {
    const studentRef = collection(db, "students");
    const student = {
      uid,
      name,
      lastname,
      course,
    };
    await addDoc(studentRef, student);
  };

  const value = {
    createCourse,
    createStudent,
  };
  return (
    <operationsContext.Provider value={value}>
      {children}
    </operationsContext.Provider>
  );
};

export default useOperations;
export { OperationsProvider, useCourses };
