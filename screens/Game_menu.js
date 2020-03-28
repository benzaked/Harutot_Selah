import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity, ImageBackground} from 'react-native';
import { AuthSession } from 'expo';
import { getCurrentUserAsync } from 'expo-google-sign-in';

export default class Game_menu extends React.Component {
  constructor(props){
    super(props);
  }


  render() {

  return (

<ImageBackground source={require('../assets/game_background.png')} style={styles.backgroundImage}> 
      
      <View style= {styles.Container }>
      <View style={styles.ButtonsSection}>
      <TouchableOpacity style={styles.buttonStyle} onPress = { () =>  this.props.navigation.navigate('Map')}>
      <Text style={styles.buttontextStyleShort}> למסלול הקצר </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress = {() =>  this.props.navigation.navigate('Map')}> 
      <Text style={styles.buttontextStyleLong}> למסלול הארוך </Text>
      </TouchableOpacity>
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
Container: {
  height: '100%',
  justifyContent: "center",
  alignItems: "center",
      
},

ButtonsSection:{
  height: 170,
  justifyContent: "flex-end",
  alignItems: "center",
  
},

buttontextStyleShort: {
  fontSize: 25,
  fontWeight: '900',
  paddingTop: 6,
  paddingBottom:6,
  color:'red',
  textAlign: 'center',
  fontStyle:  'italic'
},

buttontextStyleLong: {
  
  fontSize: 25,
  fontWeight: '900',
  paddingTop: 6,
  paddingBottom:6,
  color:'green',
  textAlign: 'center',
  fontStyle:  'italic'
},

buttonStyle: {
  maxHeight: 50,
  flex:1,
  alignSelf: 'center',
  backgroundColor: 'white',
  borderWidth:1,
  borderColor:'gainsboro',
  marginTop: 7,
  marginBottom: 7,
  marginLeft: 7,
  marginRight:7,
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,
  borderBottomRightRadius: 20,
  borderBottomLeftRadius: 20,
}
});
