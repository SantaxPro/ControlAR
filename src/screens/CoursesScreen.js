import react , { useState }from "react";
import { View, Text, StyleSheet, FlatList, Modal, Button, TouchableOpacity, Alert } from "react-native";
import theme from "../UI/theme";
import { courses } from "../data/testdata";
import CourseCard from "../components/CourseCard";
import { MaterialIcons } from '@expo/vector-icons'; 
import ModalHorizontalOption from "../components/modalHorizontalOption";
import StyledButton from "../components/StyledButton";


export default function CoursesScreen({ navigation, route }) {

  const [modalVisible, setModalVisible] = useState(false);

  const handleTouch = () => {
    setModalVisible(true);
  }

  const editCourse = () => {
    Alert.alert("Editar curso");
  }

  const deleteCourse = () => {
    Alert.alert("Eliminar curso")
  }

  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={courses}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => <CourseCard {...item} nav={navigation} onOptionsPress={handleTouch}/>}
        />
      </View>
      
      
      <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      >
        <View style={styles.modal}>

          <View style={styles.titleContainer}>
            <Text style={{fontSize: theme.fontSizes.titleTextSize, fontWeight: theme.fontWeight.medium}}>Mas opciones.</Text>
            <StyledButton type="square" onPress={() => {console.log("working")}} icon={<Text>Hola</Text>} />
          </View>

          <View style={styles.optionContainer}>
              <ModalHorizontalOption action="Editar curso" icon={<MaterialIcons name={"edit"} size={30} color={theme.colors.primaryGrey} />} onPress={editCourse}/>
              <Text>     </Text>
              <ModalHorizontalOption action="Eliminar curso" icon={<MaterialIcons name={"delete"} size={30} color={theme.colors.primaryGrey} />} onPress={deleteCourse}/>
          </View>

        </View>
        
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingHorizontal: 3,
      backgroundColor: theme.colors.screensBackground,
    },
    list: {
      flexGrow: 1,
      flexDirection: "column",
    },
    separator: {
      height: 10,
    },
    modal: {
      height: 300,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      elevation: 3,
      backgroundColor: theme.colors.screensBackground,
      flexDirection: "column",
      padding: 20,
    },
    titleContainer: {
      justifyContent: 'space-between',
       alignItems: 'center',
        borderBottomColor: theme.colors.primaryGrey,
         borderBottomWidth: 1,
          paddingVertical: 5,
      flexDirection: 'row',
    },
    optionContainer: {
      flexDirection: "column",
      alignItems: 'flex-start',
      padding: 10,
    },

  });

  