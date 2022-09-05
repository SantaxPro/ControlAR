import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import StyledButton from '../Buttons/StyledButton';
import theme from '../../UI/theme';
import { Entypo } from '@expo/vector-icons'; 

export default function CourseCard(props) {
    const navigateToCourse = () => {
        props.nav.push('Curso', 
        {screen: 'Estudiantes',
         params: { 
            courseId: props.id,
            name: props.name,
            turno: props.turno,
            students: props.array_alumns.length,
            students_array: props.array_alumns,
        }});
    }
    return (
    <TouchableOpacity onPress={navigateToCourse}>
        <View key={props.id} style={styles.container}>
                <StyledButton 
                onPress={()=>{props.nav.push('Asistencia', { array: props.array_alumns })}} 
                type="assist"
                icon={<Entypo name="book" size={18} color={theme.colors.white} />}
                />
                <View style={styles.horizontal}>
                    <Text style={styles.title}>{props.name}</Text>
                    <Text style={styles.subtitle}>{props.turno}</Text>
                </View>
        </View>
    </TouchableOpacity>
    )};

const styles  = StyleSheet.create({
    container: {
        width: 300,
        height: 55,
        backgroundColor: theme.colors.white,
        paddingHorizontal: 30,

        justifyContent: 'flex-start',
        borderRadius: 11,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,

        shadowColor: '#C2C2C2',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 10,
    },
    title: {
        fontSize: theme.fontSizes.medium,
        color: theme.colors.black
    },
     subtitle: {
        fontSize: theme.fontSizes.small,
        color: 'hsla(0, 0%, 17%, 0.51)'
     },

})