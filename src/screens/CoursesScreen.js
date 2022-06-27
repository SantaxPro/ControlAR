import react , { useState }from "react";
import { View, Text, StyleSheet, FlatList, Modal, Button } from "react-native";
import theme from "../UI/theme";
import { courses } from "../data/testdata";
import CourseCard from "../components/CourseCard";
import StyledButton from "../components/StyledButton";

export default function CoursesScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const handleTouch = () => {
    setModalVisible(true);
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
          <Text>Modal</Text>
          
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
      justifyContent: "center",
      alignItems: "center",
      position: 'absolute',
      bottom: 0,
      left: 0,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      elevation: 3,
      backgroundColor: theme.colors.screensBackground,
    }
  });
  