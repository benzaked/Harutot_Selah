import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
    const { textStyling, viewStyle} = styles;
    return (
      <View style={viewStyle}>
      <Text style={textStyling}> {props.content} </Text>  
      </View>
    );
}

const styles = {

  textStyling: {
    fontSize: 22,
    color: "#526674",
    fontWeight: '900',
    textAlign: 'center',
  },

viewStyle: {
  
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal: 50,
  paddingTop: 30,
  marginBottom: 4,
  // backgroundColor: "white",

}
};

export default Header;