import {View, Text, Alert, TouchableOpacity, StyleSheet} from "react-native";
import theme from "../../UI/theme";
import StyledButton from "../Buttons/StyledButton";
import {MaterialIcons} from '@expo/vector-icons';

//Componente studentcard en su variante 1, 
//Se utiliza para mostrar los estudiantes en la vista de curso 
export default function StudentCardVariant1(props) {

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
});
