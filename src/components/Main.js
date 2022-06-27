import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native'
import CoursesScreen from "../screens/CoursesScreen";
import SingleCourseScreen from '../screens/SingleCourseScreen';
import LoginScreen from "../screens/LoginScreen";
import StyledButton from "./StyledButton";
import ConfigButton from './ConfigButton.js';
import { FontAwesome } from '@expo/vector-icons'; 
import theme from "../UI/theme";

const stack = createNativeStackNavigator();

export default function Main() {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="Mis cursos">
                <stack.Screen name="Mis cursos"
                component={CoursesScreen} 
                options={{
                    headerRight: () => (
                        <TouchableOpacity>
                            <FontAwesome name="gear" size={24} color={theme.colors.primaryGrey} />
                        </TouchableOpacity>
                    ),
                }}/>

                <stack.Screen name="Curso"
                 component={SingleCourseScreen}
                  options={
                    ({ route })=>({
                        headerTitle: route.params.params.name
                    })
                }
                />
                <stack.Screen name="Login" component={LoginScreen} />
            </stack.Navigator>
        </NavigationContainer>
    );
}
