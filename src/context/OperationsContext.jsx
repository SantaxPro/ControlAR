import { addDoc, collection } from "firebase/firestore";
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
        addDoc(collection(db, 'courses'), newCourse);
    };

    return (
    <OperationsContext.Provider value={{addCourse}}>
      {children}
    </OperationsContext.Provider>
  );
};

export const useOperations = () => {
    return useContext(OperationsContext);
};
