import {View , Text, StyleSheet, StatusBar, FlatList} from 'react-native'
import theme from '../UI/theme'

export default function StudentCard(props){
    return(
        <View style={styles.container}>
            <Text>{ props.student_name + " " +  props.student_lastname}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 10,
        backgroundColor: theme.colors.lightGrey,
        flexDirection: "row",
    }
})