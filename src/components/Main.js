import React from "react";
import { TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FontAwesome } from "@expo/vector-icons";
import theme from "../UI/theme";

import LoginScreen from "../screens/LoginScreen";
import CoursesScreen from "../screens/CoursesScreen";
import SingleCourseScreen from "../screens/SingleCourseScreen";
import  ProfileScreen from "../screens/ProfileScreen";
import AttendanceScreen from "../screens/AttendanceScreen";

import Header from "./Header";

import Context from "./context";

//Constante que almacena el navigator de tipo stack
//Libreria: React Navigation
const stack = createNativeStackNavigator();

//El componente main actua como punto de entrada de la app
//Reemplazando a app.js
export default function Main() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <Context.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <NavigationContainer>
        <stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          header: (props) => {
            return (
              <Header/>
            );
          }
        }}
        >

          {isLoggedIn == false ? (

            <stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />

          ) : (
            <>
              <stack.Screen
                name="Mis cursos"
                component={CoursesScreen}
                options={({ navigation }) => ({
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Perfil");
                      }}
                    >
                      <FontAwesome
                        name="user"
                        size={24}
                        color={theme.colors.primaryGrey}
                      />

                    </TouchableOpacity>
                  ),
                })}
              />

              <stack.Screen
                name="Curso"
                component={SingleCourseScreen}
                options={({ route }) => ({
                  headerTitle: route.params.params.name,
                })}
              />

              <stack.Screen
                name="Perfil"
                component={ProfileScreen}
              />

              <stack.Screen name="Asistencia" component={AttendanceScreen} />
            </>
          )}
        </stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}
