import React from "react";
import  {View, Text}  from "react-native";
import BotonEstandarCurso from "./botonEstandarCurso";
import { Ionicons } from '@expo/vector-icons'; 
const textoSinCursos = "No tienes ningun curso creado. Agrega uno para comenzar",


export default function AgregarCursoComponent (props) {
  return (
   <View style={{
    backgroundColor:'#F5F5F4',
borderBottomWidth:1,
borderTopWidth:1,
borderColor:'black',
height: 80,
top:120,
justifyContent:'center',
alignContent:'center',
textAlign:'center'}}>
    <BotonEstandarCurso type='square' 
    style={{
          flexDirection: "col",
          justifyContent: 'left',
        }}/>
    <BotonEstandarCurso type='rectangle' 
    style={{

    }}/>
    <BotonEstandarCurso type='square'/>
  <View>
      <Text>
      "No tienes ningun curso creado. Agrega uno para comenzar"
      <Text/>
      </View>
  );
}
//icon={()=>{return(<Ionicons name="md-search-sharp" size={24} color="black" />)}}