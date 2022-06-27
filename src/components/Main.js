import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button} from 'react-native'
import CoursesScreen from "../screens/CoursesScreen";
import SingleCourseScreen from '../screens/SingleCourseScreen';
import LoginScreen from "../screens/LoginScreen";
import StyledButton from "./StyledButton";
import ConfigButton from './ConfigButton.js';
import { FontAwesome } from '@expo/vector-icons'; 
import theme from "../UI/theme";
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

const stack = createNativeStackNavigator();

export default function Main() {
    return (
        <TailwindProvider utilities={utilities}>
        <NavigationContainer>
            <stack.Navigator initialRouteName="Miscursos">
                <stack.Screen name="Miscursos" component={CoursesScreen} options={{
                headerRight: ({navigation}) => (
                    <ConfigButton onPress={()=>{navigation.navigate('Login')}}/>
                ),
            }}/>

                <stack.Screen name="Curso" component={SingleCourseScreen} options={({ route })=>({title: route.params.courseName})} />
                <stack.Screen name="Login" component={LoginScreen} />
            </stack.Navigator>
        </NavigationContainer>
        </TailwindProvider>
    );
}
