import React from 'react';
import {Text, View, Image} from 'react-native';
import global from './global'

const gameBanner = () => {
    const { textStyling, viewStyle, messegeSection, scoreSection} = styles;
    return (
      <View style={viewStyle}>
      <Image source={require('../assets/gameBanner.png')} />
      <View style={messegeSection}>
        <Text style={textStyling}> {global.messege} </Text> 
      </View>
      <View style={scoreSection}>
      <Text style={textStyling}> מצב הניקוד:{"\n"} {global.score} </Text>
      </View>
      </View>
    );
}

const styles = {
  
textStyling: {
    fontSize: 10,
    color: 'black'
  },

viewStyle: {
//height: '100%',
  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
  justifyContent: 'space-between',
  alignItems: 'center',
  justifyContent: 'flex-end',
},

messegeSection: {
 m
},

scoreSection:{
 paddingBottom: '2%',
}
};

export default gameBanner;