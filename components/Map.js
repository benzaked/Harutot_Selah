import React from 'react';
import { StyleSheet, View, Platform, Dimensions, SafeAreaView,Alert } from 'react-native';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import PubNubReact from 'pubnub-react';
import global from './global'

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;//מרכוז לפי משתמש
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.00922;//רדיוס
const LONGITUDE_DELTA = ASPECT_RATIO*LATITUDE_DELTA;

export default class Mapp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFirst: true,
      latitude: LATITUDE,
      longitude: LONGITUDE,
      site1:0,
      site2:0,
      site3:0,
      site4:0,
      site5:0,
      site6:0,
      site7:0,
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta:0 ,
        longitudeDelta: 0,
        
        
      }),
       
       
    
    
    
    };

    // Replace "X" with your PubNub Keys
    // this.pubnub = new PubNubReact({
    //   publishKey: 'pub-c-07c637a0-91d5-4518-807f-76016132bc1b',
    //   subscribeKey: 'sub-c-24dd6d5a-2d8b-11ea-aaf2-c6d8f98a95a1',
    // });
    // this.pubnub.init(this);
  }

  componentDidMount() {
    this.watchLocation();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.latitude !== prevState.latitude) {
    //   this.pubnub.publish({
    //     message: {
    //       latitude: this.state.latitude,
    //       longitude: this.state.longitude,
    //     },
    //     channel: 'location',
    //   });
    }
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);

    
  }

  Alertt = (newCoordinate) =>{
    console.log ('tal loat ' + newCoordinate.latitude +"tal long "+ newCoordinate.longitude )
    Alert.alert(
      'Alert Title',
      'tal lat ' + newCoordinate.latitude +" tal long "+ newCoordinate.longitude,
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }
  isOnSite = (newCoordinate) => {
      const site1Lat = 31.2674413
      const site1long = 34.8003693
      const site2Lat = 31.267503
      const site2long = 34.8002718
      console.log ('tal loat ' + newCoordinate.latitude +"tal long "+ newCoordinate.longitude )
    if (Math.abs(newCoordinate.latitude - site1Lat)< 0.00003 || Math.abs(newCoordinate.longitude - site1long) <0.00003 ) {
        if (this.state.site1 == 0) {
                Alert.alert(
                'Alert Title',
                'site 1',
                [
                    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
                );
                this.setState({                
                    site1 : 1 
                    

                });



    }
}
  if (Math.abs(newCoordinate.latitude - site2Lat)< 0.000020 || Math.abs(newCoordinate.longitude - site2long) <0.00002 ) {
        if (this.state.site2 == 0){
            Alert.alert(
                'Alert Title',
                'site 2',
                [
                  {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              );
              this.setState({                
                site1 : 1 
                

              });
        }
    


    }
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
          isFirst:false
        });
        this.isOnSite(newCoordinate);

      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 10,
        maximumAge: 1000,
        distanceFilter: 30,
        distanceInterval: 0.05
      }
    );

  };

  getMapRegion = () => {

    if(this.state.isFirst){
      console.log('dsadwdassdadsadsdasdsadasaddsadsadasdadsadasdsadasdsdsada')
      return {
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
      
    }
   
    
    else {
      
      return {
        latitude: this.state.latitude,
        longitude: this.state.longitude,
      }
    
   
  };
  }
  
  render() {
    return (
     
        <View style={styles.container}>
          <MapView style={styles.map} showUserLocation followUserLocation loadingEnabled region={this.getMapRegion()}>
            <Marker.Animated
              ref={marker => {
                this.marker = marker;
              }}
              coordinate={this.state.coordinate}
            />
          </MapView>
          <View style={styles.mapDrawerOverlay} />
          
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