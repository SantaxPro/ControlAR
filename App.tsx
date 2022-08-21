
import { ThemeProvider } from "@react-navigation/native";
import React from "react";
import { View,Button, ScrollView, StyleSheet } from "react-native";
import  SafeAreaView  from "react-native-safe-area-context";
import AgregarCursoComponent from "./src/components/agregarCursoComponent.js";
import RegisterScreen from "./src/components/courseScreen.js";
//import  mainScreenContainer  from "./src/UX/mainScreenContainer.js";}

export default function App(){
return(
  //agrego las pantalla que se van a mostrar en la app
<View style={styles.container}>
    <AgregarCursoComponent/>
  </View>
  );};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})
