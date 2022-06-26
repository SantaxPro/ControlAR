import react from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../UI/theme";
import StyledButton, {ThickButton} from "./StyledButton";

export default function CourseCard(props) {
    return (
        <View key={props.id} style={styles.container}>
            <Text>{props.name}</Text>
            <StyledButton text="Ver" type="thick" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        height: 75,
        backgroundColor: theme.colors.lightGrey,
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.colors.secondaryGrey,
    }
})