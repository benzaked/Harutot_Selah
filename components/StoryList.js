 
import React,  { Component } from 'react';

import { StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import Story from './Story'
import firebase from 'firebase'
import { NavigationActions,StackActions } from "react-navigation";
import GameBanner from './GameBanner'
import global from './global'

export default class StoryList extends Component {
    constructor(props) {
      global.messege='יש לנו כמה חידות מעניינות בשבילך...'
      super(props);
      this.state = {
        numberOfSite: this.props.navigation.state.params.pageNo,
        stories: [],
        QuizeDone:false,
        QuizeStart:false,
        scoreQuize:0
               
      };
    }//constructor

    handlerRight=()=>{
      this.setState({scoreQuize: this.state.scoreQuize+10})
    }

    QuizeStart = () =>{
      global.messege='על כל תשובה נכונה תזכה ב10 נקודות'
      this.setState({ QuizeStart :true })
    }

    QuizeDone = () =>{
      this.setState({ QuizeDone :true })
      // this.props.navigation.navigate('Map')  
      const pushAction = StackActions.push({
        routeName: 'Map',
        });
        this.props.navigation.dispatch(pushAction); 
    }//QuizeDone

    componentDidMount(){
      
      const storiesRef = firebase.database().ref('Stories');
      this.listenForStories(storiesRef);//taking the data from database
      // this.temp();//inserting fake data to database
      if(global.firtSiteVisit==-1){
        global.firtSiteVisit=this.state.numberOfSite
      }
      
    };//componentDidMount

    // temp = () =>{
        
    // firebase.database().ref('/Stories/' + 1).set({
    //       numberOfSite:1,
    //       storyTitle :"פארק חרותות הסלע",
    //       story: "מצפור ליפא גל נמצא באזור הר הנגב, בהר מחיה, והוא בגובה של 600 מ' מעל פני הים. המצפור הוקם לזכרו של ליפא גל אשר היה איש קקל במשך רוב שנות חייו ונהרג בתאונה מצערת. מן המצפור נשקף נוף מרהיב הצופה אל עבר עתיקות עבדת והנגב הצפוני. בנוסף, הוא גם מהווה נקודת יציאה לכמה מסלולי טיול קלילים. בדרכנו נפגוש את חרותות הסלע שהם ציורי סלע עתיקים ומיוחדים. יש המכנים את ציורי הסלע כ שפת המדבר מאחר והם מאפשרים הצצה לעולמם של אלו שחיים במדבר מתקופת עתיקות ועד היום."
    //   })
     
    // firebase.database().ref('/Stories/' + 2).set({
    //      numberOfSite:2,
    //      storyTitle :"פארק חרותות הסלע",
    //      story: "מצפור ליפא גל נמצא באזור הר הנגב, בהר מחיה, והוא בגובה של 600 מ' מעל פני הים. המצפור הוקם לזכרו של ליפא גל אשר היה איש קקל במשך רוב שנות חייו ונהרג בתאונה מצערת. מן המצפור נשקף נוף מרהיב הצופה אל עבר עתיקות עבדת והנגב הצפוני. בנוסף, הוא גם מהווה נקודת יציאה לכמה מסלולי טיול קלילים. בדרכנו נפגוש את חרותות הסלע שהם ציורי סלע עתיקים ומיוחדים. יש המכנים את ציורי הסלע כ שפת המדבר מאחר והם מאפשרים הצצה לעולמם של אלו שחיים במדבר מתקופת עתיקות ועד היום."
    //   })

    // firebase.database().ref('/Stories/' + 3).set({
    //     numberOfSite:3,
    //     storyTitle :"פארק חרותות הסלע",
    //     story: "מצפור ליפא גל נמצא באזור הר הנגב, בהר מחיה, והוא בגובה של 600 מ' מעל פני הים. המצפור הוקם לזכרו של ליפא גל אשר היה איש קקל במשך רוב שנות חייו ונהרג בתאונה מצערת. מן המצפור נשקף נוף מרהיב הצופה אל עבר עתיקות עבדת והנגב הצפוני. בנוסף, הוא גם מהווה נקודת יציאה לכמה מסלולי טיול קלילים. בדרכנו נפגוש את חרותות הסלע שהם ציורי סלע עתיקים ומיוחדים. יש המכנים את ציורי הסלע כ שפת המדבר מאחר והם מאפשרים הצצה לעולמם של אלו שחיים במדבר מתקופת עתיקות ועד היום."
    //   })

    // firebase.database().ref('/Stories/' + 4).set({
    //   numberOfSite:4,
    //   storyTitle :"פארק חרותות הסלע",
    //   story: "מצפור ליפא גל נמצא באזור הר הנגב, בהר מחיה, והוא בגובה של 600 מ' מעל פני הים. המצפור הוקם לזכרו של ליפא גל אשר היה איש קקל במשך רוב שנות חייו ונהרג בתאונה מצערת. מן המצפור נשקף נוף מרהיב הצופה אל עבר עתיקות עבדת והנגב הצפוני. בנוסף, הוא גם מהווה נקודת יציאה לכמה מסלולי טיול קלילים. בדרכנו נפגוש את חרותות הסלע שהם ציורי סלע עתיקים ומיוחדים. יש המכנים את ציורי הסלע כ שפת המדבר מאחר והם מאפשרים הצצה לעולמם של אלו שחיים במדבר מתקופת עתיקות ועד היום."
    //   })

    // firebase.database().ref('/Stories/' + 5).set({
    //     numberOfSite:5,
    //     storyTitle :"פארק חרותות הסלע",
    //     story: "מצפור ליפא גל נמצא באזור הר הנגב, בהר מחיה, והוא בגובה של 600 מ' מעל פני הים. המצפור הוקם לזכרו של ליפא גל אשר היה איש קקל במשך רוב שנות חייו ונהרג בתאונה מצערת. מן המצפור נשקף נוף מרהיב הצופה אל עבר עתיקות עבדת והנגב הצפוני. בנוסף, הוא גם מהווה נקודת יציאה לכמה מסלולי טיול קלילים. בדרכנו נפגוש את חרותות הסלע שהם ציורי סלע עתיקים ומיוחדים. יש המכנים את ציורי הסלע כ שפת המדבר מאחר והם מאפשרים הצצה לעולמם של אלו שחיים במדבר מתקופת עתיקות ועד היום."
    //     })

    // firebase.database().ref('/Stories/' + 6).set({
    //     numberOfSite:6,
    //     storyTitle :"פארק חרותות הסלע",
    //     story: "מצפור ליפא גל נמצא באזור הר הנגב, בהר מחיה, והוא בגובה של 600 מ' מעל פני הים. המצפור הוקם לזכרו של ליפא גל אשר היה איש קקל במשך רוב שנות חייו ונהרג בתאונה מצערת. מן המצפור נשקף נוף מרהיב הצופה אל עבר עתיקות עבדת והנגב הצפוני. בנוסף, הוא גם מהווה נקודת יציאה לכמה מסלולי טיול קלילים. בדרכנו נפגוש את חרותות הסלע שהם ציורי סלע עתיקים ומיוחדים. יש המכנים את ציורי הסלע כ שפת המדבר מאחר והם מאפשרים הצצה לעולמם של אלו שחיים במדבר מתקופת עתיקות ועד היום."
    //     })
    // firebase.database().ref('/Stories/' + 7).set({
    //       numberOfSite:7,
    //       storyTitle :"פארק חרותות הסלע",
    //       story: "מצפור ליפא גל נמצא באזור הר הנגב, בהר מחיה, והוא בגובה של 600 מ' מעל פני הים. המצפור הוקם לזכרו של ליפא גל אשר היה איש קקל במשך רוב שנות חייו ונהרג בתאונה מצערת. מן המצפור נשקף נוף מרהיב הצופה אל עבר עתיקות עבדת והנגב הצפוני. בנוסף, הוא גם מהווה נקודת יציאה לכמה מסלולי טיול קלילים. בדרכנו נפגוש את חרותות הסלע שהם ציורי סלע עתיקים ומיוחדים. יש המכנים את ציורי הסלע כ שפת המדבר מאחר והם מאפשרים הצצה לעולמם של אלו שחיים במדבר מתקופת עתיקות ועד היום."
    //       })




    //   }//temp- writing to te database
  
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
          handlerRight={this.handlerRight}
          QuizeStart={this.QuizeStart}
          ></Story>
       
            )}
          ))
}//renderList

render() {
  return (
    
    <View style={styles.main}>
    <ScrollView style={styles.viewStory}>
     
     {this.renderList()} 
     
    </ScrollView>
    <GameBanner showScore={true}/>
    </View>
)}
 

}//class


const styles = {

  main:{
    flex:1,
    backgroundColor: "#abd6f4", 
  },
  
  viewStory: {
   position: 'absolute',
   top: 0,
   right: 0,   
   height: global.gameHeight,
   backgroundColor: "#abd6f4",  
  }
};

