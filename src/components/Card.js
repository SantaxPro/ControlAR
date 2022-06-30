import {View, Text, StyleSheet, FlatList, Button} from "react-native";

export default function DefaultCard(props) {
    return(
        <View style={styles.defaultCard}>
            <Text style={styles.text}>Esto es una default card</Text>
        </View>
    )   
}


export function StudentCard(props) {
    return (
        <View style={styles.studentCard}>
            <Text style={styles.text}>Esto es una student card variante 1</Text>
            {isVariant2 ? <Text style={styles.text}>Esto es una student card variante 2</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    defaultCard: {
        
    },
    studentCard: {

    },
    text: {
        color: 'black',
    }
})