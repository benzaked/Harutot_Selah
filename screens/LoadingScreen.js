import React ,  {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button,ActivityIndicator } from 'react-native';
import firebase from 'firebase'

class LaodingScreen extends Component {
         componentDidMount(){
            this.checkIfLoggedIn();
            

        }

        render(){
            return(
                <View  styles={styles.container}>
                    <ActivityIndicator size="large"></ActivityIndicator>
                </View>
            )
                
            
        }
        checkIfLoggedIn = () =>{
            firebase.auth().onAuthStateChanged(
                function(user){
                    if(user){
                        this.navigation.navigate('DashboardScreen')
                    }
                    else{
                        this.navigation.navigate('LoginScreen');
    
                    }
                }.bind(this)
            );
        }
        
        }
    
export default LaodingScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center'

    }
})