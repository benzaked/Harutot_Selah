import React ,  {Component} from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity } from 'react-native';
import Quize from './Quize'
import firebase from 'firebase'
import {firebaseConfig} from '../config'
import { NavigationActions,StackActions } from "react-navigation";
import Map from './Map'
class QuizeList extends Component {
        constructor(props) {
          super(props);
         
           this.state = {
            numberOfSite: props.numberOfSite,
            quizeList:[],
            numOfAnswersFromUser:0,
            numOfRightAnswers:0,
            

        };
        if (!firebase.apps.length) {firebase.initializeApp(firebaseConfig)};
    }
    
    handler=()=>{
      this.setState({numOfAnswersFromUser: this.state.numOfAnswersFromUser+1})
    }//setting the numOfAnswersFromUser from the child every time thr user clicks an answer so we wil know when the quizeList is done

    handlerRight=()=>{
      this.setState({numOfRightAnswers: this.state.numOfRightAnswers+1})
    }//setting the numOfRightAnswers from the child every time thr user selects right answer 
    
    //creating the specific list with the numberOfSite from the dataBase
    componentDidMount(){
    const quizesRef = firebase.database().ref('Quizes');
    this.listenForQuizes(quizesRef);//taking the data from database
    this.temp();//inserting fake data to database
    };//componentDidMount

    temp = () =>{
        
        firebase.database().ref('/Quizes/' + 1).set({
            QuizeID:1,
            numberOfSite:3,
            QuizeContent :"כמה רגליים יש לגמל?",
            Answer1:"1",
            Answer2:"2",
            Answer3:"3",
            Answer4:"4",
            RightAnswerNum:4
        })
        
        firebase.database().ref('/Quizes/' + 2).set({
            QuizeID:2,
            numberOfSite:3,
            QuizeContent :"איך מכנים את ציורי הסלע ומדוע?",
            Answer1:"1",
            Answer2:"2",
            Answer3:"יש המכנים את ציורי הסלע כשפת המדבר מאחר והם מאפשרים הצצה לעולמם של אלו שחיים במדבר מתקופת עתיקות ועד היום",
            Answer4:"4",
            RightAnswerNum:3
        })
        }//temp - inserting fake data to database
    
    listenForQuizes = (quizesRef) => {
        
      quizesRef.on('value', (dataSnapshot) => {
          var aux = [];
          dataSnapshot.forEach((child) => {
            child.val().numberOfSite == this.state.numberOfSite ? 
              aux.push({
              QuizeID:child.val().QuizeID,
              numberOfSite:child.val().numberOfSite,
              QuizeContent:child.val().QuizeContent,
              Answer1:child.val().Answer1,
              Answer2:child.val().Answer2,
              Answer3:child.val().Answer3,
              Answer4:child.val().Answer4,
              RightAnswerNum:child.val().RightAnswerNum
            }) : null
          
        });
          this.setState({quizeList: aux});
          
        });
      };  // listenForQuizes-data loading to the quizeList state
    
      renderList = () => {
        
            return(
            this.state.quizeList.map((data,key,val) => {
                return (
                <Quize
                key={key}
                QuizeID={data.QuizeID}
                numberOfSite={data.numberOfSite}
                QuizeContent={data.QuizeContent}
                Answer1={data.Answer1}
                Answer2={data.Answer2}
                Answer3={data.Answer3}
                Answer4={data.Answer4}
                RightAnswerNum={data.RightAnswerNum}
                handler={this.handler}
                handlerRight={this.handlerRight}
                ></Quize>
             
                  )}
                ))
      }//renderList
 
     
      checkIsQuizeOver = () =>{
        if (this.state.numOfAnswersFromUser==this.state.quizeList.length){
          
          return (
            Alert.alert(
               'כל הכבוד!!',
            ' סיימת לענות על החידון באתר מספר '+this.state.numberOfSite+', '+
            'צברת בשלב זה '+this.state.numOfRightAnswers*10+' נקודות ',
            [
              {text: 'אישור', onPress:  this.props.QuizeDone()},
            ],
            { cancelable: false }
          ))
        } 

        else 
          return (alert(
            'טרם סיימת לענות על כל החידות בשלב זה',
            [
              {text: 'אישור', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          ))
      }
          
    render(){
        return(
         <View>
          
        {this.renderList()}
                
        <TouchableOpacity style={styles.buttonStyle} onPress = {this.checkIsQuizeOver}>
          <Text style={styles.buttontextStyle}> לחץ כאן להמשך המשחק </Text>
        </TouchableOpacity>
          
         </View>
        );
    }//render
}//class

const styles = StyleSheet.create({
  buttontextStyle: {
    fontSize: 25,
    fontWeight: '900',
    paddingTop: 6,
    paddingBottom:6,
    color:'white',
    textAlign: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: '#62b1ea',
  },
  buttonStyle: {
    
    flex:1,
    alignSelf: 'stretch',
    backgroundColor: "#a5d3f3",
    marginBottom:7,
    marginLeft: 40,
    marginRight:40,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  }
 })
 
export default QuizeList;