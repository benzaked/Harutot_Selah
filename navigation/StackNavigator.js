import React from 'react';
import { Platform, Dimensions } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import{createDrawerNavigator} from 'react-navigation-drawer'
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen'
import LoggedInPage from '../screens/LoggedInPage'

import SitesCatalog from '../screens/SitesCatalog'

import MenuDrawer from '../components/MenuDrawer';



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
    LoggedInPage:{
      screen:LoggedInPage,
      navigationOptions: {
        title: 'Whatever Title',
      }

   
    }
}, {
    initialRouteName: 'SitesCatalog',
  });
export default StackNavigator;
