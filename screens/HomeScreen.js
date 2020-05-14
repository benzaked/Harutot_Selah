import React from 'react';
import { StyleSheet, Text, View,BackHandler, ImageBackground, ScrollView} from 'react-native';
import firebase from 'firebase'
import MenuButton from '../components/MenuButton'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [
        
      ],     
    };
  }//constructor
  
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    const HomePage = firebase.database().ref('HomePage');
    HomePage.on('value', (dataSnapshot) => {
          var aux = [];
          dataSnapshot.forEach((child) => {
            
            aux.push({
              about:child.val().about,
              introduction:child.val().introduction,
            }) 
          
        });
          this.setState({content: aux});
          console.log(this.state.content.length+ " !!!!!!!!!!!!!!!!!!!!");

         
        });
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton() {
  // ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
  return true;
}

  render() {
    
    return (
     
      <ImageBackground source={{uri: 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/backgrounds%2FHome_.png?alt=media&token=c424ee5a-e4fd-4a18-90fb-dda7ed55d797' }} style={styles.backgroundImage}> 
      <View style={styles.main}>
      <MenuButton navigation={this.props.navigation} showIcon={true} />
      <View style={styles.container}>
      <View style={styles.TextSection}>
      <ScrollView persistentScrollbar={true} >
      <Text style={styles.textHeader}>
      רקע לחרותות הסלע
      </Text>
      <Text style={styles.text}>
      
      {this.state.content[0]!=undefined ?(
        this.state.content[0].about):(<Text style={styles.text}>
           
        </Text>)} 
      </Text>
      </ScrollView>
      </View>  

      <View style={styles.TextSection}>
      <ScrollView persistentScrollbar={true} >
      <Text style={styles.textHeader}>
      פירוט הפעולות באפליקציה
      </Text>
      <Text style={styles.text}>
      
      {this.state.content[0]!=undefined ?(
        this.state.content[0].introduction):(<Text style={styles.text}>
           
        </Text>)}

      {"\n"}
      מקווים שיהיה לכם מסע פורה ומהנה 😊
      </Text>
      </ScrollView>
      </View>       
      </View>
      </View>
      </ImageBackground>  
    );
  }
}

const styles = StyleSheet.create({

  backgroundImage:{
    flex: 1,
    width: null,
    height: null,  
    resizeMode:'stretch',
  }, 

  main: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: '12%',
    // backgroundColor: 'pink'
  },
  container: {
    height: '60%',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'blue'
  },
  TextSection:{
    // backgroundColor: 'green',
    width: '100%',
    height: '42%',
    justifyContent: "center",
    alignItems: "center",
    
  },
  text: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    lineHeight: 30,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: 'black',
    fontWeight: '500',
  },

  textHeader: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    lineHeight: 30,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: 'black',
    fontWeight: '600',
  },

});

