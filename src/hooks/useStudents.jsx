import React from "react";
import {db} from "../database/firebase";
import {onSnapshot, query, collection} from "firebase/firestore";

const useStudents = () => {
    const [students, setStudents] = React.useState([]);

    React.useEffect(() => {
        const unsub = onSnapshot(
            query(collection(db, "students")),
            (querySnapshot) => {
                const students = [];
                querySnapshot.forEach((doc) => {
                    students.push({...doc.data(), id: doc.id});
                });
                setStudents(students);
            }
        );
        return () => {
            unsub();
        };
    }, []);
    return {students};
};

const useStudentsByCourse = (courseId) => {
    const [students, setStudents] = React.useState([]);
    React.useEffect(() => {
        const unsub = onSnapshot(
                query(collection(db, "students")),
                (querySnapshot) => {
                    const students = [];
                    querySnapshot.forEach((doc) => {
                        if (doc.data().course) {
                            if (doc.data().course.id === courseId) {
                                students.push({...doc.data(), id: doc.id});
                            }
                        }
                    });
                    setStudents(students);
                }
                );
        return () => {
            unsub();
        };
        }, [courseId]);
    return {students}
}

export default useStudents;
export {useStudentsByCourse}