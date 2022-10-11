import React from 'react'
import { View, Text } from 'react-native'
import { authContext, useAuth } from '../../context/authContext';

function Courses() {
  const {user} = useAuth();
  return (
    <View>
        <Text>Cursos</Text>
        {user && <Text>{user.email}</Text>}
    </View>
  )
}

export default Courses