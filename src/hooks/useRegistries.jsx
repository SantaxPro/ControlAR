import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React from "react";
import { db } from "../database/firebase";

export const useSingleRegistry = (registryId) => {
  const [registry, setRegistry] = React.useState(null);

  React.useEffect(() => {
    const registryRef = doc(db, "attendanceRegistries", registryId);
    const unsubscribe = onSnapshot(registryRef, (doc) => {
      setRegistry({ id: doc.id, ...doc.data() });
    });
    return () => unsubscribe();
  }, [registryId]);

  return { registry };
};

export const useRegistriesByCourse = (courseId) => {
  const [registries, setRegistries] = React.useState([]);

  React.useEffect(() => {
    const unsub = onSnapshot(
      query(
        collection(db, "attendanceRegistries"),
        where("courseId", "==", courseId)
      ),
      (querySnapshot) => {
        const registries = [];
        querySnapshot.forEach((doc) => {
          registries.push({ id: doc.id, ...doc.data() });
        });
        // console.log(registries);
        setRegistries(registries);
      }
    );
    return () => unsub();
  }, [courseId]);

  return { registries };
};
