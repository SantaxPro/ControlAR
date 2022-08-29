import { View, Text, StyleSheet, Image } from "react-native";
import StyledButton from "../components/Buttons/StyledButton";
import theme from "../UI/theme";

//Pantala de configuracion
export default function ProfileScreen({navigation}) {
    return(
        <View >
            <Text>
                Mi perfil
            </Text>

            <StyledButton type="thick" text="Cerrar sesion" />
        </View>
    )
}