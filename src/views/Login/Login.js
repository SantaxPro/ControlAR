import React from 'react'
import { View, Text, Button } from 'react-native'
import {signInWithGoogle, auth} from '../../database/firebase'
import {authContext} from '../../context/authContext'

function Login( {navigation} ) {
    
  const {setIsLoggedIn, setUser} = React.useContext(authContext);
  
  const handlePress = async () =>{
    const user = await signInWithGoogle();
    if(user){
      setIsLoggedIn(true);
      setUser(user)
      navigation.navigate('Courses')
    }
  }

  return (
    <View>
        <Text>Login</Text>
        <Button title="Sign In With Google" onPress={handlePress} />
    </View>
    )
}

export default Login