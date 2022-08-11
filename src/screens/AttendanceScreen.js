import {View, Text, StyleSheet, FlatList, Button} from "react-native";
import {useState} from "react";
import data from '../data/testdata'
import { StudentCard } from "../components/Cards/Card";


//Pantalla de asistencia, muestra a los alumnos de el curso en cuestion para tomar asistencia
export default function AttendanceScreen({navigation, route}) {

    const [students, setStudents] = useState(route.params.array);
    const [attendance, setAttendance] = useState([]);
    return(
        <View>
            <FlatList 
            data={students}
            renderItem={(item) => {return (<StudentCard {...item} variant={2}/>)}}
            keyExtractor={(item) => {return item.student_id}}
            />
        </View>
    )
}