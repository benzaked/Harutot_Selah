import React from 'react';
import {Text, View} from 'react-native';

const StoryHeader = (props) => {
    const { textStyling, viewStyle} = styles;
    return (
      <View style={viewStyle}>
      <Text style={textStyling}>אתר מספר {props.numOfSite} </Text>  
      </View>
    );
}

const styles = {
  textStyling: {
    fontSize: 22,
    color: '#354992'
  },

viewStyle: {
  height: 70,
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 25

}
};

export default StoryHeader;