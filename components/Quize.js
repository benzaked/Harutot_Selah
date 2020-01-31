import React ,  {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
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
          } else {
            this.setState({ showWrongAnswerScreen: true });
          }
      };  
      
      checkAnswer2 = () => {
        this.setState({ showQuizeScreen: false });
          if (this.state.RightAnswerNum == 2) {
            this.setState({ showRightAnswerScreen: true });
          } else {
            this.setState({ showWrongAnswerScreen: true });
          }
      };  
      
      checkAnswer3 = () => {
        this.setState({ showQuizeScreen: false });
          if (this.state.RightAnswerNum == 3) {
            this.setState({ showRightAnswerScreen: true });
          } else {
            this.setState({ showWrongAnswerScreen: true });
          }
      };  
      
      checkAnswer4 = () => {
        this.setState({ showQuizeScreen: false });
          if (this.state.RightAnswerNum == 4) {
            this.setState({ showRightAnswerScreen: true });
          } else {
            this.setState({ showWrongAnswerScreen: true });
          }
      }; 
      
      
    
    render(){
         return(
          <View>
            <View>
            {this.state.showQuizeScreen ? ( 
              <View>
               <Text>{this.state.QuizeContent}</Text>
                <Button title = {this.state.Answer1} onPress = {this.checkAnswer1} />
                <Button title = {this.state.Answer2} onPress = {this.checkAnswer2} />
                <Button title = {this.state.Answer3} onPress = {this.checkAnswer3} />
                <Button title = {this.state.Answer4} onPress = {this.checkAnswer4} />
                </View> 
                ) : null} 
               </View>
           
            <View >
                {this.state.showRightAnswerScreen ? (
                   <Text>
                   Good for you! you earned 10 points
                  </Text>
                ) : null}
            </View>

            <View >
                {this.state.showWrongAnswerScreen ? (
                    <Text>
                    Wrong answer, maybe next time...
                  </Text>
                ) : null}
            </View>
            </View>
        );
    }
}
 
export default Quize;

const styles = StyleSheet.create({
    buttonStyle:{
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "center"
      /*justifyContent: 'space-between'*/
    },
    backgroundImage:{
      flex: 1,
      width: '100%',
      height: '100%',
      /*justifyContent: "center",
      alignItems: "center",*/
      opacity: 0.5
  },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "orange"
  },
  logoContainer:{
      paddingTop: 50,
      alignItems: "center",
  },
  logoText: {
  
      fontSize: 24,
      fontWeight: '600',
      color: 'white'
  },
  
})