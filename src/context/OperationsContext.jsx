import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteField,
} from "firebase/firestore";
import { db } from "../database/firebase";
import { createContext, useContext, useEffect, useState } from "react";

const OperationsContext = createContext();

export const OperationsProvider = ({ children }) => {
  const [isCourseAttendanceReady, setIsCourseAttendanceReady] = useState(false);

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
  const deleteStudentFromCourse = async (courseId, studentId, student) => {
    await updateDoc(doc(db, "students", studentId), {
      course: deleteField(),
    });
    console.log(student);
    updateDoc(doc(db, "courses", courseId), {
      students: arrayRemove(student),
    });
  };

  const updateStudentName = (studentId, studentName) => {
    updateDoc(doc(db, "students", studentId), {
      name: studentName,
    });
  };
  const updateStudentLastName = (studentId, studentLastname) => {
    updateDoc(doc(db, "students", studentId), {
      lastname: studentLastname,
    });
  };

  const addStudentToCourse = async (courseId, studentId, student) => {
    await updateDoc(doc(db, "students", studentId), {
      course: { id: courseId },
    }).then(() => {
      updateDoc(doc(db, "courses", courseId), {
        students: arrayUnion({
          name: student.name,
          lastname: student.lastname,
          course: { id: courseId },
        }),
      });
    });
    // updateDoc(doc(db, "courses", courseId), {
    //   students: arrayUnion(student),
    // });
  };

  const addStudent = async (student) => {
    const createdStudent = await addDoc(collection(db, "students"), student);
    // student.id = createdStudent.id
    await updateDoc(doc(db, "courses", student.course.id), {
      students: arrayUnion(student),
    });
  };

  const deleteStudent = async (studentId, student) => {
    const studentDoc = doc(db, "students", studentId);
    await deleteDoc(studentDoc);
    //Delete student from course
    if (student.course.id) {
      await updateDoc(doc(db, "courses", student.course.id), {
        students: arrayRemove(student),
      });
    }
  };

  const addAttendanceEntry = async (courseId, attendanceEntry) => {
    const createdAttendanceEntry = await addDoc(
      collection(db, "attendanceEntrys"),
      attendanceEntry
    );
    await updateDoc(doc(db, "courses", courseId), {
      attendanceEntrys: arrayUnion({
        id: createdAttendanceEntry.id,
        date: attendanceEntry.date,
      }),
    });
  };

  const createAttendanceRegistry = async (
    courseId,
    preceptorName,
    registryDate
  ) => {
    const attendanceRegistry = {
      courseId: courseId,
      preceptorName: preceptorName,
      date: registryDate,
      studentEntrys: [],
    };
    const createdRegistryId = addDoc(
      collection(db, "attendanceRegistries"),
      attendanceRegistry
    ).then((createdRegistry) => {
      const createdRegistryId = createdRegistry.id;
      return createdRegistryId;
    });

    return createdRegistryId;
  };

  const deleteAttendanceRegistry = async (registryId) => {
    const registryDoc = doc(db, "attendanceRegistries", registryId);
    await deleteDoc(registryDoc);
    // console.log('doc exitoso', registryDoc);
  };

  return (
    <OperationsContext.Provider
      value={{
        addCourse,
        deleteCourse,
        updateCourseName,
        addStudent,
        deleteStudent,
        updateStudentLastName,
        updateStudentName,
        deleteStudentFromCourse,
        addStudentToCourse,
        isCourseAttendanceReady,
        setIsCourseAttendanceReady,
        addAttendanceEntry,
        createAttendanceRegistry,
        deleteAttendanceRegistry,
      }}
    >
      {children}
    </OperationsContext.Provider>
  );
};

export const useOperations = () => {
  return useContext(OperationsContext);
};
