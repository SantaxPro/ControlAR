import React from "react";
import {db} from "../database/firebase";
import {collection, addDoc, query, where, getDocs, onSnapshot} from "firebase/firestore";


const operationsContext = React.createContext();

const useOperations = () => {
    return React.useContext(operationsContext);
}

const OperationsProvider = ({children}) => {
    
    const createCourse = async (uid, name, students, entrys, isFavorite) => {
        const courseRef = collection(db, "courses");
        const course = {
            uid,
            name,
            students,
            entrys,
            isFavorite
        }
        await addDoc(courseRef, course);
    }

    const getCourses = async (uid) => {
        //Get all the courses from the database in realtime using onSnapshot
        const returnedData = {
            courses: [],
            unsubscribe: null,
        }
        const unsub = onSnapshot(query(collection(db, "courses"), where("uid", "==", uid)), (querySnapshot) => {
            const courses = [];
            querySnapshot.forEach((doc) => {
                courses.push({...doc.data(), id: doc.id});
            });
            returnedData.courses = courses;
        });
        returnedData.unsubscribe = unsub;
        return returnedData;
    }

    const value = {
        createCourse,
        getCourses,
    }
    return (
        <operationsContext.Provider value={value}>
            {children}
        </operationsContext.Provider>
    )
}

export default useOperations
export {OperationsProvider}
