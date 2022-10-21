import React from "react";
import {
  View,
  Text,
  Button,
  Modal,
  FlatList,
  TextInput,
  Switch,
} from "react-native";
import { useAuth } from "../../context/authContext";
import useCourses from "../../hooks/useCourses";
import useOperations from "../../context/operationsContext";
import { auth, db } from "../../database/firebase";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { signOut } from "firebase/auth";
import CourseCard from "../../components/CourseCard/CourseCard";

function Courses() {
  const { user } = useAuth();
  const { createCourse, getCourses } = useOperations();
  const { courses } = useCourses(user);
  const [modalVisible, setModalVisible] = React.useState(false);
  const logOut = async () => {
    await signOut(auth);
  };

  const handlePress = () => {
    setModalVisible(true);
  };
  // return (
  //   <>
  //     <AddCourseModal
  //       visible={modalVisible}
  //       setVisible={() => {
  //         setModalVisible(!modalVisible);
  //       }}
  //     />
  //     <View style={{flexGrow: 1}}>
  //       <View>
  //       <Text>Cursos</Text>
  //       <Button title="Crear curso" onPress={handlePress} />
  //       <Button
  //         title="SSS"
  //         onPress={() => {
  //           console.log(courses);
  //         }}
  //         />
  //       </View>
  //       <View style={{flexGrow: 1}}>
  //         <FlatList
  //           data={courses}
  //           ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
  //           style={{ flex: 1, flexDirection: "column" }}
  //           scrollEnabled={true}
  //           renderItem={({ item }) => {
  //             return <CourseCard {...item} />;
  //           }}
  //           keyExtractor={(item) => item.id}
  //         />
  //       </View>
  //       {/* <Button title="sign out" onPress={logOut} /> */}
  //     </View>
  //   </>
  // );
  return (
    <View>
    {/* <View>
    <Text>Cursos</Text>
    <Button title="Crear curso" onPress={handlePress} />
    <Button
      title="SSS"
      onPress={() => {
        console.log(courses);
      }}
      />
    </View> */}
    {/* <View> */}
      <FlatList
        data={courses}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        style={{ flex: 1, flexDirection: "column" }}
        renderItem={({ item }) => {
          return <CourseCard {...item} />;
        }}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          flexGrow: 1,
          }}
      />
    {/* </View> */}
    {/* <Button title="sign out" onPress={logOut} /> */}
  </View>
  )
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
        <Switch
          value={isFavorite}
          onValueChange={() => {
            setIsFavorite((prev) => !prev);
          }}
        />
      </View>
    </Modal>
  );
};
export default Courses;
