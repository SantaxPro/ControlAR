import react, { useState } from "react";
import {View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../UI/theme';

const styles = StyleSheet.create({
    buttonStandard: {
        width: 125,
        height: 35, 
        backgroundColor: theme.colors.primaryGrey,
        borderRadius: 50,
        justifyContent: 'center',
    }, 
    transparentButton: {
        width: 125,
        height: 35, 
        borderRadius: 50,
        justifyContent: 'center',
        borderColor: theme.colors.secondaryGrey,
        borderWidth: 1,
    },
    thinButton: {
        width: 80,
        height: 20, 
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: theme.colors.primaryGrey,
    },
    thickButton: {
        width: 80,
        height: 30, 
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: theme.colors.primaryGrey,
    },
});

export default function StyledButton(props) {

    const buttonStyles = [
        styles.buttonStandard,
        props.type == 'transparent' && styles.transparentButton,
        props.type == 'thin' && styles.thinButton,
        props.type == 'thick' && styles.thickButton,
    ]
    
    return (

        <TouchableOpacity style={[buttonStyles, {alignItems: 'center'}]} >
            <Text style={{color: theme.colors.white}}>{props.text}</Text>
        </TouchableOpacity>    

        );
}

//Crear el styled text
