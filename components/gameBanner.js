import React,  { Component } from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import global from './global'
import resolveAssetSource from 'resolveAssetSource';


export default class GameBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
    
  }//constructor


render() {
  
  const { textStyling, messegeSection, scoreSection, } = styles;
  
return (
  <View style={this.viewStyle()}>
      
      <Image source={require('../assets/gameBanner.png')} style={styles.image}/>
      <View style={messegeSection}>
        <Text style={textStyling}> {global.messege} </Text> 
      </View>
      <View style={scoreSection}>
      <Text style={textStyling}>צברת {global.score}{"\n"}נקודות</Text>
      </View>
      </View>
)}


viewStyle=function () {
  let icon =  require('../assets/gameBanner.png'); 
  let source = resolveAssetSource(icon);

  return {
  position: 'absolute',
  bottom: 0,
  left: 0,   
  width: '100%',
  height: (Dimensions.get('window').width*source.height)/source.width,
  alignItems: 'center',
  
  }
}


}//class


const styles = {
  
textStyling: {
    fontSize: 11,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },

messegeSection: {
  
  position: 'absolute', bottom: 68,
  zIndex: 9,
  width: '50%',
  // backgroundColor: 'blue',
  alignItems: 'center',
},

scoreSection:{
//  paddingBottom: '2%',
 position: 'absolute', bottom: 18,
 zIndex: 9,
 alignItems: 'center',
},

image: {
  flex: 1,
  height: '100%', 
  width: '100%', 
  resizeMode: 'contain',
  
}

};
