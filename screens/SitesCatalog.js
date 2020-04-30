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
  import Header from '../components/Header'
import global from '../components/global'
import MenuButton from  '../components/MenuButton'
import Images_data from '../assets/Images_data'
import styles from "../styles/styles";

export default class SitesCatalog extends React.Component {
  constructor(props){
        
    super(props);
    this.state = {
      image_clicked : false,
      pageNo:-1,
      siteImg: NaN,
      sites: ""
     
    }
  }
  
  componentWillMount() {

  this.setState({
    sites:global.sites
  });
  } 
    moveToAddNewCustomer =  (pageNo,siteImg) =>{
      console.log("saddssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
      const pushAction = StackActions.push({
        routeName: 'comments_page',
        params: {
          name: global.userName,
          photoUrl: global.photoUrl,
          userID: global.userId,
          pageNo: pageNo -1,
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
    console.log(global.sites)
    return (
      <View style={catalogStyles.container}>
      <ScrollView>
      <MenuButton navigation={this.props.navigation} showIcon={true} />
      <Header content={'התרשמות מחרותות הסלע'}/>
      <View style={catalogStyles.rightContent}>
      <Text style={styles.smallBlackText}> לחץ על התמונה להתרשמות, שיתוף עם חברים, השארת פרשנות משלך לחרותה וצפייה בפרשנויות מבקרים </Text>
      </View>
        {this.state.image_clicked ? (
            <LoggedInPage name ={global.userName} photoUrl={global.photoUrl} userID={global.userId} pageNo={this.state.pageNo} siteImg ={this.state.siteImg} navigation={this.props.navigation} />
            
            ) : (
                            
                  <View>
                   
                        {global.sites.map((site) => {
                        
                          return (
                          <View style={catalogStyles.rightContent}> 
                          <Text style={styles.smallBlackText}> אתר מספר {site.id} </Text>
                          <TouchableOpacity
                            onPress={() => this.moveToAddNewCustomer(site.id,site.imageBig)}
                            style={catalogStyles.image}
                            key ={site.imageBig}>
                            
                          <Image source= {{uri : site.imageBig}} style={catalogStyles.bottomItem} />
                          </TouchableOpacity>
                          </View>
                          )
                        
                      })}
                   
                  </View>
          )}
        </ScrollView>
    </View>
    );
  }
}



const catalogStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: "#abd6f4", 
  },

  rightContent: {
    
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#daedf9",
    elevation: 3,
    marginHorizontal: 10,
    marginBottom: 10,
},
    
  bottomItem:{
  flex:1,

  
  },
  image: {
    width: '100%',
    height: 250,
    padding: 5,
    
  },
});
