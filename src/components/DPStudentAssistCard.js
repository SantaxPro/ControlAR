import {View, Text, StyleSheet, Button} from "react-native";
import theme from "../UI/theme";
import {useState} from "react";
import  newAttendanceEntry  from "../globals/global";

/*
COMPONENTE OBSOLETO
*/
export default function StudentAssistCard(props) {
    
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
        <View key={props.id}>
                <Text>Nombre alumno: {props.student_name}</Text>
                <Text>Apellido alumno: {props.student_lastname}</Text>
                <Button title="Asistió" onPress={()=>{handleNewEntry(props.student_id, props.student_name, props.student_lastname, "presente")}}/>
                <Button title="No Asistió" onPress={()=>{handleNewEntry(props.student_id, props.student_name, props.student_lastname, "ausente")}}/>
        </View>
    )
}