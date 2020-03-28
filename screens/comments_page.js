import React ,  {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Image,ScrollView ,Share,BackHandle,Dimensions,TouchableOpacity} from 'react-native';
import Comment from '../Comment'
import firebase from 'firebase'
import { Icon } from 'react-native-elements'
import MenuButton from  '../components/MenuButton'
import SitesCatalog from './SitesCatalog'
import Input from '../actions/Input'
import { NavigationActions,StackActions } from "react-navigation";
const {height, width} = Dimensions.get('window');
// import { Icon } from 'react-native-vector-icons/Icon';
// import Comments from "react-native-comments";
class comments_page extends Component {
    constructor(props){
        
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
        console.log('Navigations ::::::::::::::::::::::::::::::::: ' + this.props.navigation)
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
        console.log(key)
        return firebase.database().ref('comments').child('' + key).remove();
    }
    isOwner(userID){
        if(this.state.userID ==userID ){return true}
        else return false;
     }
    submitComment(content){
        //console.log('photo: ',this.state.photoUrl)
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
      
      // const pushAction = StackActions.push({
      //   routeName: 'StoryList',
      //   params: {

      //     pageNo:3,

      //   }
      //   });
      //   this.props.navigation.dispatch(pushAction);
      this.props.navigation.navigate('StoryList' ,params = {pageNo :3})
    }

    render(){
        
        const DBcommentsList = this.state.all_comments.map((data,key,val) => {
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
                  <ScrollView>
                    <MenuButton navigation={this.props.navigation} showIcon = {this.state.showMenuButtom} />
                    {this.state.moveToStory?
                               ( <TouchableOpacity style={styles.buttonStyle} onPress = { this.navigateToStory}>
                                          <Text style={styles.buttontextStyleShort}> למעבר לסיפור</Text>
                                        </TouchableOpacity>):(<Text></Text>) }
                    <View style={{flex:1,width:"100%",height:"100%"}} >
                        <Image
                      style={{ height:350, width:width}}
                      source={ this.state.siteImg}
                        />
                        <ScrollView style={{ backgroundColor: "#FFFFFF" }}>

                            
                            
                            
                            <Icon
                              raised
                              reverse
                              name='share'
                              type='font-awesome'
                              color='#51D2A8'
                              onPress={() => this.ShareStuff('IM Title ','Im content','Im photo')}

                            />
                            
                            
                            <Input onSubmit={this.submitComment.bind(this)} />
                            <ScrollView >
                              {DBcommentsList}
                            </ScrollView>
                            
                          </ScrollView>
                      </View>
                    </ScrollView>
        )
      
    }
}
export default comments_page;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center'

    },
    buttonStyle: {
      zIndex: 9,
      position: 'absolute',
      top: 40,
      left: 20,
		  
      flex:1,
      alignSelf: 'center',
      backgroundColor: '#f1f3f6',
      borderWidth:1,
      borderColor:'gainsboro',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
    },
    
    buttontextStyleShort: {
      fontSize: 14,
      fontWeight: '900',
      paddingTop: 6,
      paddingBottom:6,
      color:'black',
      textAlign: 'center',
      fontStyle:  'italic'
    },
})