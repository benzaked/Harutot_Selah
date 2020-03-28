import React , {useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import loadingScreen from './screens/LoadingScreen'
import DashboardScreen from './screens/DashboardScreen'
import * as firebase from 'firebase'
import {firebaseConfig} from './config'
import DrawerNavigator from './navigation/DrawerNavigator'


export default function App() {
  
  return (
    <View style={styles.container}>
    <DrawerNavigator />
  </View>
  );
 }
const styles = StyleSheet.create({
  screen: {
    padding: 50

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: "80%",
    borderBottomColor: 'black',
    borderBottomWidth: 1, 
    padding:10 
  }
});
  
 
