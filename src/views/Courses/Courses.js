import React from "react";
import { View, Text, Button, Modal, FlatList, TextInput, Switch } from "react-native";
import { useAuth } from "../../context/authContext";
import useOperations, { useCourses } from "../../context/operationsContext";
import { auth, db } from "../../database/firebase";
import { query, collection, where, onSnapshot} from "firebase/firestore";
import { signOut } from "firebase/auth";

function Courses() {
  const { user } = useAuth();
  const { createCourse, getCourses } = useOperations();
  const {courses} = useCourses();

  const [modalVisible, setModalVisible] = React.useState(false);

  // React.useEffect(() => {
  //   if (user) {
  //     const unsub = onSnapshot(
  //       query(collection(db, "courses"), where("uid", "==", user.uid)),
  //       (querySnapshot) => {
  //         const courses = [];
  //         querySnapshot.forEach((doc) => {
  //           courses.push({ ...doc.data(), id: doc.id });
  //         });
  //         setCourses(courses);
  //       }
  //     );
  //     return () => {
  //       unsub();
  //     };

  //   }
  // }, [user]);


  const logOut = async () => {
    await signOut(auth);
  };

  const handlePress = () => {
    setModalVisible(true);
  };
  return (
    <>
      <AddCourseModal
        visible={modalVisible}
        setVisible={() => {
          setModalVisible(!modalVisible);
        }}
      />
      <View>
        <Text>Cursos</Text>
        <Button title="Crear curso" onPress={handlePress} />
        <Button
          title="SSS"
          onPress={() => {
            console.log(courses);
          }}
        />
        <FlatList
          data={courses}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item.id}
        />
        <Button title="sign out" onPress={logOut} />
      </View>
    </>
  );
}

const AddCourseModal = ({ visible, setVisible }) => {
  const { user } = useAuth();
  const { createCourse } = useOperations();
  const [name, setName] = React.useState("");
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleAdd = () => {
    createCourse(user.uid, name, [], [], isFavorite);
    setVisible();
  };
  const handleCancel = () => {
    setVisible();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View>
        <Text>ADD A COURSE {name}</Text>
        <Button title="Add" onPress={handleAdd} />
        <Button title="Cancel" onPress={handleCancel} />
        <TextInput value={name} onChangeText={setName} />
        <Switch value={isFavorite} onValueChange={()=>{setIsFavorite(prev => !prev)}} />
      </View>
    </Modal>
  );
};
export default Courses;
