import react from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import TopBar from "../components/TopBar";
import CoursesContainer from "../components/CoursesContainer";

export default function CoursesScreen() {
    return (
        <View style={styles.container}>
            <TopBar title="Mis cursos"/>
            <CoursesContainer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    }
})