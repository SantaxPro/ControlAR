import React from "react";
import  {View, Text, Image}  from "react-native";
import BotonEstandarCurso from "./botonEstandarCurso";
import { Ionicons } from '@expo/vector-icons'; 

export default function AgregarCursoComponent (props) {
  return (
    //funcion del componente que muestra la pantalla para agregar un curso nuevo

   <View style={{
    //estilos de la pantalla
    backgroundColor:'#F5F5F4',
borderBottomWidth:1,
borderTopWidth:1,
borderColor:'black',
height: 80,
top:120,
justifyContent:'center',
alignContent:'center',
textAlign:'center'
}}>

<BotonEstandarCurso type='square' //agrego tipos de botones segun los props
    style={{
          flexDirection: "col",
          justifyContent: 'left',
        }}/>
    <BotonEstandarCurso type='rectangle' 
    style={{

    }}/>
    <BotonEstandarCurso type='square'/>
  <Image source={require('../img/noCourse.png')} //imagen que aparece al no haber cursos
  style={{
    flexDirection: "col",
    justifyContent: 'center',
  }}/>

      <Text>
      "No tienes ningun curso creado. Agrega uno para comenzar"
      </Text>
      </View>
  );
}
//icon={()=>{return(<Ionicons name="md-search-sharp" size={24} color="black" />)}}