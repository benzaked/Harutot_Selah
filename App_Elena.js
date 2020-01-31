 
import React,  { Component } from 'react';

import { StyleSheet, Text, View,TextInput,Button,Image,ImageBackground,} from 'react-native';
import QuizeList from './components/QuizeList'

export default class App extends Component{
  
render() {

  
  return (
    <View>
      

    <QuizeList
    numberOfSite={3}
    ></QuizeList>
    
    </View>
);
}
}



  
  

