import React from "react";
import  {View, Text, StyleSheet, TouchableOpacity}  from "react-native";
import Buttons from "./Buttons";
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

export default function AgregarCursoComponent (props) {
  return (
    //funcion del componente que muestra un casillero con botones para agregar,editar,etc, un curso nuevo
   <View style={styles.container}>
    <Buttons type="square" icon={<Ionicons name="md-search-sharp" size={45} color="black" style={{marginTop:12,}}/>} />
    <Buttons type="square" icon={<Feather name="list" size={45} color="black" style={{marginTop:12,}} />} />
    <Buttons type="rectangle" text={<Text style={{fontSize:25}}>Agregar Curso</Text>}/>
   </View>
  );
}

const styles = StyleSheet.create({
container:{
  backgroundColor:'#F5F5F4',
  borderBottomWidth:1,
  borderTopWidth:1,
  borderColor:'black',
  height: 80,
  top:120,
  justifyContent:"flex-start",  
  flexDirection:'row',
}})