import React from 'react'
import { View, Text, Button } from 'react-native'

import {signInWithGoogle, auth} from '../../database/firebase'
import {authContext} from '../../context/authContext'
import { onAuthStateChanged } from 'firebase/auth';

function Login( {navigation} ) {
    
  const {setIsLoggedIn, setUser} = React.useContext(authContext);
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
      setUser(user);
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  });

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