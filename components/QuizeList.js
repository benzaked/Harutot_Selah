import React ,  {Component} from 'react';
import { Text, View,Image, Alert,TouchableOpacity, StyleSheet } from 'react-native';
import Quize from './Quize'
import firebase from 'firebase'
import {firebaseConfig} from '../config'
import global from './global'
import Modal from 'react-native-modal';
import styles from "../styles/styles";

class QuizeList extends Component {
        constructor(props) {
          super(props);
         
           this.state = {
            numberOfSite: props.numberOfSite,
            quizeList:[],
            numOfAnswersFromUser:0,
            numOfRightAnswers:0,
            isQuitModalVisible: false,
            isEndGameModalVisible: false,
            isScoreModalVisible: false,
            

        };
        if (!firebase.apps.length) {firebase.initializeApp(firebaseConfig)};
    }

    toggleQuitModal = () => {
      this.setState({isQuitModalVisible: !this.state.isQuitModalVisible});
    };

    toggleEndGameModal = () => {
      this.setState({isEndGameModalVisible: !this.state.isEndGameModalVisible});
    };

    toggleScoreModal = () => {
      this.setState({isScoreModalVisible: !this.state.isScoreModalVisible});
    };
    
    handler=()=>{
      this.setState({numOfAnswersFromUser: this.state.numOfAnswersFromUser+1})
    }//setting the numOfAnswersFromUser from the child every time thr user clicks an answer so we wil know when the quizeList is done

    handlerRight=()=>{
      global.score=global.score+10;
      this.props.handlerRight();
      this.setState({numOfRightAnswers: this.state.numOfRightAnswers+1});
    }//setting the numOfRightAnswers from the child every time thr user selects right answer 
    
    //creating the specific list with the numberOfSite from the dataBase
    componentDidMount(){
    const quizesRef = firebase.database().ref('Quizes');
    this.listenForQuizes(quizesRef);//taking the data from database
    // this.temp();//inserting fake data to database
    
    };//componentDidMount

    // temp = () =>{
        
    //     firebase.database().ref('/Quizes/' + 1).set({
    //         QuizeID:1,
    //         numberOfSite:3,
    //         QuizeContent :"כמה רגליים יש לגמל?",
    //         Answer1:"1",
    //         Answer2:"2",
    //         Answer3:"3",
    //         Answer4:"4",
    //         RightAnswerNum:4
    //     })
        
    //     firebase.database().ref('/Quizes/' + 2).set({
    //         QuizeID:2,
    //         numberOfSite:3,
    //         QuizeContent :"איך מכנים את ציורי הסלע ומדוע?",
    //         Answer1:"1",
    //         Answer2:"2",
    //         Answer3:"יש המכנים את ציורי הסלע כשפת המדבר מאחר והם מאפשרים הצצה לעולמם של אלו שחיים במדבר מתקופת עתיקות ועד היום",
    //         Answer4:"4",
    //         RightAnswerNum:3
    //     })
    //     }//temp - inserting fake data to database
    
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
          global.totalNumberOfQiueses=global.totalNumberOfQiueses+this.state.quizeList.length;
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
          
          this.toggleScoreModal();
          //  return (
          //   Alert.alert(
          //      'כל הכבוד!',
          //   ' סיימת לענות על החידון באתר מספר '+this.state.numberOfSite+', '+
          //   'צברת בשלב זה '+this.state.numOfRightAnswers*10+' נקודות ',
          //   [
          //     {text: 'אישור', onPress:  this.props.QuizeDone()},
          //   ],
          //   { cancelable: false }
          // ))
        } 

        else {

          this.toggleQuitModal();

          // return (
          //   Alert.alert(
          //   'טרם סיימת לענות על כל החידות בשלב זה',
          //   [
          //     {text: 'אישור', onPress: () => console.log('OK Pressed')},
          //   ],
          //   { cancelable: false }
          // ))
        }
      }//checkIsQuizeOver

      moveToMap = ()=>{
        this.props.QuizeDone()
        this.setState({isEndGameModalVisible: false});
        this.setState({isQuitModalVisible: false});
      }

      checkLastSite= ()=>{
        this.setState({isScoreModalVisible: false});
        // if((this.state.numberOfSite==4 && global.firtSiteVisit==1) ||(this.state.numberOfSite==1 && global.firtSiteVisit==4 )){ //real if
        if(global.firtSiteVisit==3 ){ // check end modal

        
          this.toggleEndGameModal();
          global.messege="להתראות, מקווה שנהנת"
        }

        else{
          this.props.QuizeDone()
        }
      }
          
    render(){
        return(
         <View>
         
        {this.renderList()}
        <TouchableOpacity style={styles.darkButtonStyleStretch} onPress = {this.checkIsQuizeOver}>
          <Text style={styles.darkButtonText}> לחץ כאן להמשך המשחק </Text>
        </TouchableOpacity>
        
         <Modal isVisible={this.state.isQuitModalVisible}>
          <View style={styles.lightBlueContainer}>
            <View style={{alignItems: "center"}}>
            <Text style={styles.medumBlackText}>אופס!</Text>
            <Text style={styles.smallBlackText}>
            {"\n"}
            טרם סיימת לענות על כל החידות בשלב זה, האם ברצונך לעזוב בכל זאת?
          </Text>
          <Image source={require('../assets/leave_quize.png')} style={styles.modalImage}/>
          <View style={{width: '100%', height: 50}}>
          <TouchableOpacity style={quizeStyles.darkButtonStyleStretch} onPress = {() => this.toggleQuitModal()}>
          <Text style={styles.darkButtonText}> לא, המשך בחידון </Text>
          </TouchableOpacity>
          </View>
          <View style={{ width: '100%', height: 50, }}>
          <TouchableOpacity style={quizeStyles.darkButtonStyleStretch} onPress = {() =>  this.moveToMap()}>
          <Text style={styles.darkButtonText}> כן, צא בכל זאת </Text>
          </TouchableOpacity>
          </View>
          </View></View>
          </Modal> 

          <Modal isVisible={this.state.isEndGameModalVisible}>
          <View style={quizeStyles.endGameModal}>
            
            <Text style={styles.medumBlackText}>כל הכבוד!
            {"\n"}
             ביקרת בכל אתרי המסלול</Text>
            <Text style={styles.smallBlackText}>
            {"\n"}
           הרווחת {global.score} נקודות מתוך סך של {global.totalNumberOfQiueses*10} נקודות
           {"\n"}
           נתראה בסיבוב הבא :)
          </Text>
          <Image source={require('../assets/end_Banner.png')} style={styles.modalImage}/>
          <TouchableOpacity style={styles.darkButtonStyle} onPress =  {() =>  this.moveToMap()}>
          <Text style={styles.darkButtonText}> אישור </Text>
          </TouchableOpacity>
          </View>
          </Modal> 

          

          <Modal isVisible={this.state.isScoreModalVisible}>
          <View style={styles.lightBlueContainer}>
            
            <View style={{alignItems: "center"}}>
            <Text style={styles.medumBlackText}>כל הכבוד!</Text>
            <Text style={styles.smallBlackText}>
            {"\n"}
            סיימת לענות על החידון באתר מספר {this.state.numberOfSite}, צברת בשלב זה {this.state.numOfRightAnswers*10} נקודות          
          </Text>
          <Image source={require('../assets/quize_score.png')} style={styles.modalImage}/>
          
          <TouchableOpacity style={styles.darkButtonStyle} onPress = {() =>  this.checkLastSite()}>
          <Text style={styles.darkButtonText}> אישור </Text>
          </TouchableOpacity>
          </View></View>
          </Modal>
          
          </View>
        );
    }//render
}//class

const quizeStyles = StyleSheet.create({
  darkButtonStyleStretch:{
    flex:1,
    justifyContent: "center",
    alignSelf: 'stretch',
    backgroundColor: "#526674",
    marginTop:7,
    marginBottom:7,
    marginLeft: 7,
    marginRight:7,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    
  },

  endGameModal: {
        
        // flex:1,
        // justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        width:300,
        paddingTop:4,
        paddingLeft: 4,
        paddingRight:4,
        backgroundColor: "#abd6f4",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        marginBottom: 3,
        marginLeft: 40,
        marginRight:40,
        elevation: 3,
  }
})


export default QuizeList;