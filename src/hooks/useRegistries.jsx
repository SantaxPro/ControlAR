import React from 'react'
import { onSnapshot, doc, collection, query, where } from "firebase/firestore";
import { db } from "../database/firebase";

export const useSingleRegistry = (registryId) => {
    const [registry, setRegistry] = React.useState(null)

    React.useEffect(() => {
        const getRegistry = async () => {
            const registry = await getDoc(doc(db, 'attendanceEntrys', registryId))
            setRegistry(registry.data())
        }
        getRegistry()
    }, [registryId])

    return { registry }
}

export const useRegistriesByCourse = (courseId) => {
    const [registries, setRegistries] = React.useState([])

    React.useEffect(() => {
        const unsub = onSnapshot(query(collection(db, 'attendanceRegistries'), where('courseId', '==', courseId)), 
        (querySnapshot) => {
            const registries = []
            querySnapshot.forEach((doc) => {
                registries.push({id: doc.id, ...doc.data()})
            })
            // console.log(registries);
            setRegistries(registries)
        })
        return () => unsub()
    }, [courseId])

    return { registries }
}