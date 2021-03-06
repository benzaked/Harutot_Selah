import React ,  {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Image,ScrollView ,Share,BackHandle,Dimensions,TouchableOpacity} from 'react-native';
import Comment from '../Comment'
import firebase from 'firebase'
import { Icon } from 'react-native-elements'
import MenuButton from  '../components/MenuButton'
import Input from '../actions/Input'
import GameBanner from '../components/GameBanner'
import global from '../components/global'
import styles from "../styles/styles";

import { NavigationActions,StackActions } from "react-navigation";
const {height, width} = Dimensions.get('window');

class comments_page extends Component {
    constructor(props){
        global.messege='כאן תוכל לתת פרשנות משלך לחרותת הסלע ולהתרשם מפרשנויות המבקרים האחרים'
        super(props);
        this.state = {
            moveToStory : this.props.navigation.state.params.moveToStory,
            name: this.props.navigation.state.params.name,
            photoUrl: this.props.navigation.state.params.photoUrl,
            userID: this.props.navigation.state.params.userID,
            userEmail: this.props.navigation.state.params.userEmail,
            pageNo: this.props.navigation.state.params.pageNo,
            siteImg:this.props.navigation.state.params.siteImg,
            
            showMenuButtom: false,
            comment_text: '',
            all_comments: []
        }
        

    }

    componentWillMount() {
        pageNo = this.props.navigation.state.params.pageNo
        const commentsRef = firebase.database().ref('comments');
        this.listenForNotitas(commentsRef);
      };
  
      listenForNotitas = (commentsRef) => {
        commentsRef.on('value', (dataSnapshot) => {
          var aux = [];
          dataSnapshot.forEach((child) => {
            child.val().pageNo == this.state.pageNo ?
              aux.push({
                created_at: child.val().created_at,
                profile_picture: child.val().profile_picture,
                name : child.val().name,
                userID :child.val().userID,
                content :child.val().content,
                id: child.key
              }) : null
            });
          this.setState({all_comments: aux});
        });
      };  // listenForNotitas
       
      deleteAction = (key) => {
        return firebase.database().ref('comments').child('' + key).remove();
    }
    isOwner(userID){
        if(this.state.userID == userID || global.ownerEmail.includes(global.userEmail) ){          
          return true}
        else {
          return false};
     }
    submitComment(content){
        firebase.database().ref('/comments/').push({
            profile_picture: this.state.photoUrl,
            name: this.state.name,
            created_at: Date.now(),
            userID:this.state.userID,
            content: content,
            pageNo: this.state.pageNo
        })
    }
      
    
   ShareStuff = (title,message,url) =>{
      Share.share({
        title: title,
        message: title + ':' + message + ' ' + url ,
        url: url
      }, {dialogTitle: 'shate' + title});
    }
    navigateToStory = () => {
      
      const pushAction = StackActions.push({
        routeName: 'StoryList',
        params: {
          pageNo:this.state.pageNo +1 ,
        }
        });
        this.props.navigation.dispatch(pushAction);
      
    }
    compare (a, b) {
      if (a.created_at > b.created_at) {
        return -1;
    }
    if (b.created_at> a.created_at) {
        return 1;
    }
    return 0;
   }
    render(){

      console.log(this.state.all_comments.sort(this.compare))
        const DBcommentsList = this.state.all_comments.sort(this.compare).map((data,key,val) => {
             return (
              
                <Comment
                 key={key}
                 username = {data.name}
                 image= {data.profile_picture}
                 userID = {data.userID}
                 isOwner= {this.isOwner.bind(this)}
                 canEdit = {this.isOwner.bind(this)}
                 created_at = {data.created_at}
                 body = {data.content}
                 id = {data.id}
                 deleteAction = {this.deleteAction.bind(this) }
                 
                  ></Comment>

            );
          }
         
          );
      
        return(  
          <View style={commentsStyles.main} >
                  <ScrollView persistentScrollbar={true} style={commentsStyles.viewComments}>
                    <MenuButton navigation={this.props.navigation} showIcon = {this.state.showMenuButtom} />
                    
                    <TouchableOpacity style={commentsStyles.share} onPress = { () =>  this.ShareStuff('טעימה מהטיול בליפא גל','  לחצו על הקישור',this.state.siteImg)}>
                    <Icon name='share' color='white'/>	
                    {/* <Text style={styles.darkButtonText}> שתף </Text> */}
                    </TouchableOpacity>

                    <View>
                            {!(this.state.moveToStory)? (
                            <TouchableOpacity style={commentsStyles.back} onPress = { () =>  this.props.navigation.goBack(null)}>
                              <Image source={require('../assets/arrow-back-outline.png')} style={commentsStyles.image}/>
                              {/* <Text style={styles.darkButtonText}> חזור </Text> */}
                            </TouchableOpacity>):(<Text></Text>) }
                    </View>

                    <View style={{flex:1,width:"100%",height:"100%"}} >
                        <Image
                      style={{ height:350, width:width,}}
                      source={{uri: this.state.siteImg}}
                      
                        />
                        <ScrollView style={{ backgroundColor: "#abd6f4" }}>

                            <View>
                            {this.state.moveToStory? (
                            <TouchableOpacity style={commentsStyles.buttonStyle} onPress = { () =>  this.navigateToStory()}>
                              <Text style={styles.darkButtonText}>למעבר לסיפור</Text>
                            </TouchableOpacity>):(<Text></Text>) }
                            </View>
                                                      
                            {/* <Input onSubmit={this.submitComment.bind(this)} /> */}
                            <ScrollView >
                              {DBcommentsList}
                            </ScrollView>
                            
                          </ScrollView>
                      </View>
                    </ScrollView>
                    <View style={commentsStyles.inputBottom} >
                    <Input onSubmit={this.submitComment.bind(this)} />
                    </View>
                    <GameBanner showScore={false}/>
                    
                  </View>
        )
      
    }
}
export default comments_page;

const commentsStyles = StyleSheet.create({

  inputBottom: {
    width: '98%',
    marginLeft: 5,
    marginRight:5,
    alignSelf: 'center',
    position: 'absolute', 
    bottom: 2,
    zIndex: 20,
    
  },
    
    share: {
      zIndex: 9,
      position: 'absolute',
      top: 40,
      left: 20,
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: "#526674",
      paddingHorizontal: 8,
      paddingVertical:8,
      borderRadius:20
    },

    back: {
      zIndex: 9,
      position: 'absolute',
      top: 40,
      right: 20,
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: "#526674",
      paddingHorizontal: 8,
      paddingVertical:8,
      borderRadius:20
    },

    buttonStyle: {
      flex:1,
      alignSelf: 'stretch',
      backgroundColor: "#526674",
      marginTop:7,
      marginBottom:7,
      marginLeft: 5,
      marginRight:5,
      borderRadius:20
          
    },
    

main:{
  flex:(Dimensions.get('window').height),
  backgroundColor: "#abd6f4", 
},


viewComments: {
  flex: global.gameHeight,
 },

image: {
  width:26,
  height: 26,
  // resizeMode:'contain'
  
}
})