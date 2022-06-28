import {View, Text, StyleSheet, FlatList, Button} from "react-native";
import {useState} from "react";

export default function AttendanceScreen({navigation, route}) {
    console.log(route)
    const [students, setStudents] = useState([]);
    return(
        <View>
            <Text>Curso: {route.params.courseId}</Text>
        </View>
    )
}