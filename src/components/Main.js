import React from "react";
import { TouchableOpacity, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons'; 
import theme from "../UI/theme";

import LoginScreen from "../screens/LoginScreen";
import CoursesScreen from "../screens/CoursesScreen";
import SingleCourseScreen from "../screens/SingleCourseScreen";
import  ProfileScreen from "../screens/ProfileScreen";
import AttendanceScreen from "../screens/AttendanceScreen";

import Header from "./Headers/Header";

import CourseHeader from "./Headers/CourseHeader";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileHeader from "./Headers/ProfileHeader";

//Constante que almacena el navigator de tipo stack
//Libreria: React Navigation
const stack = createNativeStackNavigator();

//El componente main actua como punto de entrada de la app
//Reemplazando a app.js
export default function Main() {
  const {user, isAuthenticated} = useAuth0();

  return (
      <NavigationContainer>
        <stack.Navigator 
        initialRouteName="Login"
        >
          {isAuthenticated == false ? (

            <stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false , }}

            />

          ) : (
            <>
              <stack.Screen
                name="Mis cursos"
                component={CoursesScreen}
                options={{header: (props) => {
                  return (
                    <Header {...props} user={user}/>
                  );
                }}}
              />

              <stack.Screen
                name="Curso"
                component={SingleCourseScreen}
                options={{header: (props) => {
                  return (
                    <CourseHeader {...props} />
                  );
                }}}
              />

              <stack.Screen
                name="Perfil"
                component={ProfileScreen}
                options={{header: (props) => {
                  return (
                    <ProfileHeader {...props} />
                  )}}}
              />

              <stack.Screen name="Asistencia" component={AttendanceScreen} />
            </>
          )}
        </stack.Navigator>
      </NavigationContainer>
  );
}
