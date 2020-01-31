 
import React,  { Component } from 'react';

import { StyleSheet, Text, View,TextInput,Button,Image,ImageBackground,} from 'react-native';
import Quize from './Quize'
import QuizeList from './QuizeList'



  export default class Story extends Component {
    constructor(props) {
      super(props);
      this.state = {
        numberOfSite: this.props.numberOfSite,
        showQuize: false, 
        storyTitle: this.props.storyTitle,
        story: this.props.story,
        Quizes: []
       
      };
    }
    createQuizData (){ //just to test 
      QuizesTemp =[]
      QuizesTemp.push( {
        key: 1,
        numberOfSite :3,
        QuizeContent :"how many legs to the camel?",
        Answer1:1,
        Answer2:2,
        Answer3:3,
        Answer4:4,
        RightAnswerNum:4
      })
      
      this.setState({Quizes : QuizesTemp})
    }

render() {
  this.createQuizData()
  const QuizesList =  this.Quizes.map((data, key) => {
    return(
    <Quize
    key={data.key}
    Story={data.Story}
    QuizeContent={data.QuizeContent}
    Answer1={data.Answer1}
    Answer2={data.Answer2}
    Answer3={data.Answer3}
    Answer4={data.Answer4}
    RightAnswerNum={data.RightAnswerNum}
    ></Quize>
    
            );
          });
    
return (
<View style = {styles.container } >
    <ImageBackground  style= { styles.backgroundImage } source={require('./assets/back.jpg')} >

      <View style= { styles.logoContainer }>
        <Text style = { styles.logoText }>
          {this.props.storyTitle}
        </Text>
        <Text style = { styles.StoryText }>
          {this.props.story}
        </Text>
      </View>
      <View style={styles.buttomStyle} >
      {this.state.showQuize ? (
          {QuizesList}
        ) : null}
      
      <Button title = "המשך לחידה" onPress = {this.ShowHideQuize} />
      
      </View>
      </ImageBackground>
    </View>
      )}
 ShowHideQuize = () => {
  if (this.state.showQuize == true) {
    this.setState({ showQuize: false });
  } else {
    this.setState({ showQuize: true });
  }
};
}
const styles = StyleSheet.create({
  buttomStyle:{
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
StoryText:{

    fontSize: 15,
    fontWeight: '600',
    color: 'white'
}
});
  
  

