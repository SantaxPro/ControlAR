import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import theme from '../UI/theme'
import StyledButton from './Buttons/StyledButton'
import { AntDesign } from '@expo/vector-icons'; 
export default function CourseHeader(props) {
  return (
    <View style={styles.container}>

        <View style={styles.vertical}>
            <StyledButton onPress={()=>{props.navigation.goBack()}} type="back" icon={<AntDesign name="left" size={25} color="black" />} />
        </View>

        <View style={[styles.vertical, {flexDirection: "column", flex: 1, gap: 25}]}>
            <View style={styles.horizontal}>
                <Text style={styles.title}>{props.route.params.params.name}</Text>
                <Text style={styles.subtitle}>Turno {props.route.params.params.turno}</Text>
                <Text style={styles.subtitle}>{props.route.params.params.students} estudiantes</Text>
            </View>

            <View style={[styles.horizontal, {flexDirection: 'column'}]}>
                <StyledButton 
                text="Tomar asistencia"
                onPress={()=>{props.navigation.push('Asistencia', 
                { array: props.route.params.params.students_array })}}
                 type="textassist" 
                 icon={<AntDesign name="book" size={18} color={theme.colors.white} 
                 />} 
                />
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: theme.colors.white,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,
        gap: 5,
        
        shadowColor: '#C2C2C2',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 3,
        flexDirection: 'row'
    },
    horizontal: {
        flex: 1,
        flexDirection: 'column',
    },
    vertical: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    subtitle: {
        fontSize: theme.fontSizes.small,
        color: 'hsla(0, 0%, 17%, 0.51)'
    }
})