import React,{useState} from 'react';
import { View,Text,Image,StyleSheet,useWindowDimensions,ScrollView } from 'react-native';
import Logo from '../../../assets/i1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const{height} = useWindowDimensions();
    const onSignInPressed = () => {
        console.warn('Sign In');
    };
    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed');
    };
const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
};
const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
};
const onSignInUpPress = () => {
    console.warn('onSignUpPress');
};
return(
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Image 
        source={Logo} 
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode="contain"
        />
        <CustomInput 
        placeholder="Username" 
        value={username} 
        setValue={setUsername}
        />
        <CustomInput 
        placeholder="Password" 
        value={password} 
        setValue={setPassword} 
        secureTextEntry
        />
        <CustomButton text="Sign in" onPress={onSignInPressed}/>
        <CustomButton 
        text="Forgot password?" 
        onPress={onForgotPasswordPressed} 
        type="TERTIARY"
        />
        <CustomButton 
        text="Sign in with Facebook" 
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
        />
        <CustomButton 
        text="Sign in with Google" 
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
        />
        <CustomButton 
        text="DO NOT HAVE AN ACCOUNT?CREATE ONE" 
        onPress={onSignInUpPress} 
        type="TERTIARY"
        />
  </View>
      
  </ScrollView>
);
};
const styles = StyleSheet.create(
    {
        root:{
            alignItems:'center',
            padding:20,
        },
        logo:{
            width:'70%',
            maxWidth:300,
            maxHeight:200, 
        },
    }
);
export default SignInScreen;