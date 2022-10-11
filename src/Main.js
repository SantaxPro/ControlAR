import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {AuthProvider, authContext} from "./context/authContext";

import Courses from "./views/Courses/Courses";
import Students from "./views/Students/Students";
import Login from "./views/Login/Login";

const Tabs = createBottomTabNavigator();

function Main() {

  const {isLoggedIn} = React.useContext(authContext);

  return (
      <NavigationContainer>
        <Tabs.Navigator>
          {
            isLoggedIn ? (
              <>
                <Tabs.Screen name="Courses" component={Courses} />
                <Tabs.Screen name="Students" component={Students} />
              </>
            ) : (
              <Tabs.Screen name="Login" component={Login} />
            )
          }
        </Tabs.Navigator>
      </NavigationContainer>
  );
}

export default Main;
