import react from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';


export default function ConfigurationButton({navigation}) {
    return(
        <TouchableOpacity onPress={()=>{console.log("pres")}}>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buton: {
        width: 30,
        height: 30,
        backgroundColor: '#000',
    }
})