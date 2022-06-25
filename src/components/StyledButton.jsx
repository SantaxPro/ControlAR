import {View, Button, Text, StyleSheet } from 'react-native';
import theme from '../UI/theme';

const styles = StyleSheet.create({
    buttonStandard: {
        width: 125,
        height: 35, 
        backgroundColor: theme.colors.primaryGrey,
        borderRadius: 50,
        justifyContent: 'center',
        color: theme.colors.white,
    }, 
    transparentButton: {
        width: 125,
        height: 35, 
        borderRadius: 50,
        color: theme.colors.secondaryGrey,
        justifyContent: 'center',
        borderColor: theme.colors.secondaryGrey,
        borderWidth: 1,
    },
    thinButton: {
        width: 50,
        height: 15, 
        borderRadius: 50,
        color: theme.colors.white,
        justifyContent: 'center',
        backgroundColor: theme.colors.primaryGrey,
    },
    thickButton: {
        width: 80,
        height: 30, 
        borderRadius: 50,
        color: theme.colors.white,
        justifyContent: 'center',
        backgroundColor: theme.colors.primaryGrey,
    },
});

export default function StyledButton(standard, text, transparent, thin, thick, type) {
    const buttonStyles = [
        styles.buttonStandard,
        type == 'transparent' && styles.transparentButton,
        type == 'thin' && styles.thinButton,
        type == 'thick' && styles.thickButton,
    ]
    return (
        <Button style={buttonStyles}>
            <Text>{text}</Text> 
        </Button>
        );
}

//Crear el styled text
