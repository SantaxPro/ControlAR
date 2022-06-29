import react from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import theme from "../UI/theme";
import StyledButton from "./StyledButton";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function CourseCard(props) {

    const handleOptionsTouch = (e) => {
        props.onOptionsPress(e.target.value);
    }

    return (
    <TouchableOpacity onPress={(e)=>{props.nav.push('Curso', {screen: 'Estudiantes', params: { courseId: props.id, name: props.name }})}}>
        <View key={props.id} style={styles.container}>

            <View style={[styles.horizontalcontainer, {justifyContent: 'space-between'}]}>

                <Text style={styles.title}>{props.name}</Text>
                
                <TouchableOpacity onPress={handleOptionsTouch}>
                    <Image style={{marginTop: 5}} source={require('../../assets/dotsicon.png')}/>
                </TouchableOpacity>

            </View>

            <View style={[styles.horizontalcontainer, {justifyContent: 'flex-start'}]}>

                <StyledButton onPress={()=>{props.nav.push('Asistencia', { array: props.array_alumns })}} text="Tomar asistencia" type="thick" id={props.id} />
                <Text>   </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: theme.colors.primaryGrey}}>
                    <Text style={{fontSize: 18}}> {props.array_alumns.length} </Text>
                    <MaterialIcons name="people" size={24} color={theme.colors.primaryGrey} />
                </View>

            </View>
        </View>
    </TouchableOpacity>
    );
}

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