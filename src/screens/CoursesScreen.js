import react from "react";
import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
import theme from "../UI/theme";
import { courses } from "../data/testdata";
import CourseCard from "../components/CourseCard";

export default function CoursesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={courses}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => <CourseCard {...item} nav={navigation} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 10,
      backgroundColor: theme.colors.screensBackground,
    },
    list: {
      flexGrow: 1,
      padding: 5,
      flexDirection: "column",
    },
    separator: {
      height: 10,
    },
  });
  