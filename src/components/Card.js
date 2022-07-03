import { useState } from "react";
import {View, Text, StyleSheet, Alert, TouchableOpacity, Image, Button} from "react-native";
import  newAttendanceEntry  from "../globals/global";
import theme from '../UI/theme';
import StyledButton from './StyledButton';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function CourseCard(props) {

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


export function StudentCard(props) {
    const [isVariant2, setVariant2] = useState(false);

    if (props.variant == 2) {
        return <StudentCardVariant2 {...props}/>
    } else if(props.variant == 1) {
        return <StudentCardVariant1 {...props}/>
    }

    return null}

function StudentCardVariant1(props) {

    const EditStudent = () => {
        Alert.alert('Editar estudiante')
    }
    const handleDelete  = () => {
        props.handleDelete(props.student_id)
    }

    return(
        <View style={styles.containerV1}>
            <Text style={styles.text}>{ props.student_name + " " +  props.student_lastname}</Text>
            <View style={{flexDirection: 'row'}}>
                <StyledButton onPress={handleDelete} type="red" text="Eliminar" />
                <TouchableOpacity onPress={()=>{console.log('editar')}} style={{marginLeft: 15}}>
                    <MaterialIcons name="edit" size={24} color={theme.colors.primaryGrey} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

function StudentCardVariant2(props) {
    
    const getDate = () => {
        var today = new Date();
        let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        console.log("date geted")
        return date
    }

    const handleNewEntry = (id, name, lastname, state) => {
        var new_assist_entry = {
            student_fullname: name + " " + lastname,
            student_id: id,
            student_attendance_state: state,
            student_attendance_date: getDate(),
        }
        newAttendanceEntry(new_assist_entry);
    }

    return(
        <View key={props.student_id}>
                <Text>Nombre alumno: {props.student_name}</Text>
                <Text>Apellido alumno: {props.student_lastname}</Text>
                <Button title="Asistió" onPress={()=>{handleNewEntry(props.student_id, props.student_name, props.student_lastname, "presente")}}/>
                <Button title="No Asistió" onPress={()=>{handleNewEntry(props.student_id, props.student_name, props.student_lastname, "ausente")}}/>
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