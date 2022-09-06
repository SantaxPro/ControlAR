import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, Pressable} from 'react-native'
import theme from '../../UI/theme'
import StyledButton from '../Buttons/StyledButton'
import { HeaderContext } from '../context'


import { AntDesign } from '@expo/vector-icons'; 

export default function Header(props) {
    console.log(props.user)
    const openProfile = () => {
        props.navigation.navigate("Perfil")
    }
  return (
        <View style={styles.container}>
            <View style={styles.horizontal}>
                <Pressable onPress={openProfile}>
                    <Image style={styles.profile} source={props.user.picture} />
                </Pressable>
                <Text style={styles.title}>Mis cursos</Text>
            </View>
            <View style={styles.horizontal}>
                <StyledButton type="plus" icon={<AntDesign name="plus" size={25} color="black" />} />
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
        padding: 35,
        gap: 20,
        
        shadowColor: '#C2C2C2',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 3,
    },
    profile: {
        borderRadius: 50,
        backgroundColor: 'black',
        width: 40,
        height: 40,
    },
    title: {
        fontSize: theme.fontSizes.large,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
    },
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
    },

})
