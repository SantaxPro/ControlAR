import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import theme from "../../UI/theme"
import { Ionicons } from '@expo/vector-icons'; 

export default function ProfileHeader(props) {
  return (
    <View 
    style={{
        paddingHorizontal: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: 'center',
        justifyContent: "flex-start",
        height: 55,
        backgroundColor: theme.colors.white,
        flexDirection: "row",
        gap: 10,

        shadowColor: '#C2C2C2',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 3,
            }}>

        <Ionicons onPress={props.navigation.goBack} name="arrow-back-outline" size={24} color="black" />

        <Text style={{
            fontSize: theme.fontSizes.medium,
            color: theme.colors.black,
            fontWeight: 'bold',

              }}>Mi perfil</Text>
    </View>
  )
}


