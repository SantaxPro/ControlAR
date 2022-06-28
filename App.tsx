
import { ThemeProvider } from "@react-navigation/native";
import React from "react";
import { View,Button, ScrollView, StyleSheet } from "react-native";
import  SafeAreaView  from "react-native-safe-area-context";
import AgregarCursoComponent from "./src/UX/agregarCursoComponent.js";

//importo la pantalla que se va a mostrar
//import  mainScreenContainer  from "./src/UX/mainScreenContainer.js";}

export default function App(){
return(
<View style={styles.container}>
    <AgregarCursoComponent/>
    
  </View>
  );};
const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})
