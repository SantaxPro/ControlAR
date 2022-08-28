import { useNavigation } from "@react-navigation/native";
import react from "react";
import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
import { FacebookLoginAPIButton, GoogleLoginAPIButton } from "../components/Buttons/LoginAPIButton";
import Context from "../components/context";
import theme from "../UI/theme";


//Pantalla de login
export default function LoginScreen(props) {
    const context = react.useContext(Context)
    const navigation = useNavigation()
    const handlePress = () => {
        context.setIsLoggedIn(true);
        console.log(context.isLoggedIn);
        // navigation.navigate("Mis cursos")
    }
    return(
                    <View style={styles.mainContainer}>
                        <View style={styles.loginContainer} >
                        <Text style={{fontSize: 40, alignSelf: 'flex-start', marginBottom: 30, color: theme.colors.primaryGrey}}>
                            ¡Bienvenido!
                        </Text>
                            <Text style={{fontSize: theme.fontSizes.titleTextSize, fontWeight: theme.fontWeight.medium}}>Inicia sesion mediante una plataforma</Text>
                            <GoogleLoginAPIButton onPress={handlePress} />
                            <FacebookLoginAPIButton onPress={handlePress}/>
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