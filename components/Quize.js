import React ,  {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button, TouchableOpacity , Image } from 'react-native';
import styles from "../styles/styles";

class Quize extends Component {
        constructor(props) {
          super(props);
           this.state = {
            
            QuizeID: props.QuizeID,
            numberOfSite: props.numberOfSite,
            QuizeContent : props.QuizeContent,
            image:props.image,
            Answer1: props.Answer1,
            Answer2: props.Answer2, 
            Answer3: props.Answer3, 
            Answer4: props.Answer4,
            RightAnswerNum: props.RightAnswerNum,
            showQuizeScreen: true,
            showRightAnswerScreen: false,
            showWrongAnswerScreen: false,

           };
         }   
         
      checkAnswer1 = () => {
          this.setState({ showQuizeScreen: false });
          if (this.state.RightAnswerNum == 1) {
            this.setState({ showRightAnswerScreen: true });
            this.props.handlerRight();
          } else {
            this.setState({ showWrongAnswerScreen: true });
          }
          this.props.handler();
      };  
      
      checkAnswer2 = () => {
        this.setState({ showQuizeScreen: false });
          if (this.state.RightAnswerNum == 2) {
            this.setState({ showRightAnswerScreen: true });
            this.props.handlerRight();
          } else {
            this.setState({ showWrongAnswerScreen: true });
          }
          this.props.handler();
      };  
      
      checkAnswer3 = () => {
        this.setState({ showQuizeScreen: false });
          if (this.state.RightAnswerNum == 3) {
            this.setState({ showRightAnswerScreen: true });
            this.props.handlerRight();
          } else {
            this.setState({ showWrongAnswerScreen: true });
          }
          this.props.handler();
      };  
      
      checkAnswer4 = () => {
        this.setState({ showQuizeScreen: false });
          if (this.state.RightAnswerNum == 4) {
            this.setState({ showRightAnswerScreen: true });
            this.props.handlerRight();
          } else {
            this.setState({ showWrongAnswerScreen: true });
          }
          this.props.handler();
      }; 
      
      
    
    render(){
         return(
          <View style= { styles.lightBlueContainer }>
            <View style={{flex:1, alignItems: "stretch", justifyContent: "center"}}>
            {this.state.showQuizeScreen ? ( 
            <View>
            <Text style = {styles.medumBlackText}>{this.state.QuizeContent}</Text> 
            {(this.state.image!=null) ? (
            <View style={quizeStyles.imageSection}><Image source={{uri:this.state.image}} style={quizeStyles.quizeImage}/></View>
            ) : null}              
              <View style={quizeStyles.answerContainer}>
                <TouchableOpacity style={quizeStyles.buttonStyle} onPress = {this.checkAnswer1}>
                   <Text style={quizeStyles.buttontextStyle}> {this.state.Answer1} </Text> 
                </TouchableOpacity>
                
              </View>  

              <View style={quizeStyles.answerContainer}>
                <TouchableOpacity style={quizeStyles.buttonStyle} onPress = {this.checkAnswer2}>
                   <Text style={quizeStyles.buttontextStyle}> {this.state.Answer2} </Text>
                </TouchableOpacity>
                
              </View>  

              <View style={quizeStyles.answerContainer}>
                <TouchableOpacity style={quizeStyles.buttonStyle} onPress = {this.checkAnswer3}>
                   <Text style={quizeStyles.buttontextStyle}> {this.state.Answer3} </Text> 
                </TouchableOpacity>
                
              </View>  

              <View style={quizeStyles.answerContainer}>
                
                <TouchableOpacity style={quizeStyles.buttonStyle} onPress = {this.checkAnswer4}>
                   <Text style={quizeStyles.buttontextStyle}> {this.state.Answer4} </Text> 
                </TouchableOpacity>
                
                </View> 
            </View>
            ) : null} 
              
           
            <View>
                {this.state.showRightAnswerScreen ? (
                  <View style={quizeStyles.answerScreen}>
                  <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/game%2Fhappy_girl.png?alt=media&token=de37e4bc-bde1-499c-94fd-71a91f7d8207'}} style={quizeStyles.image}/>
                  <Text style = { styles.smallBlackText}>
                   כל הכבוד! הרווחת 10 נקודות
                  </Text>
                  </View>
                ) : null}
            </View>

            <View>
                {this.state.showWrongAnswerScreen ? (
                  <View style={quizeStyles.answerScreen}>
                  <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/game%2Funhappy_girl.png?alt=media&token=46390353-c9e7-42ad-934b-6ea9b19a7eff'}} style={quizeStyles.image}/>
                  <Text style = { styles.smallBlackText}>
                  תשובה שגויה, אולי תצליח בחידה הבאה...
                  </Text>
                  </View>
                ) : null}
            </View>
            </View>
            </View>
        );
    }
}

export default Quize;

const quizeStyles = StyleSheet.create({

  answerScreen: {
    alignItems: 'center',
    alignContent: 'center',
    // backgroundColor: 'green'
  },
  
  answerContainer:{
    flex:1,
    width:'100%',
    alignItems: 'center',
    minHeight: 45,
    // backgroundColor: 'blue',
    
  },

  buttontextStyle: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
    paddingTop: 6,
    paddingBottom:6,
    color:'#777777',
    textAlign: 'center',
    
  },
  buttonStyle: {
    flex:1,
    alignSelf: 'stretch',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
    marginTop: 7,
    marginBottom: 7,
    marginLeft: 7,
    marginRight:7,
    borderRadius:5,
    elevation: 2,
  },

  image: {
    width:130,
    height: 130,
    resizeMode:'contain'
    
  },

  imageSection:{
    alignItems: 'center',
    alignContent: 'center',
    // marginTop: 7,
    // marginBottom: 7,
    marginLeft: 7,
    marginRight:7,
  },

  quizeImage:{
    width:'100%',
    height: 220,
    resizeMode:'contain',
    borderRadius:5
  }
  
  
})