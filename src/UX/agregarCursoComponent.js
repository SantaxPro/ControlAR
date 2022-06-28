import React from "react";
import  {View}  from "react-native";
import BotonEstandarCurso from "./botonEstandarCurso";
import { Ionicons } from '@expo/vector-icons'; 


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
  </View>
  );
}
//icon={()=>{return(<Ionicons name="md-search-sharp" size={24} color="black" />)}}