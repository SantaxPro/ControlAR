import React  from "react";
import {View, Alert, Button, StyleSheet, TouchableOpacity, Text} from "react-native";
import { Ionicons } from '@expo/vector-icons';
//import {Ionicons} from '@expo/vector-icons/Ionicons';

//creo estilos para los tipos de botones segun props
const styles = StyleSheet.create({
    square: {
      left:20,
      width: 60,
      height: 60,
      backgroundColor: '#F5F5F4',
      borderRadius: 20,
      borderWidth: 1,
      borderColor:'black'
    },
    rectangle:{
      left:160,
      width: 200,
      height: 60,
      borderEndWidth: 1,
      backgroundColor: '#F5F5F4',
      borderColor:'#000000',
      borderRadius: 20
    }
})
//creo la funcion de los botones con lo que tengan dentro
const BotonEstandarCurso = (props) => {
  const estilos = [
    styles.square,
    props.type == 'rectangle' && styles.rectangle,
  ]
//console.log(props.icon)
    return (
      <TouchableOpacity style={estilos}>
<Ionicons name="md-search-sharp" size={24} color="black" />
        <Text style={{justifyContent:'center', alignContent:'center', textAlign:'center',fontSize:25}}>Agregar Curso</Text>
      </TouchableOpacity>
    );};export default BotonEstandarCurso;
