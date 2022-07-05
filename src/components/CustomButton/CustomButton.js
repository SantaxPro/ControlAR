import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
const CustomButton=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>B</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:'3B71F3',
        width:'100%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5,
    },
    text:{
        fontWeight:'bold',
        color:'white',
    }
})
export default CustomButton;