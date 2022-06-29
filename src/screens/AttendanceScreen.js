import {View, Text, StyleSheet, FlatList, Button} from "react-native";
import {useState} from "react";
import data from '../data/testdata'

export default function AttendanceScreen({navigation, route}) {

    const [students, setStudents] = useState(route.params.array);
    const [attendance, setAttendance] = useState([]);

    const getDate = () => {
        var today = new Date();
        let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        return date
    }

    return(
        <View>
            <FlatList 
            data={students}
            
            renderItem={({item, index}) => {return (
            <View key={item.id}>
                <Text>Nombre alumno: {item.student_name}</Text>
                <Text>Apellido alumno: {item.student_lastname}</Text>
                <Button title="Asistió" onPress={() => {

                    var new_assist_entry = {
                        student_fullname: item.student_name + " " + item.student_lastname,
                        student_id: item.student_id,
                        student_attendance: true,
                        student_attendance_date: getDate(),
                    }
                    if (attendance.includes(new_assist_entry)==false)
                    {
                        setAttendance([...attendance, new_assist_entry])
                    }
                    
                    }}/>
                <Button title="No Asistió" onPress={() => {



                    var new_assist_entry = {
                        student_fullname: item.student_name + " " + item.student_lastname,
                        student_id: item.student_id,
                        student_attendance: false,
                        student_attendance_date: getDate(),
                    };
                    
                    setAttendance([...attendance, new_assist_entry])
                    }}/>
                <Button title="ver" onPress={() => {console.log(attendance)}} />
            </View>
            )}}
            keyExtractor={(item) => item.student_id.toString()}
            />
        </View>
    )
}