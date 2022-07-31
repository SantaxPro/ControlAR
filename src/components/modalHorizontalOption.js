import { View , Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../UI/theme";

//Este componente sirve para renderizar los botones en el modal

export default function ModalHorizontalOption(props) {
    return(
        <TouchableOpacity style={styles.Xcontainer} onPress={props.onPress}>
            {props.icon}
            <Text>     </Text>
            <Text style={styles.optionText}>{props.action}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    optionText: {
        fontSize: 20,
        fontWeight: theme.fontWeight.medium,
        color: theme.colors.primaryGrey,
      },
      Xcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
      }
})