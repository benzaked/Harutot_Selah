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

//     temp = () =>{
//       firebase.database().ref('/Quizes/' + 1).set({
//         QuizeID:1,
//         numberOfSite:1,
//         QuizeContent :"כמה רגליים יש לגמל?",
//         Answer1:"1",
//         Answer2:"2",
//         Answer3:"3",
//         Answer4:"4",
//         RightAnswerNum:4
//     })
    
//     firebase.database().ref('/Quizes/' + 2).set({
//         QuizeID:2,
//         numberOfSite:1,
//         QuizeContent :"איך מכנים את ציורי הסלע ומדוע?",
//         Answer1:"1",
//         Answer2:"2",
//         Answer3:"יש המכנים את ציורי הסלע כשפת המדבר מאחר והם מאפשרים הצצה לעולמם של אלו שחיים במדבר מתקופת עתיקות ועד היום",
//         Answer4:"4",
//         RightAnswerNum:3
//     })

//     firebase.database().ref('/Quizes/' + 3).set({
//       QuizeID:3,
//       numberOfSite:2,
//       QuizeContent :"כמה רגליים יש לגמל?",
//       Answer1:"1",
//       Answer2:"2",
//       Answer3:"3",
//       Answer4:"4",
//       RightAnswerNum:4
//   })
  
//   firebase.database().ref('/Quizes/' + 4).set({
//       QuizeID:4,
//       numberOfSite:2,
//       QuizeContent :"איך מכנים את ציורי הסלע ומדוע?",
//       Answer1:"1",
//       Answer2:"2",
//       Answer3:"יש המכנים את ציורי הסלע כשפת המדבר מאחר והם מאפשרים הצצה לעולמם של אלו שחיים במדבר מתקופת עתיקות ועד היום",
//       Answer4:"4",
//       RightAnswerNum:3
//   })

//   firebase.database().ref('/Quizes/' + 5).set({
//     QuizeID:5,
//     numberOfSite:3,
//     QuizeContent :"כמה רגליים יש לגמל?",
//     Answer1:"1",
//     Answer2:"2",
//     Answer3:"3",
//     Answer4:"4",
//     RightAnswerNum:4
// })

// firebase.database().ref('/Quizes/' + 6).set({
//     QuizeID:6,
//     numberOfSite:3,
//     QuizeContent :"איך מכנים את ציורי הסלע ומדוע?",
//     Answer1:"1",
//     Answer2:"2",
//     Answer3:"יש המכנים את ציורי הסלע כשפת המדבר מאחר והם מאפשרים הצצה לעולמם של אלו שחיים במדבר מתקופת עתיקות ועד היום",
//     Answer4:"4",
//     RightAnswerNum:3
// })

// firebase.database().ref('/Quizes/' + 7).set({
//   QuizeID:7,
//   numberOfSite:4,
//   QuizeContent :"כמה רגליים יש לגמל?",
//   Answer1:"1",
//   Answer2:"2",
//   Answer3:"3",
//   Answer4:"4",
//   RightAnswerNum:4
// })

// firebase.database().ref('/Quizes/' + 8).set({
//   QuizeID:8,
//   numberOfSite:4,
//   QuizeContent :"איך מכנים את ציורי הסלע ומדוע?",
//   Answer1:"1",
//   Answer2:"2",
//   Answer3:"יש המכנים את ציורי הסלע כשפת המדבר מאחר והם מאפשרים הצצה לעולמם של אלו שחיים במדבר מתקופת עתיקות ועד היום",
//   Answer4:"4",
//   RightAnswerNum:3
// })

// firebase.database().ref('/Quizes/' + 9).set({
//     QuizeID:9,
//     numberOfSite:5,
//     QuizeContent :"כמה רגליים יש לגמל?",
//     Answer1:"1",
//     Answer2:"2",
//     Answer3:"3",
//     Answer4:"4",
//     RightAnswerNum:4
// })

// firebase.database().ref('/Quizes/' + 10).set({
//     QuizeID:10,
//     numberOfSite:5,
//     QuizeContent :"איך מכנים את ציורי הסלע ומדוע?",
//     Answer1:"1",
//     Answer2:"2",
//     Answer3:"יש המכנים את ציורי הסלע כשפת המדבר מאחר והם מאפשרים הצצה לעולמם של אלו שחיים במדבר מתקופת עתיקות ועד היום",
//     Answer4:"4",
//     RightAnswerNum:3
// })


// firebase.database().ref('/Quizes/' + 11).set({
//   QuizeID:11,
//   numberOfSite:6,
//   QuizeContent :"כמה רגליים יש לגמל?",
//   Answer1:"1",
//   Answer2:"2",
//   Answer3:"3",
//   Answer4:"4",
//   RightAnswerNum:4
// })

// firebase.database().ref('/Quizes/' + 12).set({
//   QuizeID:12,
//   numberOfSite:6,
//   QuizeContent :"איך מכנים את ציורי הסלע ומדוע?",
//   Answer1:"1",
//   Answer2:"2",
//   Answer3:"יש המכנים את ציורי הסלע כשפת המדבר מאחר והם מאפשרים הצצה לעולמם של אלו שחיים במדבר מתקופת עתיקות ועד היום",
//   Answer4:"4",
//   RightAnswerNum:3
// })


// firebase.database().ref('/Quizes/' + 13).set({
//   QuizeID:13,
//   numberOfSite:7,
//   QuizeContent :"כמה רגליים יש לגמל?",
//   Answer1:"1",
//   Answer2:"2",
//   Answer3:"3",
//   Answer4:"4",
//   RightAnswerNum:4
// })

// firebase.database().ref('/Quizes/' + 14).set({
//   QuizeID:14,
//   numberOfSite:7,
//   QuizeContent :"איך מכנים את ציורי הסלע ומדוע?",
//   Answer1:"1",
//   Answer2:"2",
//   Answer3:"יש המכנים את ציורי הסלע כשפת המדבר מאחר והם מאפשרים הצצה לעולמם של אלו שחיים במדבר מתקופת עתיקות ועד היום",
//   Answer4:"4",
//   RightAnswerNum:3
// })
//         }//temp - inserting fake data to database
    
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
         
        } 

        else {

          this.toggleQuitModal();

        }
      }//checkIsQuizeOver

      moveToMap = ()=>{
        this.props.QuizeDone()
        this.setState({isEndGameModalVisible: false});
        this.setState({isQuitModalVisible: false});
      }

      checkLastSite= ()=>{
        this.setState({isScoreModalVisible: false});
        if((this.state.numberOfSite==4 && global.firtSiteVisit==1) ||(this.state.numberOfSite==1 && global.firtSiteVisit==4 )){ //real if
        // if(global.firtSiteVisit==1 ){ // check end modal

        
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
          <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/game%2Fleave_quize.png?alt=media&token=74c87a95-3127-4cdf-ae0a-0d9e5662dfbf'}} style={styles.modalImage}/>
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
          <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/game%2Fend_Banner.png?alt=media&token=a26c216b-cd5f-492c-8c6c-911002eae4c1'}} style={styles.modalImage}/>
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
          <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/game%2Fquize_score.png?alt=media&token=d34cdbba-8afd-4d44-9234-e77674d0c4d0'}} style={styles.modalImage}/>
          
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