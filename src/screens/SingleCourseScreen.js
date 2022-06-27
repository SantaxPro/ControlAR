import react from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import data from '../data/testdata'

export default function SingleCourseScreen({route,  navigation }) {
    const { courseId } = route.params;

    return (
        <View style={styles.container}>
            <Text>
                
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    }
})