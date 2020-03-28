import React from 'react';
import { Dimensions, StyleSheet, Text, View, } from 'react-native';

import * as Permissions from 'expo-permissions';
import { MapView} from 'react-native-maps'

const { width, height } = Dimensions.get('screen')

export default class Map extends React.Component {
  state = {
    latitude: null,
    longitude: null,
  }

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION)

    if (status !== 'granted') {
      const response = await Permissions.askAsync(Permissions.LOCATION)
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude },() => console.log('state : ' + this.state) ),
      (error) => console.log('Error:', error)
    )


  }




  render() {
    const {
 
      latitude,
      longitude,

    } = this.state

    if (latitude) {
      return (
        <MapView
          showsUserLocation
          style={{ flex: 1 }}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
        
        
      </MapView>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>We need your permission!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});