import React  from "react";
import {View, Alert, Button, StyleSheet, TouchableOpacity, Text, Image} from "react-native";
import { Ionicons } from '@expo/vector-icons';

//creo estilos para los tipos de botones segun props
const styles = StyleSheet.create({
    square: {
      marginLeft:20,
      marginTop: 10,
      width: 60,
      height: 60,
      backgroundColor: '#F5F5F4',
      borderRadius: 20,
      borderWidth: 1,
      borderColor:'black',
      justifyContent:"center",
      alignItems:"center",
      textAlign:'center',
    },
    rectangle:{
      width: 200,
      height: 60,
      borderEndWidth: 1,
      backgroundColor: '#F5F5F4',
      borderColor:'#000000',
      borderRadius: 20
    }
})
//creo la funcion de los botones con lo que tengan dentro, arrays con props y funciones
const Buttons = (props) => {
  const estilos = [
    styles.square,
    props.type == 'rectangle' && styles.rectangle,
  ]
    return (
      <TouchableOpacity style={estilos}>
       {props.icon}
        <Text style={{justifyContent:'center', alignContent:'center', textAlign:'center',}}>{props.text}</Text>
      </TouchableOpacity>
    );};export default Buttons;
