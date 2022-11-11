import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  deleteField,
  doc,
  updateDoc,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../database/firebase";

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

  const addStudentAttendanceEntry = async (registryId, studentEntry) => {
    await updateDoc(doc(db, "attendanceRegistries", registryId), {
      studentEntrys: arrayUnion(studentEntry),
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

  const addRegistryToCourse = async (courseId, registryId) => {
    await updateDoc(doc(db, "courses", courseId), {
      attendanceEntrys: arrayUnion(registryId),
    });
  };

  const updateStudentJustification = async (
    registryId,
    student,
    justification
  ) => {
    await updateDoc(doc(db, "attendanceRegistries", registryId), {
      studentEntrys: arrayRemove({
        reason: "",
        isJustified: false,
        state: "non-present",
        student: {
          name: student.name,
          lastname: student.lastname,
          id: student.id,
        },
      }),
    }).then(() => {
      updateDoc(doc(db, "attendanceRegistries", registryId), {
        studentEntrys: arrayUnion({
          reason: justification,
          isJustified: true,
          state: "non-present",
          student: {
            name: student.name,
            lastname: student.lastname,
            id: student.id,
          },
        }),
      });
    });
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
        addStudentAttendanceEntry,
        createAttendanceRegistry,
        deleteAttendanceRegistry,
        addRegistryToCourse,
        updateStudentJustification,
      }}
    >
      {children}
    </OperationsContext.Provider>
  );
};

export const useOperations = () => {
  return useContext(OperationsContext);
};
