import React from 'react';
import { StyleSheet, View, Platform, Dimensions, SafeAreaView,Alert } from 'react-native';
import MapView, { Marker, AnimatedRegion,Callout } from 'react-native-maps';
import MenuButton from './MenuButton'
import global from './global'
import * as Permissions from 'expo-permissions';


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 31.2674413;//מרכוז לפי משתמש
const LONGITUDE = 34.8003693;
const LATITUDE_DELTA = 0.000922;//רדיוס
const LONGITUDE_DELTA = ASPECT_RATIO*LATITUDE_DELTA;
const Daniellongitude = 34.8025459
const Daniellatitude = 31.2658046

export default class Mapp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      globalSites:global.sites,
      isFirst: true,
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,

      sites :[
        {id:1,wasOnsite :0, latitude: Daniellatitude, longitude: Daniellongitude, image : require('../assets/Map/1.png'), imageBig : require('../assets/2.jpg')}, 
        {id:2,wasOnsite :0, latitude: 30.8219382, longitude: 34.7430979, image : require('../assets/Map/2.png'), imageBig : require('../assets/2.jpg')}, 
        {id:3,wasOnsite :0, latitude: 30.819284, longitude:34.741121, image : require('../assets/Map/3.png'), imageBig : require('../assets/3.jpg')}, 
        {id:4,wasOnsite :0, latitude: 30.8211714, longitude:34.7420160, image : require('../assets/Map/4.png'), imageBig : require('../assets/4.jpg')}, 
        {id:5,wasOnsite :0, latitude: 30.8216163, longitude:34.7449705, image : require('../assets/Map/5.png'), imageBig : require('../assets/5.jpg')}, 
        {id:6,wasOnsite :0, latitude: 30.8190776, longitude:34.7441376, image : require('../assets/Map/6.png'), imageBig : require('../assets/6.jpg')} , 
        {id:7,wasOnsite :0, latitude: 30.8201821, longitude:34.7421676, image : require('../assets/Map/7.png'), imageBig : require('../assets/7.jpg')}, 
      ],
      
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

  async  componentDidMount() {
    const { coordinate } = this.state;
    const { status } = await Permissions.getAsync(Permissions.LOCATION)

    if (status !== 'granted') {
      const response = await Permissions.askAsync(Permissions.LOCATION)
    }
    navigator.geolocation.watchPosition(
      ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude },() =>this.isOnSite(this.state)),
      (error) => console.log('Error:', error),
      {
        enableHighAccuracy: true,
        distanceFilter: 1,
        distanceInterval: 1,
        timeout: 10,
        maximumAge: 1000,

      }
    )
      
      
  }

  componentWillUnmount() {
    // navigator.geolocation.clearWatch(this.watchID);

    
  }

  Alertt = (siteId,imageBig) =>{
    
    console.log(imageBig)
    Alert.alert(
      'כל הכבוד!!',
      ' הגעת לאתר' + 3 + " תרצה להמשיך?",
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => {
       
        
          this.props.navigation.navigate('comments_page', params = {
            moveToStory: true,
            name: global.userName,
            photoUrl: global.photoUrl,
            userID: global.userId,
            pageNo: siteId +1 ,
            siteImg: imageBig,
          });},
        }
      ],
      {cancelable: false},
    );
  }
  isOnSite = (newCoordinate) => {
      
      
      temp = this.state.sites
      temp.map((site, key) =>{
      (((Math.abs(newCoordinate.latitude - site.latitude)< 0.00003 || Math.abs(newCoordinate.longitude - site.longitude) <0.00003) && site.wasOnsite == 0  ?
          
          (
            site.wasOnsite = 1,
            console.log('the image link is ' + site.imageBig),
            this.Alertt(site.id,site.imageBig)
            
              // console.log('Im in site ' + site.id + " and i changed his Was on site to  " + site.wasOnsite )
          )
          : (console.log('the site id is : '+ site.id + " is Onsite value is  " + site.wasOnsite)
          ) 
          
       ))
         

      }
      
);
      this.setState({                
        sites : temp
        

      });
      
  
 
}
  
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

   markers =  this.state.sites.map((site, key) =>{
     return(
      
      <Marker 
        key={key}
        draggable
        coordinate={{ latitude: site.latitude , longitude: site.longitude }}
        image={site.image}>
          
        <Callout onPress={this.showWelcomeMessage}>
        </Callout>
      </Marker>
      )
    
   })
   const {latitude,longitude} = this.state
    return (
     
        <View style={styles.container}>
            

          <MapView style={styles.map} 
          showsUserLocation={true}
          followsUserLocation 
          loadingEnabled
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
          loadingEnabled={false}
          
          showsMyLocationButton={true}
          showsBuildings={false}
          minZoomLevel={13}
          maxZoomLevel={25}
          onRegionChangeComplete = {(region) =>{ this.OnRegionChangeComplete(region)}}
          region={this.getMapRegion()}>
          
          
            {markers}
          </MapView>
          
          <View style={styles.mapDrawerOverlay} />
          <MenuButton navigation={this.props.navigation} showIcon={true} /> 
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