import React from 'react';
import { StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight,
    Image,
    ScrollView
  } from 'react-native';
import LoggedInPage from './LoggedInPage'
import global from '../components/global'

import MenuButton from  '../components/MenuButton'

export default class SitesCatalog extends React.Component {
    moveToAddNewCustomer =  (pageNo) =>{
        console.log('im here');
        const L = <LoggedInPage name ={global.userName} photoUrl={global.photoUrl} userID={global.userID} pageNo={pageNo} />
        return  L 

    }



  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <ScrollView scrollEventThrottle={16}>
          <View style={{flex:1,backgroundColor:'white',paddingTop:20}}>
          <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}} >
            Heading
          </Text>
         
            <View style={{height:130,marginTop:20}}>
            <ScrollView >
              <View style ={{ height:130 , width :130}}>
              <TouchableHighlight onPress={() => this.moveToAddNewCustomer(2)}>

                
                
                <Image style={styles.image} source={{ uri: "http://via.placeholder.com/160x160" }} />

                
            </TouchableHighlight>
          </View>
          </ScrollView>
          </View>
          

        
        </View>
        </ScrollView>
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
  },
 image: {
  flex:1,
  width: 160,
  height: 160,
  resizeMode:'cover'
 }
});
