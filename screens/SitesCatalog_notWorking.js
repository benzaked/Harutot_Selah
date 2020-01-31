import React from 'react';
import { StyleSheet, Text, View,Button ,TouchableHighlight,Image,FlatList} from 'react-native';
import LoggedInPage from './LoggedInPage'
import global from '../components/global'
import { Card } from "react-native-elements";

import MenuButton from '../components/MenuButton'

const data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something",
    pageNo: 1
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something two"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something three"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something four"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something five"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something six"
  }
];
export default class SitesCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
    moveToAddNewCustomer =  (pageNo) =>{
        console.log('im here');
        const L = <LoggedInPage name ={global.userName} photoUrl={global.photoUrl} userID={global.userID} pageNo={pageNo} />
        return  L 

    }



  render() {
    return (
      <FlatList
        horizontal
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <TouchableHighlight 
            onPress={() => this.moveToAddNewCustomer(rowData.pageNo)}>
            <Image
              source={{ uri: rowData.imageUrl }}
              style={{ 
                flex: 1,
                flexDirection: 'row',
                backgroundColor: 'silver',
                padding: 5,
                borderRadius: 5,
                height: null,
                width: null,
                margin: 6,
                resizeMode: 'cover' }}
            >
              {/* <Text style={{ marginBottom: 10 }}>
                {rowData.title}
              </Text> */}
            </Image>
            </TouchableHighlight>

          );
        }}
        keyExtractor={(item, index) => index}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
 image: {
  width: 100,
  height: 'auto',
  justifyContent: "space-between",
  flexDirection: "row"
 }
});
