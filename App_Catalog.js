import React , {useState} from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableHighlight,Image,TouchableOpacity} from 'react-native';
import GallerySwiper from "react-native-gallery-swiper";
import Images_data from './Images_data';
import global from './components/global'
import LoggedInPage from './screens/LoggedInPage'

// const data = [
//   {
//     imageUrl: "http://via.placeholder.com/160x160",
//     title: "something",
//     pageNo: 1
//   },
//   {
//     imageUrl: "http://via.placeholder.com/160x160",
//     title: "something two"
//   },
//   {
//     imageUrl: "http://via.placeholder.com/160x160",
//     title: "something three"
//   },
//   {
//     imageUrl: "http://via.placeholder.com/160x160",
//     title: "something four"
//   },
//   {
//     imageUrl: "http://via.placeholder.com/160x160",
//     title: "something five"
//   },
//   {
//     imageUrl: "http://via.placeholder.com/160x160",
//     title: "something six"
//   }
// ];

export default function App() {
  moveToAddNewCustomer =  (pageNo) =>{
    console.log('im here');
    return  <LoggedInPage name ={global.userName} photoUrl={global.photoUrl} userID={global.userID} pageNo={pageNo} />
     

}

 
  return (
    <View style={styles.container}>
          <View style={styles.header}>

          <Text style={styles.text}>
            לחץ על התמונה כדי לקרוא פרשנות של מבקרים
          </Text>
          </View>
          
          <View style={styles.bottom}>
                {Images_data.url.map((image, index) => {
                  return (
                  
                  <TouchableOpacity
                    onPress={() => this.moveToAddNewCustomer(index)}
                    style={styles.image}>
                    <Image source={{ uri: image.url }} style={styles.bottomItem} />
                  </TouchableOpacity>
                  )
              })}
            
              
              
          </View>
    </View>
    // </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header :{
    height :'10%',
    backgroundColor:'#f5f5f5'
  },
  text :{
    fontSize:24,
    fontWeight:'700',
    paddingHorizontal:20,
    paddingTop:30
  },
  bottom :{
    height :'90%',
    flexDirection: 'row',
    flexWrap:'wrap',
    padding:5
  },
  bottomItem:{
  flex:1,
  },
  image: {
    width: '50%',
    height: '50%',
    padding: 5,
  },
});
