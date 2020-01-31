import React ,  {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import Quize from './Quize'
import firebase from 'firebase'
import {firebaseConfig} from '../config'
class QuizeList extends Component {
        constructor(props) {
          super(props);
           this.state = {
            numberOfSite: props.numberOfSite,
            quizeList:[]
        };
        if (!firebase.apps.length) {firebase.initializeApp(firebaseConfig)};
    }  
    
    //creating the specific list with the numberOfSite from the dataBase
    componentDidMount(){

    const commentsRef = firebase.database().ref('Quizes');
    this.listenForQuizes(commentsRef);
    
    };//componentDidMount

    temp = () =>{
        
        firebase.database().ref('/Quizes/' + 1).set({
            QuizeID:1,
            numberOfSite:3,
            QuizeContent :"how many legs to the camel?",
            Answer1:"1",
            Answer2:"2",
            Answer3:"3",
            Answer4:"4",
            RightAnswerNum:4
        })
        //   ).then(function (snapshot){
        //     // console.log('Snapshot', snapshot);
        //   });
        firebase.database().ref('/Quizes/' + 2).set({
            QuizeID:2,
            numberOfSite:3,
            QuizeContent :"how many pines Tal Like?",
            Answer1:"1",
            Answer2:"2",
            Answer3:"8",
            Answer4:"4",
            RightAnswerNum:3
        })
        }//temp
    
    listenForQuizes = (commentsRef) => {
        
        commentsRef.on('value', (dataSnapshot) => {
          var aux = [];
          dataSnapshot.forEach((child) => {
            aux.push({
              QuizeID:child.val().QuizeID,
              numberOfSite:child.val().numberOfSite,
              QuizeContent:child.val().QuizeContent,
              Answer1:child.val().Answer1,
              Answer2:child.val().Answer2,
              Answer3:child.val().Answer3,
              Answer4:child.val().Answer4,
              RightAnswerNum:child.val().RightAnswerNum
            });
          });
          this.setState({quizeList: aux});
        });
      };  // listenForQuizes
    

    renderList = () => {
        console.log('################################################# Im here')
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
                 
                  ></Quize>
             
                  )}
                ))
                 }
    render(){
        return(
         <View>
             {this.renderList()}
         </View>
        );
    }
}
 
export default QuizeList;