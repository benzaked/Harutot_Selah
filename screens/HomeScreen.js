import React from 'react';
import { StyleSheet, Text, View,BackHandler,
  ToastAndroid } from 'react-native';
import global from '../components/global'

import MenuButton from '../components/MenuButton'

export default class HomeScreen extends React.Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
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
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} showIcon={true} />
    <Text style={styles.text}>Home</Text>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  }
});
