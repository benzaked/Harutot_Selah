import React from 'react';
import { StyleSheet, View, Platform, Dimensions, SafeAreaView,Alert,Image } from 'react-native';
import MapView, { Marker, AnimatedRegion,Callout } from 'react-native-maps';



const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 31.2674413;
const LONGITUDE = 34.8003693;
const LATITUDE_DELTA = 0.000922;//רדיוס
const LONGITUDE_DELTA = ASPECT_RATIO*LATITUDE_DELTA;

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFirst: true,
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta :LATITUDE_DELTA,
      longitudeDelta :LONGITUDE_DELTA,
      
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta:0 ,
        longitudeDelta: 0,      
      }),  
    };
  }

  componentDidMount() {
    this.watchLocation();
  }


  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

 
  watchLocation = () => {
    const { coordinate } = this.state;

    this.watchID = navigator.geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        const newCoordinate = {
          latitude,
          longitude,
        };
    
        if (Platform.OS === 'android') {
          if (this.marker) {
            coordinate.timing(newCoordinate).start(); // 500 is the duration to animate the marker
          }
        } else {
            coordinate.timing(newCoordinate).start();
        }

        this.setState({
          latitude,
          longitude,
        });

      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 10,
        maximumAge: 1000,
        distanceFilter: 30,
        distanceInterval:10
      }
    );

  };
  OnRegionChangeComplete = (region) =>{
    this.setState({
      latitudeDelta :region.latitudeDelta,
      longitudeDelta :ASPECT_RATIO*region.latitudeDelta,

    })
    console.log(region)

  }
  getMapRegion = () => {


      return {
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: this.state.latitudeDelta,
        longitudeDelta: this.state.longitudeDelta,
      }
    
   
  };
  
  
  render() {
    return (
        <View style={styles.container}>
          <MapView style={styles.map}
           loadingEnabled
           showUserLocation 
           followsUserLocation 
           loadingEnabled
           showsMyLocationButton={true}
           showsBuildings={false}
           onRegionChangeComplete = {(region) =>{ this.OnRegionChangeComplete(region)}}
           region={this.getMapRegion()}
           
           >
          
            <Marker.Animated
              ref={marker => {
                this.marker = marker;
              }}
              coordinate={this.state.coordinate}
            />
          </MapView>
          
          <View style={styles.mapDrawerOverlay} />
          {/* <MenuButton navigation={this.props.navigation} />  */}
        </View>
     
    );
  }
}
const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    flex :1 
  },
  map: {
    width: Screen.width,
    height: Dimensions.get('window').height,
  },
  mapDrawerOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.0,
    height: Dimensions.get('window').height,
    width: 10,
  },
});