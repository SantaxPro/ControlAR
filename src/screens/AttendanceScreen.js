import {View, Text, StyleSheet, FlatList, Button} from "react-native";
import {useState} from "react";
import data from '../data/testdata'
import { StudentCard } from "../components/Cards/Card";


//Pantalla de asistencia, muestra a los alumnos de el curso en cuestion para tomar asistencia
export default function AttendanceScreen({navigation, route}) {

    const [students, setStudents] = useState(route.params.array);
    const [attendance, setAttendance] = useState([]);

    const handleNewEntry = (id) => {
        let new_arr = students.map((item)=>{
            if (item.student_id === id){
                return {...item, active: false}
            }
            return item
        })
        setStudents(new_arr)
        // setStudents(current => {console.log(current)})
    }

    return(
        <View>
            <FlatList 
            data={students}
            renderItem={(item) => {
                //Si la propiedad active es true en el item renderizandose, renderizar ese estudiante
            if (item.item.active == true) {
                return (<StudentCard {...item} handleNewEntry={handleNewEntry} variant={2}/>)
            }
            //Si no es true, no renderizes nada
                return null;
            } }
            keyExtractor={(item) => {return item.student_id}}
            />
        </View>
    )
}