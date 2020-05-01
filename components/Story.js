 
import React,  { Component } from 'react';

import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from './Header'
import QuizeList from './QuizeList'
import styles from "../styles/styles";
import global from './global'
 
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
      <View style= { storyStyles.titleContainer }>
        <Text style = { styles.medumBlackText }>
          {this.state.storyTitle}
        </Text>
        </View>
        <View style= {storyStyles.contentContainer }> 
        <Text style = { styles.smallBlackText }>
          {this.state.story}
        </Text>
        </View>
        
      <View>
      {!(this.state.showQuize) ? (      
        <TouchableOpacity style={styles.darkButtonStyleStretch} onPress = {this.ShowfuncQuize}>
           <Text style={styles.darkButtonText}> המשך לחידון </Text>
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

const storyStyles = StyleSheet.create({

      
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

});
  
  

