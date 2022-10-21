import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function CourseCard(props) {
  return (
    
    <View style={{padding: 5}}>
      <Text>{props.name}</Text>
      <Text>Favorito</Text>
    </View>
    
  );
}
