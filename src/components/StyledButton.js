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
    height: 30,
    borderRadius: 50,
    padding: 8,
    justifyContent: "center",
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
  }
});

export default function StyledButton(props) {

  const buttonStyles = [
    styles.buttonStandard,
    props.type == "transparent" && styles.transparentButton,
    props.type == "thin" && styles.thinButton,
    props.type == "thick" && styles.thickButton,
    props.type == 'square' && styles.squareButton,
    props.type == 'red' && styles.redButton,
  ];

  if (props.icon) {
    return (
      <TouchableOpacity style={buttonStyles} onPress={props.onPress}>
        {props.icon}
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity onPress={props.onPress} style={[buttonStyles, { alignItems: "center" }]}>
      <Text style={{ color: theme.colors.white, fontSize: theme.fontSizes.buttonTextSize }}>{props.text}</Text>
    </TouchableOpacity>
  );
}

//Crear el styled text
