import react  from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../UI/theme";

const styles = StyleSheet.create({
  buttonStandard: {
    width: 125,
    height: 35,
    backgroundColor: theme.colors.primaryGrey,
    borderRadius: 50,
    justifyContent: "center",
  },
  transparentButton: {
    width: 125,
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
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
    fontSize: theme.fontSizes.buttonTextSize
  }
});

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
