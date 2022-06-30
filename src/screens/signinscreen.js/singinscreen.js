import React from 'react';
import { View,Text,Image,StyleSheet,useWindowDimensions } from 'react-native';
import Logo from '../../../assets/i1.png';
import CustomInput from '../../components/CustomInput';
const SignInScreen = () => {
    const{height}=useWindowDimensions();
return(
    <View style={styles.root}>
        <image 
        source={Logo} 
        style={styles.logo} 
        resizeMode="containe"
        />
        <CustomInput />
    </View>
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