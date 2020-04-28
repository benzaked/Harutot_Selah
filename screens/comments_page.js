import React ,  {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Image,ScrollView ,Share,BackHandle,Dimensions,TouchableOpacity} from 'react-native';
import Comment from '../Comment'
import firebase from 'firebase'
import { Icon } from 'react-native-elements'
import MenuButton from  '../components/MenuButton'
import Input from '../actions/Input'
import GameBanner from '../components/GameBanner'
import global from '../components/global'
import { NavigationActions,StackActions } from "react-navigation";
const {height, width} = Dimensions.get('window');
// import  Icon  from 'react-native-vector-icons/Ionicons';
// import Comments from "react-native-comments";
class comments_page extends Component {
    constructor(props){
        global.messege='כאן תוכל לתת פרשנות משלך לחרותת הסלע ולהתרשם מפרשנויות המבקרים האחרים'
        super(props);
        this.state = {
            moveToStory : this.props.navigation.state.params.moveToStory,
            name: this.props.navigation.state.params.name,
            photoUrl: this.props.navigation.state.params.photoUrl,
            userID: this.props.navigation.state.params.userID,
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
        if(this.state.userID ==userID ){return true}
        else return false;
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
          pageNo:3,
        }
        });
        this.props.navigation.dispatch(pushAction);
      //this.props.navigation.navigate('StoryList' ,params = {pageNo :3})
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
          <View style={styles.main} >
                  <ScrollView style={styles.viewComments}>
                    <MenuButton navigation={this.props.navigation} showIcon = {this.state.showMenuButtom} />
                    
                    <TouchableOpacity style={styles.share} onPress = { () =>  this.ShareStuff('טעימה מהטיול בליפא גל','  לחצו על הקישור',this.state.siteImg)}>
                    <Icon name='share' color='white'/>	
                    <Text style={styles.buttontextStyle}> שתף </Text>
                    </TouchableOpacity>

                    <View>
                            {!(this.state.moveToStory)? (
                            <TouchableOpacity style={styles.back} onPress = { () =>  this.props.navigation.goBack(null)}>
                              <Image source={require('../assets/arrow-back-outline.png')} style={styles.image}/>
                              <Text style={styles.buttontextStyle}> חזור </Text>
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
                            <TouchableOpacity style={styles.buttonStyle} onPress = { () =>  this.navigateToStory()}>
                              <Text style={styles.buttontextStyle}>למעבר לסיפור</Text>
                            </TouchableOpacity>):(<Text></Text>) }
                            </View>
                                                      
                            {/* <Input onSubmit={this.submitComment.bind(this)} /> */}
                            <ScrollView >
                              {DBcommentsList}
                            </ScrollView>
                            
                          </ScrollView>
                      </View>
                    </ScrollView>
                    <View style={styles.inputBottom} >
                    <Input onSubmit={this.submitComment.bind(this)} />
                    </View>
                    <GameBanner showScore={false}/>
                    
                  </View>
        )
      
    }
}
export default comments_page;

const styles = StyleSheet.create({

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
      paddingStart: 4,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
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
      paddingStart: 4,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
    },

    buttonStyle: {
      flex:1,
      alignSelf: 'stretch',
      backgroundColor: "#526674",
      marginTop:20,
      marginBottom:20,
      marginLeft: 5,
      marginRight:5,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
          
    },
    
    buttontextStyle: {
      fontSize: 22,
      fontWeight: '900',
      paddingTop: 6,
      paddingBottom:6,
      color:'white',
      textAlign: 'center',
},

main:{
  flex:1,
  backgroundColor: "#abd6f4", 
},

viewComments: {
 position: 'absolute',
 top: 0,
 right: 0,   
 height: global.gameHeight,
 backgroundColor: "#abd6f4",  
},

image: {
  width:26,
  height: 26,
  // resizeMode:'contain'
  
}
})