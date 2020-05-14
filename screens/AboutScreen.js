import React from 'react';
import { StyleSheet, Text, View,ImageBackground, ScrollView, Linking } from 'react-native';
import MenuButton from '../components/MenuButton'

export default class AboutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [
        
      ],     
    };
  }//constructor
  
  
  render() {
    
    return (
     
      <ImageBackground source={{uri: 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/backgrounds%2FAbout_Back.png?alt=media&token=0290547d-3a68-46c2-ba1e-800c14a3b870' }} style={styles.backgroundImage}> 
      <View style={styles.main}>
      <MenuButton navigation={this.props.navigation} showIcon={true} />
      <View style={styles.container}>
     
      <View style={styles.TextSection}>
      <ScrollView persistentScrollbar={true} >
      <Text style={styles.textHeader}>
      אודות האפליקציה
      </Text>
      <Text style={styles.text}>
      {"\n"} 
      אפליקציה זו מומשה מקצה לקצה על ידי טל טרי, ילנה טשרניחובסקי ודניאל בן זקן - סטודנטים להנדסת תעשייה וניהול באוניברסיטת בן גוריון כחלק מפרוייקט גמר בשנת 2020.
      {"\n"}{"\n"} 
      הנחיה: ד"ר יובל ביתן
      {"\n"} 
      יוזמה וליווי: ד"ר יהושע שמידט
      {"\n"}
      עריכת תוכן: ליאור שוימר רט"ג
      {"\n"}{"\n"} 
      <Text style={{textDecorationLine: 'underline'}}
      onPress={() => Linking.openURL('http://www.freepik.com')}>
      Game character designed by brgfx / Freepik
      </Text> 
      

      </Text>
      </ScrollView>
      </View>       
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

  main: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: '12%',
    // backgroundColor: 'pink'
  },
  container: {
    height: '60%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TextSection:{
    // backgroundColor: 'green',
    justifyContent: "center",
    alignItems: "center",
    
  },
  text: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    lineHeight: 30,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: 'black',
    fontWeight: '500',
  },

  textHeader: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    lineHeight: 30,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: 'black',
    fontWeight: '600',
  },

});

