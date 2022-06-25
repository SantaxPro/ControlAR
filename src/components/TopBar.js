import react from 'react';
import { View, Text, StyleSheet, StatusBar , Image} from 'react-native';
import theme from '../UI/theme';
import Constants from 'expo-constants';

export default function TopBar(props) {
    return(
        <View style={styles.bar}>
            <Text style={styles.title}>{props.title}</Text>
            <Image style={{width: 25, height: 25}} source={require('../../assets/optionsIcon.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        paddingVertical: 15,
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: theme.colors.lightGrey,
        justifyContent: 'space-between',
        flexDirection: 'row', marginTop: Constants.statusBarHeight,
        alignItems: 'center',
    },
    title: {
        fontSize: theme.fontSizes.titleTextSize,
        color: theme.colors.primaryGrey,
    }

});