import react from 'react'
import {View, Text, StyleSheet, StatusBar, FlatList} from 'react-native'
import {courses} from '../data/testdata'
import StudentCard from '../components/StudentCard.js';

export default function SingleCourseScreen({route,  navigation }) {
    //Extraigo la id del curso que estoy mostrando en esta pantalla con el prop route
    const { courseId } = route.params;
    //Ejecuto el metodo find al array de cursos que simula la informacion, para encontrar el curso que corresponde a la id que le paso
    const course = courses.find(c => c.id === courseId); //que grande copilot
    //Guardo el array de estudiantes en una variable para recorrerlo y mostrar la informacion de cada estudiante
    const array_students = course.array_alumns;
    console.log(course);
    return (
        <View style={styles.container}>
            <FlatList 
            data={array_students}
            renderItem={({item}) => <StudentCard {...item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    }
})