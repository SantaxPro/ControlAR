import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 


//Este componente exporta el boton de login con la API de Google
export default function GoogleLoginAPIButton(props) {
    
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.googleContainer}>
            <AntDesign name="google" size={24} color="white" />
        </TouchableOpacity>
    )
}

export function FacebookLoginAPIButton(props) {
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.facebookContainer}>
            <Entypo name="facebook" size={24} color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    googleContainer: {
        backgroundColor: '#ed331f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        padding: 10,
        margin: 10,
        width: 300,
    },
    facebookContainer: {
        backgroundColor: '#2f4ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        padding: 10,
        margin: 10,
        width: 300,
    }
})