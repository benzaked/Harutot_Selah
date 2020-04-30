import React from 'react';
import { StyleSheet, View,Text,TouchableOpacity, Platform, Dimensions, SafeAreaView,Alert, Image } from 'react-native';
import MapView, { Marker, AnimatedRegion,Callout } from 'react-native-maps';
import MenuButton from './MenuButton'
import global from './global'
import * as Permissions from 'expo-permissions';
import GameBanner from './GameBanner'
import Modal from 'react-native-modal';
import styles from "../styles/styles";

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 31.2674413;//מרכוז לפי משתמש
const LONGITUDE = 34.8003693;
const LATITUDE_DELTA = 0.00922;//רדיוס
const LONGITUDE_DELTA = ASPECT_RATIO*LATITUDE_DELTA;
import {  StackActions } from 'react-navigation';

// const site2long = 34.7430979
// const site2llat = 30.8219382

export default class Mapp extends React.Component {
  constructor(props) {
    global.messege='התקדם לאתר חרותות הסלע שלפניך'
    super(props);

    this.state = {
      globalSites:global.sites,
      isFirst: true,
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
      isModalVisible: false,
      siteId:-1 ,
      imageBig: -1,

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
    this.setState({siteId: siteId})
    this.setState({imageBig: imageBig})
    this.setState({isModalVisible: !this.state.isModalVisible});
    
    // Alert.alert(  
    //   'כל הכבוד!',
    //   ' הגעת לאתר ' + siteId   + " המשך לתת פרשנות משלך לחרותות שלפינך ",
    
    //   [
        
    //     {text: 'יאללה!', onPress: () => {
       
      
    //   const pushAction = StackActions.push({
    //     routeName: 'comments_page_game',
    //     params : {
    //       moveToStory: true,
    //       name: global.userName,
    //       photoUrl: global.photoUrl,
    //       userID: global.userId,
    //       pageNo: siteId,
    //       siteImg: imageBig,
    //     }
    //     });
    //     this.props.navigation.dispatch(pushAction);
        
    //     },
    //     }
    //   ],
    //   {cancelable: false},
    // );
  }//Alertt

  moveToComments = () =>{
       
    this.setState({isModalVisible: !this.state.isModalVisible});
    
      const pushAction = StackActions.push({
        routeName: 'comments_page_game',
        params : {
          moveToStory: true,
          name: global.userName,
          photoUrl: global.photoUrl,
          userID: global.userId,
          pageNo: this.state.siteId,
          siteImg: this.state.imageBig,
        }
        });
        this.props.navigation.dispatch(pushAction);
        
}//moveToComments

  isOnSite = (newCoordinate) => {
      
      
      temp = global.sites
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
      global.sites = temp;
      
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

   markers =  global.sites.map((site, key) =>{
     return(
      
      <Marker 
        key={key}
        draggable
        coordinate={{ latitude: site.latitude , longitude: site.longitude }}
        image={{uri: site.marker}}>
          
        <Callout onPress={this.showWelcomeMessage}>
        </Callout>
      </Marker>
      )
    
   })
   const {latitude,longitude} = this.state
    return (
     
        <View style={mapStyles.container}>

          <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.lightBlueContainer}>
            <View style={{alignItems: "center"}}>
            <Text style={styles.medumBlackText}>כל הכבוד!</Text>
            <Text style={styles.smallBlackText}>
            {"\n"}
           הגעת לאתר מספר {this.state.siteId} המשך לתת פרשנות משלך לחרותה שלפינך
          </Text>
          <Image source={require('../assets/welcome_site.png')} style={mapStyles.image}/>
          <TouchableOpacity style={styles.darkButtonStyle} onPress = { () =>  this.moveToComments()}>
          <Text style={styles.darkButtonText}> קדימה </Text>
          </TouchableOpacity>
          </View></View>
          </Modal> 

          <MapView style={mapStyles.map} 
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
          
          <View style={mapStyles.mapDrawerOverlay} />
          <MenuButton navigation={this.props.navigation} showIcon={true} /> 
          <GameBanner showScore={true}/>
        </View>
     
    );
  }
}
const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
const mapStyles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    flex :1 
  },
  map: {
    flex :1, 
    width: Dimensions.get('window').width,
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

  image: {
    width:300,
    height: 300,
    resizeMode:'contain'
    
  },
  

});