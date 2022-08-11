import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import StyledButton from '../Buttons/StyledButton';
import theme from '../../UI/theme';
import {MaterialIcons}  from '@expo/vector-icons';

export default function CourseCard(props) {

    //Esta funcion se ejecuta cuando se presiona el boton de opciones
    //Y ejecuta la funcion que le paso por los props
    const handleOptionsTouch = (e) => {
        props.onOptionsPress(e.target.value);
    }

    return (
    <TouchableOpacity onPress={(e)=>{props.nav.push('Curso', {screen: 'Estudiantes', params: { courseId: props.id, name: props.name }})}}>
        <View key={props.id} style={styles.container}>

            <View style={[styles.horizontalcontainer, {justifyContent: 'space-between'}]}>

                <Text style={styles.title}>{props.name}</Text>
                <StyledButton onPress={handleOptionsTouch} type="nonBackground" icon={<Image style={{marginTop: 5}} source={require('../../../assets/dotsicon.png')}/>}/> 

            </View>

            <View style={[styles.horizontalcontainer, {justifyContent: 'flex-start'}]}>
                
                <StyledButton onPress={()=>{props.nav.push('Asistencia', { array: props.array_alumns })}} text="Tomar asistencia" type="thick"/>
                <Text>   </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: theme.colors.primaryGrey}}>
                    <Text style={{fontSize: 18}}> {props.array_alumns.length} </Text>
                    <MaterialIcons name="people" size={24} color={theme.colors.primaryGrey} />

                </View>

            </View>
        </View>
    </TouchableOpacity>
    )};

const styles  = StyleSheet.create({
    container: {
        flexGrow: 1,
        height: 150,
        backgroundColor: theme.colors.lightGrey,
        paddingHorizontal: 30,
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'column',
        marginTop: 10,
    },
    horizontalcontainer: {
        flexDirection: 'row',
        paddingTop: 5, //para que no se superponga el texto con la imagen
    },
    title: {
        fontSize: theme.fontSizes.subheading,
        marginBottom: 5,
        color: theme.colors.secondaryGrey
    }
})