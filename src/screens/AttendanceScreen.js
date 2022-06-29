import {View, Text, StyleSheet, FlatList, Button} from "react-native";
import {useState} from "react";
import data from '../data/testdata'

export default function AttendanceScreen({navigation, route}) {

    const [students, setStudents] = useState(route.params.array);
    const [attendance, setAttendance] = useState([]);

    return(
        <View>
            <FlatList 
            data={students}
            renderItem={({item}) => {return (
            <View>
                <Text>Nombre alumno: {item.student_name}</Text>
                <Text>Apellido alumno: {item.student_lastname}</Text>
                <Button title="Asistió" onPress={() => {

                    var new_assist_entry = {
                        student_fullname: item.student_name + " " + item.student_lastname,
                        student_id: item.student_id,
                        student_attendance: true
                    }
                    setAttendance([...attendance, new_assist_entry])
                    
                    }}/>
                <Button title="No Asistió" onPress={() => {

                    var today = new Date();

                    let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

                    var new_assist_entry = {
                        student_fullname: item.student_name + " " + item.student_lastname,
                        student_id: item.student_id,
                        student_attendance: false,
                        student_attendance_date: date
                    };
                    
                    setAttendance([...attendance, new_assist_entry])
                    }}/>
                <Button title="ver" onPress={() => {console.log(attendance)}} />
            </View>
            )}}
            />
        </View>
    )
}