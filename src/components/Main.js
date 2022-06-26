import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CoursesScreen from "../screens/CoursesScreen";
import SingleCourseScreen from '../screens/SingleCourseScreen';
import LoginScreen from "../screens/LoginScreen";

const stack = createNativeStackNavigator();

export default function Main() {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="Miscursos">
                <stack.Screen name="Miscursos" component={CoursesScreen} />
                <stack.Screen name="Curso" component={SingleCourseScreen} />
                <stack.Screen name="Login" component={LoginScreen} />
            </stack.Navigator>
        </NavigationContainer>
    );
}
