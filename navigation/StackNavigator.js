import React from 'react';
import { Platform, Dimensions } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import{createDrawerNavigator} from 'react-navigation-drawer'
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import Map from '../components/Map'
import comments_page from '../screens/comments_page'

import SitesCatalog from '../screens/SitesCatalog'

import StoryList from '../components/StoryList'
import QuizeList from '../components/QuizeList'



const StackNavigator = createStackNavigator(
  {


    SitesCatalog:{
        screen: SitesCatalog,
        navigationOptions: {
            header: null,
            drawerLockMode: "locked-closed",
            disableGestures: true
          }
    },
    comments_page:{
      screen:comments_page,
      navigationOptions: {
        header: null,
        drawerLockMode: "locked-closed",
        disableGestures: true
      }
    },
    comments_page_game:{
      screen:comments_page,
      navigationOptions: {
        header: null,
            drawerLockMode: "locked-closed",
            disableGestures: true
      }
    },
    StoryList:{
      screen : StoryList,
      navigationOptions: {
        header: null,
            drawerLockMode: "locked-closed",
            disableGestures: true
      }
    },
    Map:{
      screen: Map,
      navigationOptions: {
        header: null,
        drawerLockMode: "locked-closed",
        disableGestures: true
      }
      },
    

}, {
    initialRouteName: 'SitesCatalog',
  });
export default StackNavigator;
