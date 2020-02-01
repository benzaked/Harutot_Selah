import React ,  {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import Expo from "expo"
import firebase from 'firebase'
import * as Google from 'expo-google-app-auth';
import LoggedInPage from './LoggedInPage'
import MenuDrawer from '../components/MenuDrawer'
import {firebaseConfig} from '../config'
import global from '../components/global'


class LoginScreen extends Component {
    constructor(props){
      console.ignoredYellowBox = [
        'Setting a timer'
    ]
      super(props);
      this.state = {
        signedIn: false,
        name:"",
        photoUrl:"",
        userID:""

      }
      if (!firebase.apps.length) {firebase.initializeApp(firebaseConfig); }
    }
  isUserEqual = (userID, firebaseUser) => {
    console.log("in is new user?");
    if (firebaseUser) {
      console.log(userID);
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === userID) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    console.log("not new user")
    return false;
  }
  onSignIn = (googleUser,userID) => {
    // console.log('Google Auth Response', googleUser);

    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
      unsubscribe();
      // console.log('########################################################################################################################');
      
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(userID, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );
        // Sign in with credential from the Google user.
        console.log('sdasdasdsadsadas');
        firebase.auth().signInWithCredential(credential).then(function(result) {
          console.log('user signed in');
          if(result.additionalUserInfo.isNewUser){ 
            firebase.database().ref('/users/' + result.user.uid).set({
              gmail: result.user.email,
              profile_picture: result.additionalUserInfo.profile.picture,
              locale: result.additionalUserInfo.profile.locale,
              first_name: result.additionalUserInfo.profile.given_name,
              last_name: result.additionalUserInfo.profile.family_name,
              created_at: Date.now()
            }).then(function (snapshot){
              // console.log('Snapshot', snapshot);
            });
          }else{
            firebase.database().ref('/users/' + result.user.uid).update({
              last_logged_in: Date.now()
            });
          }
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
      
    }.bind(this));
  };
      c
      signInWithGoogleAsync = async ()  => {
        try {
          const result = await Google.logInAsync({
            behavior: 'web',
            androidClientId:"1003696475172-je842d8md4rpd2ds28ld3mja5nppj5km.apps.googleusercontent.com",
            scopes: ['profile', 'email']
          });
         
          // });
      
          if (result.type === 'success') {
            // console.log(result.user.id);
            this.onSignIn(result,result.user.id);
            global.userName = result.user.name
            global.photoUrl = result.user.photoUrl
            global.userId = result.user.id
            this.setState({
              signedIn: true,
              name: result.user.name,
              photoUrl: result.user.photoUrl,
              userID: result.user.id
            });
            console.log('the name is ',this.state.name)

            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      }
      render() {
        return (
          <View style={styles.container}>
        {this.state.signedIn ? (
          this.props.navigation.navigate('Home')
            
          
          //  <LoggedInPage name ={this.state.name} photoUrl={this.state.photoUrl} userID={this.state.userID} pageNo={1} />
        ) : (
          <Button title={"Sign In With Google"}
                 onPress={() =>this.signInWithGoogleAsync()}
                />
            
                
            
        )}
        </View>
        )}
}
export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center'

    }
})