import react from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import theme from '../UI/theme';

export default function CoursesContainer() {
    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 10,
        backgroundColor: theme.colors.screensBackground,
    }
})