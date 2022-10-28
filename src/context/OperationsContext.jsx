import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion
} from "firebase/firestore";
import { db } from "../database/firebase";
import { createContext, useContext, useEffect, useState } from "react";

const OperationsContext = createContext();

export const OperationsProvider = ({ children }) => {
  const addCourse = (course) => {
    const newCourse = {
      ...course,
      students: [],
      attendanceEntrys: [],
    };
    addDoc(collection(db, "courses"), newCourse);
  };
  const deleteCourse = (courseId) => {
    deleteDoc(doc(db, "courses", courseId));
  };
  const updateCourseName = (courseId, courseName) => {
    updateDoc(doc(db, "courses", courseId), {
      name: courseName,
    });
  };
  const addStudent = async (student) => {
    const createdStudent = await addDoc(collection(db, "students"), student);
    // student.id = createdStudent.id
    await updateDoc(doc(db, "courses", student.course.id), {
      students: arrayUnion(student),
    });
  };

  return (
    <OperationsContext.Provider value={{ addCourse, deleteCourse, updateCourseName, addStudent }}>
      {children}
    </OperationsContext.Provider>
  );
};

export const useOperations = () => {
  return useContext(OperationsContext);
};
