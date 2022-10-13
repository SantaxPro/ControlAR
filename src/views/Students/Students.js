import React from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  Modal,
  TextInput,
  Switch,
  Pressable,
} from "react-native";
import { collection, where, query, onSnapshot } from "firebase/firestore";
import { db } from "../../database/firebase";
import { useAuth } from "../../context/authContext";
import useOperations, { useCourses } from "../../context/operationsContext";
import SelectDropdown from "react-native-select-dropdown";
function Students() {
  const [students, setStudents] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);

  const { user } = useAuth();

  React.useEffect(() => {
    if (user) {
      const unsub = onSnapshot(
        query(collection(db, "students"), where("uid", "==", user.uid)),
        (querySnapshot) => {
          const students = [];
          querySnapshot.forEach((doc) => {
            students.push({ ...doc.data(), id: doc.id });
          });
          setStudents(students);
        }
      );
      return () => {
        unsub();
      };
    }
  }, [user]);

  const handlePress = () => {
    setModalVisible(true);
  };

  return (
    <>
      <AddStudentModal
        visible={modalVisible}
        setVisible={() => {
          setModalVisible(!modalVisible);
        }}
      />
      <View>
        <Text>Students</Text>
        <Button title="añadir alumno" onPress={handlePress} />
        <FlatList
          data={students}
          renderItem={({ item }) => (
            <Text>
              {item.name}
              {item.lastname}
            </Text>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}

const AddStudentModal = ({ visible, setVisible }) => {
  //STATES
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [selectedCourse, setSelectedCourse] = React.useState({
    id: "",
    name: "",
  });

  //CUSTOM HOOKS
  const { user } = useAuth();
  const { courses } = useCourses();
  const { createStudent } = useOperations();

  const handlePress = () => {
    createStudent(user.uid, name, lastName, selectedCourse);
    setVisible();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View>
        <Text>Nombre</Text>
        <TextInput value={name} onChangeText={(text) => setName(text)} />
        <Text>Apellido</Text>
        <TextInput
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />

        <Text>Seleccione curso</Text>
        <SelectDropdown
        data={courses}
        onSelect={(selectedItem, index) => {
          let course_view = {
            name: selectedItem.name,
            id: selectedItem.id,
          }
          setSelectedCourse(course_view)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem.name;
        }}
        rowTextForSelection={(item, index) => {
          return item.name;
        }}
        
        defaultButtonText="Cursos"
      />
        <Button title="añadir" onPress={handlePress} />
        <Button
          title="ver"
          onPress={() => {
            console.log(selectedCourse);
          }}
        />
        <Button title="cancelar" onPress={setVisible} />
      </View>
    </Modal>
  );
};

export default Students;
