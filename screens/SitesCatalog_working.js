import React from 'react';
import { StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image,
    ScrollView
  } from 'react-native';
  import { createStackNavigator, createAppContainer, StackActions } from 'react-navigation';

import LoggedInPage from './comments_page'
import global from '../components/global'

import MenuButton from  '../components/MenuButton'
import Images_data from '../assets/Images_data'

export default class SitesCatalog extends React.Component {
  constructor(props){
        
    super(props);
    this.state = {
      image_clicked : false,
      pageNo:-1,
      siteImg: NaN
    }
  }
    
    moveToAddNewCustomer =  (pageNo,siteImg) =>{
      console.log("site no " + pageNo)
      const pushAction = StackActions.push({
        routeName: 'comments_page',
        params: {
          name: global.userName,
          photoUrl: global.photoUrl,
          userID: global.userId,
          pageNo: pageNo +1 ,
          siteImg: siteImg,
        }
        });
        this.props.navigation.dispatch(pushAction);
      
  

      //   this.props.navigation.navigate('LoggedInPage', {
      //     name: global.userName,
      //     photoUrl: global.photoUrl,
      //     userID: global.userId,
      //     pageNo: pageNo,
      //     siteImg: siteImg,
      //     navigation: this.props.navigation,
      //     go_back_key: this.props.navigation.state.key
      // })
        // this.setState({
        //   image_clicked: true,
        //   pageNo: pageNo,
        //   siteImg: siteImg
        // }
        // );

    };



  render() {
    return (
      
      <View style={styles.container}>
        {this.state.image_clicked ? (
            <LoggedInPage name ={global.userName} photoUrl={global.photoUrl} userID={global.userId} pageNo={this.state.pageNo} siteImg ={this.state.siteImg} navigation={this.props.navigation} />
            
            ) : (
              <View style={styles.container}>  
              <View style={styles.header}>
                <MenuButton navigation={this.props.navigation} showIcon={true} />
                <Text style={styles.text}>
                  לחץ על התמונה כדי לקרוא פרשנות של מבקרים
                </Text>
                </View>
                
                <View style={styles.bottom}>
                      {Images_data.url.map((image, index) => {
                        return (
                        
                        <TouchableOpacity
                          onPress={() => this.moveToAddNewCustomer(index,image.url)}
                          style={styles.image}
                          key ={image.url}>
                          
                          <Image source={{uri : image.url}} style={styles.bottomItem} />
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
    fontSize:20,
    fontWeight:'700',
    paddingHorizontal:20,
    paddingTop:40,
    paddingRight:50
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
