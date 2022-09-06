import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import StyledButton from "../components/Buttons/StyledButton";
import theme from "../UI/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

//Pantala de configuracion
export default function ProfileScreen(props) {
  console.log(props);
  const logOut = () => {
    props.route.params.logout();
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.horizontal}>
          <Image
            style={styles.profile}
            source={props.route.params.user.picture}
          />
          <Text style={styles.title}>{props.route.params.user.given_name}</Text>
        </View>

        <View style={styles.horizontal}>
          <Text style={styles.subtitle}>{props.route.params.user.email}</Text>
        </View>

        <View style={styles.horizontal}>
          {props.route.params.user.email_verified ? (
            <>
              <MaterialIcons
                name="verified"
                size={24}
                color={theme.colors.blue}
              />
              <Text style={styles.subtitle}>Verificado</Text>
            </>
          ) : (
            <>
              <Octicons name="unverified" size={24} color="#EE6161" />
              <Text style={[styles.subtitle, { color: "#EE6161" }]}>
                No verificado
              </Text>
            </>
          )}
        </View>

        <View style={styles.horizontal}>
          <Pressable onPress={logOut} style={styles.horizontal}>
            <MaterialIcons name="logout" size={24} color="#EE6161" />
            <Text style={[styles.subtitle, { color: "#EE6161" }]}>
              Cerrar sesión
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 255,
    width: "92%",
    backgroundColor: theme.colors.screensBackground,
    borderRadius: 25,
    paddingVertical: 35,
    paddingHorizontal: 30,
    gap: 15,
    borderWidth: 1,
    borderColor: "hsla(0, 0%, 100%, 0.47)",

    shadowColor: "#FFFFFF",
    shadowOffset: { width: -8, height: -8 },
    shadowOpacity: 0.8,
    shadowRadius: 24,
  },
  profile: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: theme.colors.blue,
    width: 60,
    height: 60,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.screensBackground,
  },
  horizontal: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: theme.fontSizes.medium,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: theme.fontSizes.small,
    fontWeight: "bold",
    color: "hsla(0, 0%, 22%, 0.76)",
  },
});
