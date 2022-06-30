import {View, Text, StyleSheet, FlatList, Button} from "react-native";
import {useState} from "react";
import data from '../data/testdata'
import { StudentCard } from "../components/Card";


export default function AttendanceScreen({navigation, route}) {

    const [students, setStudents] = useState(route.params.array);
    const [attendance, setAttendance] = useState([]);

    return(
        <View>
            <FlatList 
            data={students}
            renderItem={({item}) => {return (<StudentCard {...item} variant={2}/>)}}
            keyExtractor={(item) => {item.student_id.toString()}}
            />
        </View>
    )
}