import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import FetchLocation from './components/FetchLocation';


export default class App extends React.Component {
  getUserLocationHandler = () =>{
    navigator.geolocation.getCurrentPosition(position=>{
      console.log(position);
    },err=>console.log(err));
  }
  
  render(){
    return(
      <View style={style.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler}/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
