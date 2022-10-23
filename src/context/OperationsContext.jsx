import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
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

  return (
    <OperationsContext.Provider value={{ addCourse, deleteCourse, updateCourseName }}>
      {children}
    </OperationsContext.Provider>
  );
};

export const useOperations = () => {
  return useContext(OperationsContext);
};
