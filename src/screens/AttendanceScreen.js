import {View, Text, StyleSheet, FlatList, Button} from "react-native";
import {useState} from "react";
import data from '../data/testdata'
import  newAttendanceEntry  from "../globals/global";

export default function AttendanceScreen({navigation, route}) {

    const [students, setStudents] = useState(route.params.array);
    const [attendance, setAttendance] = useState([]);

    const getDate = () => {
        var today = new Date();
        let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        return date
    }

    const handleNewEntry = (id, name, lastname, state) => {
        var new_assist_entry = {
            student_fullname: name + " " + lastname,
            student_id: id,
            student_attendance_state: state,
            student_attendance_date: getDate(),
        }
        newAttendanceEntry(new_assist_entry);

    }

    return(
        <View>
            <FlatList 
            data={students}
            renderItem={({item, index}) => {return (
            <View key={item.id}>
                <Text>Nombre alumno: {item.student_name}</Text>
                <Text>Apellido alumno: {item.student_lastname}</Text>
                <Button title="Asistió" onPress={()=>{handleNewEntry(item.student_id, item.student_name, item.student_lastname, "presente")}}/>
                <Button title="No Asistió" onPress={()=>{handleNewEntry(item.student_id, item.student_name, item.student_lastname, "ausente")}}/>
                <Button title="ver" onPress={() => {console.log(attendance)}} />
            </View>
            )}}
            keyExtractor={(item) => item.student_id.toString()}
            />
        </View>
    )
}