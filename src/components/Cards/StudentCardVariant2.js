import {View, Text, Button, StyleSheet, Alert} from 'react-native'
import StyledButton from "../Buttons/StyledButton";

//Variante 2, se utiliza para mostrar a los estudiantes pero en la vista de asistencia
export default function StudentCardVariant2(props) {
    
    //funcion que devuelve la fecha, utilizado para enviar la nueva entry de asistencia
    const getDate = () => {
        var today = new Date();
        let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        return date
    }

    //Cuando se define el estado del alumno, se ejecuta esta funcion
    //Que arma el objeto que sera enviado a la bd
    const handleNewEntry = (id, name, lastname, state) => {
        Alert.alert("Envio de asistencia a la base de datos.")
        props.handleNewEntry(id)
        //props.handleNewEntry(props.student_id);

        /*var new_assist_entry = {
            student_fullname: name + " " + lastname,
            student_id: id,
            student_attendance_state: state,
            student_attendance_date: getDate(),
        }
        //Funcion importada desde globals
        newAttendanceEntry(new_assist_entry);
        */
    }

    return(
        <View style={styles.container} key={props.item.student_id}>
                <View style={{flexDirection: 'column',}}>
                    <Text>Nombre alumno: {props.item.student_name}</Text>
                    <Text>Apellido alumno: {props.item.student_lastname}</Text>
                </View>
                <View style={{flexDirection: 'row', flexGrow: 1}}>
                    <StyledButton text="Asistió" type="attendance" onPress={()=>{handleNewEntry(props.item.student_id, props.item.student_name, props.item.student_lastname, "presente")}}/>
                    <StyledButton text="No Asistió" type="attendance" onPress={()=>{handleNewEntry(props.item.student_id, props.item.student_name, props.item.student_lastname, "ausente")}}/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 150,
        flexGrow: 1,
        padding: 10,
        marginVertical: 10,
    }
})


