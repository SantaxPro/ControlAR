import { View , Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../UI/theme";
import {MaterialIcons} from '@expo/vector-icons';

export default function ModalHorizontalOption(props) {
    return(
        <TouchableOpacity style={styles.Xcontainer}>
            <MaterialIcons name={props.iconName} size={30} color={theme.colors.primaryGrey} />
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