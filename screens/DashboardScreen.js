import React ,  {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

class DashboardScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>DashboardScreen</Text>
            </View>
        )
    }
}
export default DashboardScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center'

    }
})