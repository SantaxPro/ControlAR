import React from "react";
import { db } from "../database/firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  onSnapshot,
  updateDoc,
  getDoc,
  doc,
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
    const docRef = await addDoc(studentRef, student);
    return docRef;
  };

  const addStudentToCourse = async (studentId, courseId) => {
    const courseRef = doc(db, "courses", courseId);

    const course = await getDoc(courseRef);
    const student = await getDoc(doc(db, "students", studentId));

    const studentObject = student.data();

    //Elimino el campo curso antes de enviarlo a la coleccion de cursos
    //Para que no se duplique el campo
    delete studentObject.course;

    await updateDoc(courseRef, {
      students: [...course.data().students, studentObject],
    });
  };

  const value = {
    createCourse,
    createStudent,
    addStudentToCourse,
  };
  return (
    <operationsContext.Provider value={value}>
      {children}
    </operationsContext.Provider>
  );
};

export default useOperations;
export { OperationsProvider };
