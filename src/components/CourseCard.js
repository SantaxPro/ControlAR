import react from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";
import theme from "../UI/theme";
import StyledButton from "./StyledButton";

export default function CourseCard(props) {

    return (
        <View key={props.id} style={styles.container}>

            <View style={[styles.horizontalcontainer, {justifyContent: 'space-between'}]}>

                <Text style={styles.title}>{props.name}</Text>
                
                <TouchableHighlight style={{overflow: 'visible'}}>
                    <Image style={{marginTop: 5}} source={require('../../assets/dotsicon.png')}/>
                </TouchableHighlight>

            </View>

            <View style={[styles.horizontalcontainer, {justifyContent: 'flex-start'}]}>

                <StyledButton onPress={()=>{console.log("gola")}} text="Tomar asistencia" type="thick" id={props.id} />
                <Text>   </Text>
                <StyledButton  onPress={(e)=>{props.nav.push('Curso', {screen: 'Estudiantes', params: { courseId: props.id }})}} type="square"/>

            </View>

        </View>
    );
}

/*function FloatingCard( ) {
    const [pressed, setPressed] = useState(false);

    return(
        <View style={styles.floatingCard}>
            <Text>HOLIWIS</Text>
        </View>
    )
}*/


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        height: 95,
        backgroundColor: theme.colors.lightGrey,
        paddingHorizontal: 30,
        justifyContent: 'center',
        elevation: 3,
        borderRadius: 10,
        flexDirection: 'column',
    },
    horizontalcontainer: {
        flexDirection: 'row',
        paddingTop: 5, //para que no se superponga el texto con la imagen
    },
    title: {
        fontSize: theme.fontSizes.subheading,
        marginBottom: 5,
        color: theme.colors.secondaryGrey
    },
    floatingCard: {
        width: 500,
        height: 600,
        backgroundColor: '#fff',
    }
})