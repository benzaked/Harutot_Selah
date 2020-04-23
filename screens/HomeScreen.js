import React from 'react';
import { StyleSheet, Text, View,BackHandler, ImageBackground, ScrollView } from 'react-native';
import global from '../components/global'
import firebase from 'firebase'
import {firebaseConfig} from '../config'
import MenuButton from '../components/MenuButton'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],     
    };
  }//constructor
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    const HomePage = firebase.database().ref('HomePage');
    HomePage.on('value', (dataSnapshot) => {
          var aux = [];
          dataSnapshot.forEach((child) => {
            
            aux.push({
              about:child.val().about,
              introduction:child.val().introduction,
            })
          
        });
          this.setState({content: aux});
          console.log(this.state.content.length+ " !!!!!!!!!!!!!!!!!!!!");

         
        });
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton() {
  // ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
  return true;
}

  render() {
    
    return (
     
      <ImageBackground source={{uri: 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/backgrounds%2FHome_Back.png?alt=media&token=90799c16-0803-4270-98de-2b9cf13b507a' }} style={styles.backgroundImage}> 
      <View style={styles.container}>
      <MenuButton navigation={this.props.navigation} showIcon={true} />
      <View style={styles.TextSection}>
      <ScrollView persistentScrollbar={true} >
      <Text style={styles.textHeader}>
      רקע לחרותות הסלע ופירוט הפעולות באפליקציה
      {"\n"}
      </Text>
      <Text style={styles.text}>
      {this.state.content[0].about}
      {"\n"}{"\n"}
      {this.state.content[0].introduction}

      {"\n"}{"\n"}
      מקווים שיהיה לכם מסע פורה ומהנה באתר 😊

      </Text>
      </ScrollView>
      </View>       
      </View>
      </ImageBackground>  
    );
  }
}

const styles = StyleSheet.create({

  backgroundImage:{
    flex: 1,
    width: null,
    height: null,  
    resizeMode:'stretch',
  }, 
  container: {
    height: '100%',
    paddingBottom: '13%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  TextSection:{
    width:'80%',
    height: '63%',
    justifyContent: "center",
    alignItems: "center",
    
  },
  text: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    lineHeight: 20,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: 'black',
    fontWeight: '500',
  },

  textHeader: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    lineHeight: 25,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: 'black',
    fontWeight: '600',
  },

});

