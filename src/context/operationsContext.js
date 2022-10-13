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

//Exporto un custom hook para ahorrar codigo
const useOperations = () => {
  return React.useContext(operationsContext);
};


const OperationsProvider = ({ children }) => {
  //Dsde el contexto le paso las operacion ABM a los componentes hijos

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
export { OperationsProvider};
