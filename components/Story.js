 
import React,  { Component } from 'react';

import { StyleSheet, Text, View,TextInput,Button,Image,ImageBackground,ScrollView, TouchableOpacity} from 'react-native';
import Header from './Header'
import QuizeList from './QuizeList'
 
export default class Story extends Component {
    constructor(props) {
      super(props);
      this.state = {
        numberOfSite: this.props.numberOfSite,
        showQuize: false, 
        storyTitle: this.props.storyTitle,
        story: this.props.story,
       
      };
      
    }//constructor
 
    QuizeDone = () => {
    this.props.QuizeDone()
    }
   
    handlerRight=()=>{
      this.props.handlerRight()
    }


render() {
  
return (

<View>
      <Header content={' הסיפור של אתר מספר ' + this.props.numberOfSite}/>
      <View style= { styles.titleContainer }>
        <Text style = { styles.StoryTitleText }>
          {this.state.storyTitle}
        </Text>
        </View>
        <View style= {styles.contentContainer }> 
        <Text style = { styles.StoryText }>
          {this.state.story}
        </Text>
        </View>
        
      <View>
      {!(this.state.showQuize) ? (      
        <TouchableOpacity style={styles.buttonStyle} onPress = {this.ShowfuncQuize}>
           <Text style={styles.buttontextStyle}> המשך לחידון </Text>
        </TouchableOpacity>
        ) : null}
      {this.state.showQuize ? (
          <QuizeList
          numberOfSite={this.state.numberOfSite}
          QuizeDone = {this.QuizeDone}
          handlerRight={this.handlerRight}

          ></QuizeList>
        ) : null}
      </View>
</View>
    
      )} //render

 ShowfuncQuize = () => {
    this.setState({ showQuize: true });
};


}//class

const styles = StyleSheet.create({

      
 titleContainer: {
    paddingLeft: 4,
    paddingRight:4,
    minHeight:50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#daedf9",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: 3,
    marginLeft: 40,
    marginRight:40,
    elevation: 3,
},

contentContainer: {
  paddingTop: 4,
  paddingBottom:4,
  paddingLeft: 4,
  paddingRight:4,
  minHeight: 200,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#daedf9",
  borderBottomRightRadius: 20,
  borderBottomLeftRadius: 20,
  marginBottom: 3,
  marginLeft: 40,
  marginRight:40,
  elevation: 3,
  
},

StoryTitleText: {
    lineHeight: 33,
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
},
StoryText:{
    
    lineHeight: 20,
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    
},
buttontextStyle: {
  fontSize: 22,
  fontWeight: '900',
  paddingTop: 6,
  paddingBottom:6,
  color:'white',
  textAlign: 'center',
  fontWeight: '900',
},
buttonStyle: {
  
  flex:1,
  alignSelf: 'stretch',
  backgroundColor: "#526674",
  marginTop:7,
  marginBottom:7,
  marginLeft: 40,
  marginRight:40,
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,
  borderBottomRightRadius: 20,
  borderBottomLeftRadius: 20,
  
}
});
  
  

