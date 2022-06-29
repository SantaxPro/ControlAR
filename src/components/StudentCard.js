import {View , Text, StyleSheet, Alert, TouchableOpacity, Image} from 'react-native'
import theme from '../UI/theme'
import StyledButton from './StyledButton'
import { MaterialIcons } from '@expo/vector-icons'; 


export default function StudentCard(props){
    const EditStudent = () => {
        Alert.alert('Editar estudiante')
    }
    const handleDelete  = () => {
        props.handleDelete(props.student_id)
    }
    return(
        <View style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 10,
        backgroundColor: theme.colors.lightGrey,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        elevation: 2,
    },
    text: {
        fontSize: theme.fontSizes.titleTextSize,
        fontWeight: theme.fontWeight.bold,
        color: theme.colors.primaryGrey,
    }
})