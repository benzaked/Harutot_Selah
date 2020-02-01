import React from 'react';
import { StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image,
    ScrollView
  } from 'react-native';
import LoggedInPage from './LoggedInPage'
import global from '../components/global'

import MenuButton from  '../components/MenuButton'
import Images_data from '../assets/Images_data'

export default class SitesCatalog extends React.Component {
  constructor(props){
        
    super(props);
    this.state = {
      image_clicked : false,
      pageNo:-1
    }
  }

    moveToAddNewCustomer =  (pageNo) =>{
        console.log('im here');
        this.setState({
          image_clicked: true,
          pageNo: pageNo,
        });

    };



  render() {
    return (
      
      <View style={styles.container}>
        {this.state.image_clicked ? (
            <LoggedInPage name ={global.userName} photoUrl={global.photoUrl} userID={global.userID} pageNo={this.state.pageNo} />
            ) : (
              <View style={styles.container}>  
              <View style={styles.header}>
                <MenuButton navigation={this.props.navigation} />
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
          )}
          </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
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
