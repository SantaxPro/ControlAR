import {View, Text, StyleSheet, FlatList, Button} from "react-native";
import {useState} from "react";
import data from '../data/testdata'
import StudentAssistCard from "../components/StudentAssistCard";

export default function AttendanceScreen({navigation, route}) {

    const [students, setStudents] = useState(route.params.array);
    const [attendance, setAttendance] = useState([]);



    return(
        <View>
            <FlatList 
            data={students}
            renderItem={({item, index}) => {return (
            <StudentAssistCard {...item}/>
            )}}
            keyExtractor={(item) => item.student_id.toString()}
            />
        </View>
    )
}