import react from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import theme from "../UI/theme";
import StyledButton, {ThickButton} from "./StyledButton";

export default function CourseCard(props) {
    return (
        <View key={props.id} style={styles.container}>
            <View style={styles.horizontalcontainer}>
                <Text style={styles.title}>{props.name}</Text>
                <Image style={{marginTop: 5}} source={require('../../assets/dotsicon.png')}/>
            </View>
            <StyledButton text="Tomar asistencia" type="thick" id={props.id} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        height: 95,
        backgroundColor: theme.colors.lightGrey,
        paddingHorizontal: 30,

        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        borderColor: theme.colors.secondaryGrey,
        flexDirection: 'column',
    },
    horizontalcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5, //para que no se superponga el texto con la imagen
    },
    title: {
        fontSize: theme.fontSizes.subheading,
        marginBottom: 5,
        color: theme.colors.secondaryGrey
    }
})