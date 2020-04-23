 
import React,  { Component } from 'react';

import { StyleSheet, Text, View,TextInput,Button,Image,ImageBackground, ScrollView} from 'react-native';
import Story from './Story'
import firebase from 'firebase'
import {firebaseConfig} from '../config'
import { NavigationActions,StackActions } from "react-navigation";

export default class StoryList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        numberOfSite: this.props.navigation.state.params.pageNo,
        stories: [],
        QuizeDone:false
       
      };
      if (!firebase.apps.length) {firebase.initializeApp(firebaseConfig)};
    }//constructor
    QuizeDone = () =>{
      this.setState({
      QuizeDone :true
      })
      // this.props.navigation.navigate('Map')  
      const pushAction = StackActions.push({
        routeName: 'Map',
        });
        this.props.navigation.dispatch(pushAction); 
    }
    componentDidMount(){
      const storiesRef = firebase.database().ref('Stories');
      this.listenForStories(storiesRef);//taking the data from database
      this.temp();//inserting fake data to database
    };//componentDidMount

    temp = () =>{
        
      firebase.database().ref('/Stories/' + 1).set({
          numberOfSite:1,
          storyTitle :"story title 1",
          story: "story 1"
      })
     
      firebase.database().ref('/Stories/' + 2).set({
          numberOfSite:2,
          storyTitle :"story title 2",
          story: "story 2"
      })

      firebase.database().ref('/Stories/' + 3).set({
        numberOfSite:3,
        storyTitle :"פארק חרותות הסלע",
        story: "מצפור ליפא גל נמצא באזור הר הנגב, בהר מחיה, והוא בגובה של 600 מ' מעל פני הים. המצפור הוקם לזכרו של ליפא גל אשר היה איש קקל במשך רוב שנות חייו ונהרג בתאונה מצערת. מן המצפור נשקף נוף מרהיב הצופה אל עבר עתיקות עבדת והנגב הצפוני. בנוסף, הוא גם מהווה נקודת יציאה לכמה מסלולי טיול קלילים. בדרכנו נפגוש את חרותות הסלע שהם ציורי סלע עתיקים ומיוחדים. יש המכנים את ציורי הסלע כ שפת המדבר מאחר והם מאפשרים הצצה לעולמם של אלו שחיים במדבר מתקופת עתיקות ועד היום."
    })

    firebase.database().ref('/Stories/' + 4).set({
      numberOfSite:4,
      storyTitle :"story title 4",
      story: "story 4"
  })
      }//temp- writing to te database
  
  listenForStories = (storiesRef) => {
      
    storiesRef.on('value', (dataSnapshot) => {
        var aux = [];
        dataSnapshot.forEach((child) => {
          child.val().numberOfSite == this.state.numberOfSite ?
          aux.push({
            numberOfSite:child.val().numberOfSite,
            storyTitle:child.val().storyTitle,
            story:child.val().story
          }) : null
        
      });
        this.setState({stories: aux});
       
      });
    };  // listenForStories-data loading to the stories state
 
    renderList = () => {
        
      return(
      this.state.stories.map((data,key,val) => {
          return (
          <Story
          key={key}
          numberOfSite={data.numberOfSite}
          storyTitle={data.storyTitle}
          story={data.story}
          QuizeDone = {this.QuizeDone}


          ></Story>
       
            )}
          ))
}//renderList

render() {
  return (
    <View>
    <ScrollView>
     
     {this.renderList()} 
     
    </ScrollView>
    </View>
)}
 
}//class

