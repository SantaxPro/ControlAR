import { useState } from "react";
import {View, Text, StyleSheet, Alert, TouchableOpacity, Image, Button} from "react-native";
import  newAttendanceEntry  from "../globals/global";
import theme from '../UI/theme';
import StyledButton from './StyledButton';
import StudentCardVariant2 from "./StudentCardVariant2";
import { MaterialIcons } from '@expo/vector-icons'; 

//Componente CourseCard que se exporta por defecto, realiza la funcion de 
//Mostrar los cursos en la pantalla de cursos
export default function CourseCard(props) {

    //Esta funcion se ejecuta cuando se presiona el boton de opciones
    //Y ejecuta la funcion que le paso por los props
    const handleOptionsTouch = (e) => {
        props.onOptionsPress(e.target.value);
    }

    return (
    <TouchableOpacity onPress={(e)=>{props.nav.push('Curso', {screen: 'Estudiantes', params: { courseId: props.id, name: props.name }})}}>
        <View key={props.id} style={styles.container}>

            <View style={[styles.horizontalcontainer, {justifyContent: 'space-between'}]}>

                <Text style={styles.title}>{props.name}</Text>
                <StyledButton onPress={handleOptionsTouch} type="nonBackground" icon={<Image style={{marginTop: 5}} source={require('../../assets/dotsicon.png')}/>}/> 

            </View>

            <View style={[styles.horizontalcontainer, {justifyContent: 'flex-start'}]}>
                
                <StyledButton onPress={()=>{props.nav.push('Asistencia', { array: props.array_alumns })}} text="Tomar asistencia" type="thick"/>
                <Text>   </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: theme.colors.primaryGrey}}>
                    <Text style={{fontSize: 18}}> {props.array_alumns.length} </Text>
                    <MaterialIcons name="people" size={24} color={theme.colors.primaryGrey} />

                </View>

            </View>
        </View>
    </TouchableOpacity>
    )};


//Este es el otro componente que exporta Card, 
//Sirve para mostrar a los estudiantes en dos pantallas distintas
//Para lograr eso utilizo un prop que define que componente va a retornar 
//la funcion
export function StudentCard(props) {
    if (props.variant == 2) {
        //Si el prop que la pasan es 2, devuelve la variante 2
        return <StudentCardVariant2 {...props}/>
    } else if(props.variant == 1) {
        //Si es 1, devuelvo la variante 1
        return <StudentCardVariant1 {...props}/>
    }
    //En caso de que no se especifique, ningun componente sera devuelto.
    return null}

//Componente studentcard en su variante 1, 
//Se utiliza para mostrar los estudiantes en la vista de curso 

function StudentCardVariant1(props) {

    //Al presionar el boton de editar, se ejecuta esta funcion.
    const EditStudent = () => {
        Alert.alert('Editar estudiante')
    }
    //Lo mismo pero cuando se presiona el boton de eliminar
    const handleDelete  = () => {
        props.handleDelete(props.student_id)
    }

    return(
        <View style={styles.containerV1}>
            <Text style={styles.text}>{ props.student_name + " " +  props.student_lastname}</Text>
            <View style={{flexDirection: 'row'}}>
                <StyledButton onPress={handleDelete} type="red" text="Eliminar" />
                <TouchableOpacity onPress={()=>{EditStudent}} style={{marginLeft: 15}}>
                    <MaterialIcons name="edit" size={24} color={theme.colors.primaryGrey} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    containerV1: {
        flexGrow: 1,
        padding: 10,
        backgroundColor: theme.colors.lightGrey,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 15,
        borderWidth: 1,
    },
    text: {
        fontSize: theme.fontSizes.titleTextSize,
        fontWeight: theme.fontWeight.bold,
        color: theme.colors.primaryGrey,
    },
    container: {
        flexGrow: 1,
        height: 150,
        backgroundColor: theme.colors.lightGrey,
        paddingHorizontal: 30,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'column',
        marginTop: 10,
    },
    horizontalcontainer: {
        flexDirection: 'row',
        paddingTop: 5, //para que no se superponga el texto con la imagen
    },
    title: {
        fontSize: theme.fontSizes.subheading,
        marginBottom: 5,
        color: theme.colors.secondaryGrey
    }
});