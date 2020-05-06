import React,  { Component } from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import global from './global'
import resolveAssetSource from 'resolveAssetSource';


export default class GameBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
     showScore: props.showScore,
    };
    
  }//constructor


render() {
  
  const { textStyling } = styles;
  
return (
  <View style={this.viewStyle()}>
      
      <Image source={require('../assets/gameBanner.png')} style={styles.image}/>
      <View style={this.messegeSection()}>
        <Text style={textStyling}> {global.messege} </Text> 
      </View>

      {this.state.showScore ? (
          <View style={this.scoreSection()}>
          <Text style={textStyling}>צברת {global.score}{"\n"}נקודות</Text>
          </View>
                
      ) : null}
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
  height: (((Dimensions.get('window').width)*source.height)/source.width),
  alignItems: 'center',
  
  }
}

messegeSection=function () {
  let icon =  require('../assets/gameBanner.png'); 
  let source = resolveAssetSource(icon);
  return {
    position: 'absolute', 
    // bottom: 62,
    bottom: (((Dimensions.get('window').width)*source.height)/source.width)*0.51,
    zIndex: 9,
    width: '48%',
    height: '38%',
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: "center",
  
  }
}

scoreSection=function () {

  return {
    
    backgroundColor: 'rgba(255,255,255, 0.7)',
    borderWidth:1,
    borderColor: 'rgba(0,0,0, 0.7)',
    paddingTop: 10,
    paddingBottom: 1,
    paddingRight: 10,
    paddingLeft: 2,
    borderTopRightRadius: 70,
    alignSelf: 'flex-start',
    position: 'absolute', 
    bottom: 0,
    zIndex: 9,
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
    lineHeight: 15,
  },

image: {
  flex: 1,
  height: '100%', 
  width: '100%', 
  resizeMode: 'contain',
  
}

};
