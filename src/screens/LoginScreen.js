import react from "react";
import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
import GoogleLoginAPIButton from "../components/LoginAPIButton";
import { FacebookLoginAPIButton } from "../components/LoginAPIButton";
import theme from "../UI/theme";

//Pantalla de login
export default function LoginScreen({navigation}) {
    return(
        <View style={styles.mainContainer}>
            <View style={styles.loginContainer} >
            <Text style={{fontSize: 40, alignSelf: 'flex-start', marginBottom: 30, color: theme.colors.primaryGrey}}>
                ¡Bienvenido!
            </Text>
                <Text style={{fontSize: theme.fontSizes.titleTextSize, fontWeight: theme.fontWeight.medium}}>Inicia sesion mediante una plataforma</Text>
                <GoogleLoginAPIButton />
                <FacebookLoginAPIButton />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 60,
    },
    loginContainer: {
        flex: 1,
        flexDirection: "column",
        margin: 35,
        alignItems: "flex-start",
        justifyContent: "center"
    }

})