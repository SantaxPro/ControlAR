import react from 'react'
import {View, Text, StyleSheet, StatusBar, FlatList} from 'react-native'
import {courses} from '../data/testdata'
import StudentCard from '../components/StudentCard.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; 
import theme from '../UI/theme';

const Tab = createBottomTabNavigator();

function StudentsScreen(props) {

    //Extraigo la id del curso que estoy mostrando en esta pantalla con el prop route
        const { courseId } = props.route.params;
        //Ejecuto el metodo find al array de cursos que simula la informacion, para encontrar el curso que corresponde a la id que le paso
        const course = courses.find(c => c.id === courseId); //que grande copilot
        //Guardo el array de estudiantes en una variable para recorrerlo y mostrar la informacion de cada estudiante
        const arr = course.array_alumns;
    
    return (
        <View style={styles.container}>
        <FlatList
            style={styles.list}
            data={arr}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => <StudentCard {...item} />}
        />
        </View>
    );
}

function LogsScreen(props) {
    return(
        <View style={styles.container}>
            <Text>LogsScreen</Text>
        </View>
    )
}

export default function SingleCourseScreen({route,  navigation }) {
    console.log(route)
    return (
        <View style={styles.container}>
            <Tab.Navigator screenOptions={({route})=>{
                return{
                    tabBarIcon: ({color, size}) => {
                        return <MaterialIcons name="school" size={size} color={color} />
                    },
                    headerTitleAlign: 'center',
                }
            }}>
                <Tab.Screen name="Estudiantes" component={StudentsScreen}
                options={{
                    tabBarIcon: ()=>{
                        return <MaterialIcons name='people' size={24} color={theme.colors.primaryGrey} />
                    }
                }} 
                />
                <Tab.Screen name="Planilla" component={LogsScreen} />
            </Tab.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    }
})