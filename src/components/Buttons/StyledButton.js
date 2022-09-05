import react  from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../UI/theme";

//Estilos de los botones de la app
const styles = StyleSheet.create({
  buttonStandard: {
    width: 125,
    height: 35,
    backgroundColor: theme.colors.primaryGrey,
    borderRadius: 50,
    justifyContent: "center",
  },
  transparentButton: {
    minWidth: 125,
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignContent: "center",
    borderColor: theme.colors.secondaryGrey,
    borderWidth: 1,
  },
  thinButton: {
    width: 80,
    height: 20,
    borderRadius: 50,
    justifyContent: "center",
    backgroundColor: theme.colors.primaryGrey,
  },
  thickButton: {
    width: 100,
    height: 50,
    borderRadius: 50,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primaryGrey,
  },
  squareButton: {
    width: 30,
    height: 30,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: theme.colors.primaryGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redButton: {
    width: 85,
    height: 35,
    backgroundColor: theme.colors.red,
    padding: 10,
    borderRadius: 50,
  },
  nonBackgroundButton: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: theme.colors.white,
  }, 
  attendanceButton: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: 'center',
    borderColor: theme.colors.secondaryGrey,
    borderWidth: 1,
    margin: 5,
  },
  plusButton: {
    height: 30,
    width: 30,
    borderRadius: 7,
    borderColor: 'hsla(0, 0%, 10%, 0.32)',
    borderWidth: 2,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignContent: 'center',
  },
  assistButton: {
    height: 30,
    width: 30,
    borderRadius: 7,
    backgroundColor: theme.colors.blue,
    borderColor: theme.colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  textassistButton: {
    color: theme.colors.white,
    backgroundColor: theme.colors.blue,
    borderColor: theme.colors.lightBlue,
    fontSize: theme.fontSizes.large,
    fontWeight: 'bold',

    width: 175,
    height: 35,
    padding: 5,
    borderRadius: 5,

    justifyContent: 'flex-start',
    gap: 10,
    alignItems: 'center',
  }
});

//El componente styledbutton posee la capacidad de renderizar todos los botones  de la app
//En base a un prop que se le pasa
export default function StyledButton(props) {

  //Creo un array de estilos que contiene 
  //Un estilo dependiendo el prop que se le pase
  const buttonStyles = [
    styles.buttonStandard,
    props.type == "transparent" && styles.transparentButton,
    props.type == "thin" && styles.thinButton,
    props.type == "thick" && styles.thickButton,
    props.type == 'square' && styles.squareButton,
    props.type == 'red' && styles.redButton,
    props.type == 'nonBackground' && styles.nonBackgroundButton,
    props.type == 'attendance' && styles.attendanceButton,
    props.type == 'plus' && styles.plusButton,
    props.type == 'assist' && styles.assistButton,
    props.type == 'back' && styles.backButton,
    props.type == "textassist" && styles.textassistButton,
  ];

  //Si existe el prop icon, renderizo un boton con el icono en 
  //Vez de un texto
  if (props.icon && props.text == null) {
    return (
      <TouchableOpacity style={buttonStyles} onPress={props.onPress}>
        {props.icon}
      </TouchableOpacity>
    )
  } else if (props.text && props.icon == null) {
    return (
      <TouchableOpacity style={buttonStyles} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <TouchableOpacity style={[buttonStyles, {flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}]} onPress={props.onPress}>
      {props.icon}
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

//Crear el styled text
