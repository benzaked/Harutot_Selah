
import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity, ImageBackground} from 'react-native';
import { AuthSession } from 'expo';
import { getCurrentUserAsync } from 'expo-google-sign-in';
import MenuButton from '../components/MenuButton'

export default class Game_menu extends React.Component {
  constructor(props){
    super(props);
  }


  render() {

  return (

<ImageBackground source={{uri : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/backgrounds%2Fgame_background.png?alt=media&token=a6e50ad3-4940-4368-93e6-cfd3ddeec28f'}} style={styles.backgroundImage}> 
      
      <View style= {styles.Container }>
      <MenuButton navigation={this.props.navigation} showIcon={true} />
      <View style={styles.ButtonsSection}>
      <TouchableOpacity style={styles.buttonStyle} onPress = { () =>  this.props.navigation.navigate('Map', params={path:'short'})}>
      <Text style={styles.buttontextStyleShort}> למסלול הקצר </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress = {() =>  this.props.navigation.navigate('Map', params={path:'long'})}> 
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
 
},

buttontextStyleLong: {
  
  fontSize: 25,
  fontWeight: '900',
  paddingTop: 6,
  paddingBottom:6,
  color:'green',
  textAlign: 'center',
},

buttonStyle: {
  maxHeight: 50,
  flex:1,
  alignSelf: 'center',
  backgroundColor: 'white',
  marginTop: 7,
  marginBottom: 7,
  marginLeft: 7,
  marginRight:7,
  borderTopRightRadius: 100,
  borderTopLeftRadius: 100,
  borderBottomRightRadius: 100,
  borderBottomLeftRadius: 100,
}
});
