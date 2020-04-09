import React from 'react';
import {Text, View} from 'react-native';

const StoryHeader = (props) => {
    const { textStyling, viewStyle} = styles;
    return (
      <View style={viewStyle}>
      <Text style={textStyling}> הסיפור של אתר מספר {props.numOfSite} </Text>  
      </View>
    );
}

const styles = {

  textStyling: {
    fontSize: 22,
    color: "#777777",
    fontWeight: '900',
  },

viewStyle: {
  height: 70,
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 40,
  marginBottom: 20

}
};

export default StoryHeader;