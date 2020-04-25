import React ,  {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button, TouchableOpacity } from 'react-native';


class Quize extends Component {
        constructor(props) {
          super(props);
           this.state = {
            
            QuizeID: props.QuizeID,
            numberOfSite: props.numberOfSite,
            QuizeContent : props.QuizeContent,
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
          <View style= { styles.container }>
            
            {this.state.showQuizeScreen ? ( 
            <View>
            <Text style = {styles.contentText}>{this.state.QuizeContent}</Text> 
              
              <View style={styles.answerContainer}>
                <TouchableOpacity style={styles.buttonStyle} onPress = {this.checkAnswer1}>
                   <Text style={styles.buttontextStyle}> {this.state.Answer1} </Text> 
                </TouchableOpacity>
                
              </View>  

              <View style={styles.answerContainer}>
                <TouchableOpacity style={styles.buttonStyle} onPress = {this.checkAnswer2}>
                   <Text style={styles.buttontextStyle}> {this.state.Answer2} </Text>
                </TouchableOpacity>
                
              </View>  

              <View style={styles.answerContainer}>
                <TouchableOpacity style={styles.buttonStyle} onPress = {this.checkAnswer3}>
                   <Text style={styles.buttontextStyle}> {this.state.Answer3} </Text> 
                </TouchableOpacity>
                
              </View>  

              <View style={styles.answerContainer}>
                
                <TouchableOpacity style={styles.buttonStyle} onPress = {this.checkAnswer4}>
                   <Text style={styles.buttontextStyle}> {this.state.Answer4} </Text> 
                </TouchableOpacity>
                
                </View> 
            </View>
            ) : null} 
              
           
            <View >
                {this.state.showRightAnswerScreen ? (
                  
                  <Text style = { styles.text}>
                   כל הכבוד! הרווחת 10 נקודות
                  </Text>

                ) : null}
            </View>

            <View >
                {this.state.showWrongAnswerScreen ? (
                    <Text style = { styles.text}>
                    תשובה שגויה, אולי תצליח בחידה הבאה...
                  </Text>
                ) : null}
            </View>
            </View>
        );
    }
}

export default Quize;

const styles = StyleSheet.create({
       
    container: {
      flex:1,
      paddingTop:4,
      paddingLeft: 4,
      paddingRight:4,
      paddingBottom:4,
      minHeight: 190,
      justifyContent: "center",
      alignItems: "stretch",
      backgroundColor: "#daedf9",
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      marginBottom: 3,
      marginLeft: 40,
      marginRight:40,
      elevation: 3,
      
  },

  answerContainer:{
    flex:1,
    width:'100%',
    alignItems: 'center',
    minHeight: 45,
    // backgroundColor: 'blue',
    
  },

  contentText:{
    flex:1,
    lineHeight: 35,
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center'
  },
  
  text:{
    
    flex:1,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center'
        
  },

  buttontextStyle: {
    fontSize: 15,
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
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    elevation: 2,
  }
  
  
})