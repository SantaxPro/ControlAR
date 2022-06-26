import react from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'

export default function SingleCourseScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Curso pantalla</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    }
})